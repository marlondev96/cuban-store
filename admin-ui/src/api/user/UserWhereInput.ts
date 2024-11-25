import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  photo?: JsonFilter;
  username?: StringFilter;
};
