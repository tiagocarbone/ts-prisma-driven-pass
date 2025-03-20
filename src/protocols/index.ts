export type UserSignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string
};

export type UserSignIn ={
  email: string;
  password: string
}


export type PostCredential = {
	title: string,
	url: string,
	username: string,
	password: string,
  userId: number
}


export type PutCredential = Omit<PostCredential, 'userId'>;

export type  DecodedToken = {
  userId: string;
  //mensagem: string;
  iat?: number;
  exp?: number;
}













export type ErrorType = {
    type: string;
    message: string;
  }