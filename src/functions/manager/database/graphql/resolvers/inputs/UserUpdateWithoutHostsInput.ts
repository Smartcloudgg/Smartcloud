import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionUpdateManyWithoutOwnerInput } from "../inputs/ActionUpdateManyWithoutOwnerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BotUpdateManyWithoutOwnerInput } from "../inputs/BotUpdateManyWithoutOwnerInput";
import { CommandUpdateManyWithoutOwnerInput } from "../inputs/CommandUpdateManyWithoutOwnerInput";
import { DiscordUserUpdateOneWithoutUserInput } from "../inputs/DiscordUserUpdateOneWithoutUserInput";
import { ManagerUpdateManyWithoutOwnerInput } from "../inputs/ManagerUpdateManyWithoutOwnerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PATUpdateManyWithoutUserInput } from "../inputs/PATUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitchUserUpdateOneWithoutUserInput } from "../inputs/TwitchUserUpdateOneWithoutUserInput";
import { TwitterUserUpdateManyWithoutUserInput } from "../inputs/TwitterUserUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutHostsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  actions?: ActionUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => BotUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  Bot?: BotUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CommandUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  commands?: CommandUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateOneWithoutUserInput, {
    nullable: true
  })
  discord?: DiscordUserUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  Manager?: ManagerUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => PATUpdateManyWithoutUserInput, {
    nullable: true
  })
  pat?: PATUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserUpdateOneWithoutUserInput, {
    nullable: true
  })
  twitch?: TwitchUserUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateManyWithoutUserInput, {
    nullable: true
  })
  TwitterUser?: TwitterUserUpdateManyWithoutUserInput | undefined;
}
