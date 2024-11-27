import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiscountCupponResolverBase } from "./base/discountCuppon.resolver.base";
import { DiscountCuppon } from "./base/DiscountCuppon";
import { DiscountCupponService } from "./discountCuppon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountCuppon)
export class DiscountCupponResolver extends DiscountCupponResolverBase {
  constructor(
    protected readonly service: DiscountCupponService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
