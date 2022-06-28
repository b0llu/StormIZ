import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

interface MyToken {
  encodedToken: string;
  email: string;
}

const ENV: any = process.env.REACT_APP_JWT_SECRET;

export const requiresAuth = function (this: any, request: any) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwt_decode<MyToken>(encodedToken, ENV);
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    if (user) {
      return user._id;
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
