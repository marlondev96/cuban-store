import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountCupponServiceBase } from "./base/discountCuppon.service.base";

@Injectable()
export class DiscountCupponService extends DiscountCupponServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
