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
	password: string
}













export type ErrorType = {
    type: string;
    message: string;
  }