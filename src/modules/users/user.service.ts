
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import config from "../../config";
import { RegisterpayLoad } from "./user.interface";



const registereddB= async (payload:RegisterpayLoad)=>{
    const { name, email, password , profilePhoto } = payload;
 const isExaistingUser = await prisma.user.findUnique({ where: { email } });

  if (isExaistingUser) {
   throw new Error("user already reg")
  }
  const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));
const createdUser = await prisma.user.create({
  data:{
   name,
    email,
    password: hashedPassword,
   
  }

  
})

 await prisma.profile.create({
  data:{
    userid:createdUser.id,
    profilePhoto
  }
})


const user = await prisma.user.findUnique({
  where: { id: createdUser.id ,
    email:createdUser.email ||email
  },
    omit:{password:true},
 include:{
  profile :true
 }
});
return user;
}

export const useServiceregdB ={
    registereddB
}