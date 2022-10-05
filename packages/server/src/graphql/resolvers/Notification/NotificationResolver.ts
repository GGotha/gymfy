import { Arg, Authorized, Mutation, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Notification } from "~/graphql/models";

@Resolver()
export class NotificationResolver {
  @Authorized("Administrator")
  @Mutation(() => Notification)
  async createNotification(@Arg("id_user") id_user: string, @Arg("id_event") id_event: string) {
    const notification = await prisma.notification.create({
      data: { id_user_to_notify: id_user, id_event, seen_by_user: false },
    });

    return notification;
  }
}
