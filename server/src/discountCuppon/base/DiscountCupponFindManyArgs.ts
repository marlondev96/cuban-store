/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountCupponWhereInput } from "./DiscountCupponWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DiscountCupponOrderByInput } from "./DiscountCupponOrderByInput";

@ArgsType()
class DiscountCupponFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DiscountCupponWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DiscountCupponWhereInput, { nullable: true })
  @Type(() => DiscountCupponWhereInput)
  where?: DiscountCupponWhereInput;

  @ApiProperty({
    required: false,
    type: [DiscountCupponOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DiscountCupponOrderByInput], { nullable: true })
  @Type(() => DiscountCupponOrderByInput)
  orderBy?: Array<DiscountCupponOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DiscountCupponFindManyArgs as DiscountCupponFindManyArgs };
