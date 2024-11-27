import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscountCupponModuleBase } from "./base/discountCuppon.module.base";
import { DiscountCupponService } from "./discountCuppon.service";
import { DiscountCupponController } from "./discountCuppon.controller";
import { DiscountCupponResolver } from "./discountCuppon.resolver";

@Module({
  imports: [DiscountCupponModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscountCupponController],
  providers: [DiscountCupponService, DiscountCupponResolver],
  exports: [DiscountCupponService],
})
export class DiscountCupponModule {}
