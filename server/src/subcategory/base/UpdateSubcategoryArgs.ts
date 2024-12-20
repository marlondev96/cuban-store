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
import { SubcategoryWhereUniqueInput } from "./SubcategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SubcategoryUpdateInput } from "./SubcategoryUpdateInput";

@ArgsType()
class UpdateSubcategoryArgs {
  @ApiProperty({
    required: true,
    type: () => SubcategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubcategoryWhereUniqueInput)
  @Field(() => SubcategoryWhereUniqueInput, { nullable: false })
  where!: SubcategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubcategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubcategoryUpdateInput)
  @Field(() => SubcategoryUpdateInput, { nullable: false })
  data!: SubcategoryUpdateInput;
}

export { UpdateSubcategoryArgs as UpdateSubcategoryArgs };
