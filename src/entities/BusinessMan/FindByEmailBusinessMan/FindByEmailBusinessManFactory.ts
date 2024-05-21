import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import FindByEmailBusinessManEntity from "./FindByEmailBusinessManEntity";
import FindByEmailBusinessManController from "./FindByEmailBusinessManController";

export default function FindByEmailBusinessManFactory(): FindByEmailBusinessManController {
   const prismaBusinessManRepository = new PrismaBusinessManRepository();
   const findByEmailBusinessManEntity = new FindByEmailBusinessManEntity(prismaBusinessManRepository);
   const findByEmailBusinessManController = new FindByEmailBusinessManController(findByEmailBusinessManEntity)
   return findByEmailBusinessManController;
}