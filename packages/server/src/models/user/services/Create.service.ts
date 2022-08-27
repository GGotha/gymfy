// import { AuthenticationError } from "apollo-server-express";
// import bcrypt from "bcrypt";
// import { prisma } from "../../../externals/orm";
// import { generateToken } from "../../../token";

// interface Request {
//   name: string;
//   email: string;
//   password: string;
// }

// interface Response {
//   user: any;
//   token: string;
// }

// class CreateService {
//   public static async execute(data: Request): Promise<Response> {
//     const { name, email } = data;
//     let { password } = data;

//     const thisUserAlreadyExists = await prisma.user.findFirst({ where: { email } });

//     if (thisUserAlreadyExists) {
//       throw new AuthenticationError("This user already exists!");
//     }

//     password = await bcrypt.hash(password, 8);

//     const role = await prisma.role.findFirst({ where: { name: "User", active: true } });
//     const user = await prisma.user.create({
//       data: {
//         id_role: role.id,
//         name,
//         email,
//         password,
//       },
//     });

//     return {
//       user,
//       token: generateToken({ userId: user.id, role: user.id_role }),
//     };
//   }
// }

// export { CreateService };
