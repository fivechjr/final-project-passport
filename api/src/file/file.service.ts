import { Bucket, Storage } from '@google-cloud/storage';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { CryptoService } from 'src/crypto/crypto.service';

@Injectable()
export class FileService {
  private readonly bucket: Bucket;

  constructor(
    private readonly configService: ConfigService,
    private readonly cryptoService: CryptoService,
  ) {
    const storage = new Storage({
      projectId: configService.get('GCP_PROJECT_ID'),
      // @ts-ignore
      credentials: JSON.parse(configService.get('GCP_CREDENTIALS')),
    });
    this.bucket = storage.bucket(configService.get('GCP_BUCKET'));
  }

  getPublicURL(fileName) {
    return `https://storage.googleapis.com/${this.configService.get(
      'GCP_BUCKET',
    )}/${fileName}`;
  }

  async uploadFile(userID: string, file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileName = this.cryptoService.createFileNameHash(
        Date.now() + ' - ' + userID,
      );
      const fileInstance = this.bucket.file(fileName);

      const stream = fileInstance.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
        resumable: false,
      });

      stream.on('error', err => {
        reject(new InternalServerErrorException('Upload Error'));
      });

      stream.on('finish', () => {
        fileInstance.makePublic().then(() => {
          resolve(this.getPublicURL(fileName));
        });
      });

      stream.end(file.buffer);
    });
  }
}
