export type LoginCredential = {
    email: string;
    password: string;
  };
  
  export type SignupCredential = {
    name: string;
    email: string;
    password: string;
  };
  
  export type LoginError = {
    email: string;
    password: string;
  };
  
  export type SignupError = {
    name: string;
    email: string;
    password: string;
  };