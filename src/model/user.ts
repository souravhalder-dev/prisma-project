
 await prisma.profile.create({
  data:{
    userid:createdUser.id,
    profilePhoto
  }
})
