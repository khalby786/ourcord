/* eslint-disable require-jsdoc */
import {Channel} from "../structures/Channel";
import {Guild} from "../structures/Guild";
import {User} from "../structures/User";
import {Member} from "../structures/Member";
import Client, {ClientOptions} from "../websocket";

export class Cache {
    options: ClientOptions;
    channels: Map<string, Channel>;
    guilds: Map<string, Guild>;
    users: Map<string, User>;
    members: Map<string, Member>;

    constructor(client: Client, options?: ClientOptions) {
      this.channels = options.cacheChannels ? new Map() : null;
      this.guilds = options.cacheGuilds ? new Map() : null;
      this.users = options.cacheChannels ? new Map() : null;
      this.members = options.cacheMembers ? new Map() : null;
      this._bind(client);
    }

    _bind(client: Client) {
      client.cache = {};
      client.cache.channels = this.channels;
      client.cache.guilds = this.guilds;
      client.cache.users = this.users;
      client.cache.members = this.members;
    }
}
