export interface Post{
  id: number;
  title: string;
  content: string;
  author: Author;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: number;
  parentid: string;
  username: string;
  fullname: string;
  password: string;
  email: string;
  phone: string;
  bod: string;
  gender: string;
  height: string;
  weight: string;
  enabled: boolean;
  verificationcode: string;
  verficationexpiration: string;
  roles: Role[];
  accountNonLocked: string;
  resetToken: string;
}

export interface Role {
  name: string;
  description: string;
//   permissions: string[];
}
