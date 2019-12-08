import { createParamDecorator } from '@nestjs/common';

export const UserID = createParamDecorator((data, req): string => {
  return req.userID;
});
