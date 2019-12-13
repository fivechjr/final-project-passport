import { createParamDecorator } from '@nestjs/common';

export const UserID = createParamDecorator((data, req): string => {
  return req.userID;
});

export const User = createParamDecorator((data, req): string => {
  return req.user;
});

export const ContentPreferences = createParamDecorator((data, req): string => {
  return req.user.contentPreferences;
});
