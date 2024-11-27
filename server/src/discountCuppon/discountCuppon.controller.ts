import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscountCupponService } from "./discountCuppon.service";
import { DiscountCupponControllerBase } from "./base/discountCuppon.controller.base";

@swagger.ApiTags("discountCuppons")
@common.Controller("discountCuppons")
export class DiscountCupponController extends DiscountCupponControllerBase {
  constructor(
    protected readonly service: DiscountCupponService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
