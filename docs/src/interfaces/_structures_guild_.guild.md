# Interface: Guild

## Hierarchy

* **Guild**

## Index

### Properties

* [afk\_channel\_id](_structures_guild_.guild.md#afk_channel_id)
* [afk\_timeout](_structures_guild_.guild.md#afk_timeout)
* [application\_id](_structures_guild_.guild.md#application_id)
* [approximate\_member\_count](_structures_guild_.guild.md#approximate_member_count)
* [approximate\_presence\_count](_structures_guild_.guild.md#approximate_presence_count)
* [banner](_structures_guild_.guild.md#banner)
* [channels](_structures_guild_.guild.md#channels)
* [default\_message\_notifications](_structures_guild_.guild.md#default_message_notifications)
* [description](_structures_guild_.guild.md#description)
* [discovery\_splash](_structures_guild_.guild.md#discovery_splash)
* [emojis](_structures_guild_.guild.md#emojis)
* [explicit\_content\_filter](_structures_guild_.guild.md#explicit_content_filter)
* [features](_structures_guild_.guild.md#features)
* [icon](_structures_guild_.guild.md#icon)
* [id](_structures_guild_.guild.md#id)
* [max\_members](_structures_guild_.guild.md#max_members)
* [max\_presences](_structures_guild_.guild.md#max_presences)
* [members](_structures_guild_.guild.md#members)
* [mfa\_level](_structures_guild_.guild.md#mfa_level)
* [name](_structures_guild_.guild.md#name)
* [owner\_id](_structures_guild_.guild.md#owner_id)
* [preferred\_locale](_structures_guild_.guild.md#preferred_locale)
* [premium\_subscription\_count](_structures_guild_.guild.md#premium_subscription_count)
* [premium\_tier](_structures_guild_.guild.md#premium_tier)
* [public\_updates\_channel\_id](_structures_guild_.guild.md#public_updates_channel_id)
* [region](_structures_guild_.guild.md#region)
* [roles](_structures_guild_.guild.md#roles)
* [rules\_channel\_id](_structures_guild_.guild.md#rules_channel_id)
* [splash](_structures_guild_.guild.md#splash)
* [system\_channel\_flags](_structures_guild_.guild.md#system_channel_flags)
* [system\_channel\_id](_structures_guild_.guild.md#system_channel_id)
* [unavailable](_structures_guild_.guild.md#unavailable)
* [vanity\_url\_code](_structures_guild_.guild.md#vanity_url_code)
* [verification\_level](_structures_guild_.guild.md#verification_level)
* [widget\_channel\_id](_structures_guild_.guild.md#widget_channel_id)
* [widget\_enabled](_structures_guild_.guild.md#widget_enabled)

## Properties

### afk\_channel\_id

• `Optional` **afk\_channel\_id**: string

*Defined in [src/structures/Guild.ts:18](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L18)*

___

### afk\_timeout

• `Optional` **afk\_timeout**: number

*Defined in [src/structures/Guild.ts:19](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L19)*

___

### application\_id

• `Optional` **application\_id**: string

*Defined in [src/structures/Guild.ts:16](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L16)*

___

### approximate\_member\_count

• `Optional` **approximate\_member\_count**: number

*Defined in [src/structures/Guild.ts:38](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L38)*

___

### approximate\_presence\_count

• `Optional` **approximate\_presence\_count**: number

*Defined in [src/structures/Guild.ts:39](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L39)*

___

### banner

• `Optional` **banner**: string

*Defined in [src/structures/Guild.ts:14](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L14)*

___

### channels

• `Optional` **channels**: Map<string, [Channel](../classes/_structures_channel_.channel.md)\>

*Defined in [src/structures/Guild.ts:40](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L40)*

___

### default\_message\_notifications

• `Optional` **default\_message\_notifications**: number

*Defined in [src/structures/Guild.ts:25](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L25)*

___

### description

• `Optional` **description**: string

*Defined in [src/structures/Guild.ts:9](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L9)*

___

### discovery\_splash

• `Optional` **discovery\_splash**: string

*Defined in [src/structures/Guild.ts:11](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L11)*

___

### emojis

• `Optional` **emojis**: Array<[Emoji](../classes/_structures_emoji_.emoji.md)\>

*Defined in [src/structures/Guild.ts:13](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L13)*

___

### explicit\_content\_filter

• `Optional` **explicit\_content\_filter**: number

*Defined in [src/structures/Guild.ts:27](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L27)*

___

### features

• `Optional` **features**: Array<string\>

*Defined in [src/structures/Guild.ts:12](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L12)*

___

### icon

• `Optional` **icon**: string

*Defined in [src/structures/Guild.ts:8](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L8)*

___

### id

• `Optional` **id**: string

*Defined in [src/structures/Guild.ts:6](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L6)*

___

### max\_members

• `Optional` **max\_members**: number

*Defined in [src/structures/Guild.ts:29](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L29)*

___

### max\_presences

• `Optional` **max\_presences**: number

*Defined in [src/structures/Guild.ts:28](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L28)*

___

### members

• `Optional` **members**: Map<string, [Member](_structures_member_.member.md)\>

*Defined in [src/structures/Guild.ts:41](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L41)*

___

### mfa\_level

• `Optional` **mfa\_level**: number

*Defined in [src/structures/Guild.ts:26](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L26)*

___

### name

• `Optional` **name**: string

*Defined in [src/structures/Guild.ts:7](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L7)*

___

### owner\_id

• `Optional` **owner\_id**: string

*Defined in [src/structures/Guild.ts:15](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L15)*

___

### preferred\_locale

• `Optional` **preferred\_locale**: string

*Defined in [src/structures/Guild.ts:34](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L34)*

___

### premium\_subscription\_count

• `Optional` **premium\_subscription\_count**: number

*Defined in [src/structures/Guild.ts:32](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L32)*

___

### premium\_tier

• `Optional` **premium\_tier**: number

*Defined in [src/structures/Guild.ts:31](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L31)*

___

### public\_updates\_channel\_id

• `Optional` **public\_updates\_channel\_id**: string

*Defined in [src/structures/Guild.ts:36](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L36)*

___

### region

• `Optional` **region**: string

*Defined in [src/structures/Guild.ts:17](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L17)*

___

### roles

• `Optional` **roles**: Array<[Role](_structures_role_.role.md)\>

*Defined in [src/structures/Guild.ts:24](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L24)*

___

### rules\_channel\_id

• `Optional` **rules\_channel\_id**: string

*Defined in [src/structures/Guild.ts:35](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L35)*

___

### splash

• `Optional` **splash**: string

*Defined in [src/structures/Guild.ts:10](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L10)*

___

### system\_channel\_flags

• `Optional` **system\_channel\_flags**: number

*Defined in [src/structures/Guild.ts:33](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L33)*

___

### system\_channel\_id

• `Optional` **system\_channel\_id**: string

*Defined in [src/structures/Guild.ts:20](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L20)*

___

### unavailable

• `Optional` **unavailable**: boolean

*Defined in [src/structures/Guild.ts:37](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L37)*

___

### vanity\_url\_code

• `Optional` **vanity\_url\_code**: string

*Defined in [src/structures/Guild.ts:30](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L30)*

___

### verification\_level

• `Optional` **verification\_level**: number

*Defined in [src/structures/Guild.ts:23](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L23)*

___

### widget\_channel\_id

• `Optional` **widget\_channel\_id**: string

*Defined in [src/structures/Guild.ts:22](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L22)*

___

### widget\_enabled

• `Optional` **widget\_enabled**: boolean

*Defined in [src/structures/Guild.ts:21](https://github.com/ourcord/ourcord/blob/1388589/src/structures/Guild.ts#L21)*
