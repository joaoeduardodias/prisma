import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: 'b18ff37c-4115-47c0-9488-cb0c1f603b2f',
    },
    data: {
      duration: 250,
      name: 'Curso de ReactJS',
      description: 'Curso muito bom de react',
    },
  })

  console.log(result)
}

main()
