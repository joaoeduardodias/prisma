import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      description: 'Curso excelente de NodeJS',
      duration: 200,
    },
  })
  console.log(result)
}

main()
