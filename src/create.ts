import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: 'Curso de React',
      description: 'Curso excelente de React com Diego',
    },
  })

  console.log(result)
}

main()
