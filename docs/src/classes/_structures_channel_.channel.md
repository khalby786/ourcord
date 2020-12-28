# Class: Channel

## Hierarchy

* **Channel**

## Index

### Constructors

* [constructor](_structures_channel_.channel.md#constructor)

### Properties

* [application\_id](_structures_channel_.channel.md#application_id)
* [bitrate](_structures_channel_.channel.md#bitrate)
* [icon](_structures_channel_.channel.md#icon)
* [id](_structures_channel_.channel.md#id)
* [last\_message\_id](_structures_channel_.channel.md#last_message_id)
* [last\_pin\_timestamp](_structures_channel_.channel.md#last_pin_timestamp)
* [name](_structures_channel_.channel.md#name)
* [nsfw](_structures_channel_.channel.md#nsfw)
* [owner\_id](_structures_channel_.channel.md#owner_id)
* [parent\_id](_structures_channel_.channel.md#parent_id)
* [permission\_overwrites](_structures_channel_.channel.md#permission_overwrites)
* [position](_structures_channel_.channel.md#position)
* [rate\_limit\_per\_user](_structures_channel_.channel.md#rate_limit_per_user)
* [recipients](_structures_channel_.channel.md#recipients)
* [send](_structures_channel_.channel.md#send)
* [topic](_structures_channel_.channel.md#topic)
* [type](_structures_channel_.channel.md#type)
* [user\_limit](_structures_channel_.channel.md#user_limit)

## Constructors

### constructor

\+ **new Channel**(): [Channel](_structures_channel_.channel.md)

*Defined in src/structures/Channel.ts:25*

**Returns:** [Channel](_structures_channel_.channel.md)

## Properties

### application\_id

• `Optional` `Readonly` **application\_id**: string

*Defined in src/structures/Channel.ts:22*

___

### bitrate

• `Optional` `Readonly` **bitrate**: number

*Defined in src/structures/Channel.ts:16*

___

### icon

• `Optional` `Readonly` **icon**: string

*Defined in src/structures/Channel.ts:20*

___

### id

• `Readonly` **id**: string

*Defined in src/structures/Channel.ts:8*

___

### last\_message\_id

• `Optional` `Readonly` **last\_message\_id**: string

*Defined in src/structures/Channel.ts:15*

___

### last\_pin\_timestamp

• `Optional` `Readonly` **last\_pin\_timestamp**: string

*Defined in src/structures/Channel.ts:24*

___

### name

• `Optional` `Readonly` **name**: string

*Defined in src/structures/Channel.ts:12*

___

### nsfw

• `Optional` `Readonly` **nsfw**: boolean

*Defined in src/structures/Channel.ts:14*

___

### owner\_id

• `Optional` `Readonly` **owner\_id**: string

*Defined in src/structures/Channel.ts:21*

___

### parent\_id

• `Optional` `Readonly` **parent\_id**: string

*Defined in src/structures/Channel.ts:23*

___

### permission\_overwrites

• `Optional` `Readonly` **permission\_overwrites**: object

*Defined in src/structures/Channel.ts:11*

___

### position

• `Optional` `Readonly` **position**: number

*Defined in src/structures/Channel.ts:10*

___

### rate\_limit\_per\_user

• `Optional` `Readonly` **rate\_limit\_per\_user**: number

*Defined in src/structures/Channel.ts:18*

___

### recipients

• `Optional` `Readonly` **recipients**: object

*Defined in src/structures/Channel.ts:19*

___

### send

•  **send**: (content: string \| [MessageRaw](_structures_messageraw_.messageraw.md)) => Promise<[Message](_structures_message_.message.md)\>

*Defined in src/structures/Channel.ts:25*

___

### topic

• `Optional` `Readonly` **topic**: string

*Defined in src/structures/Channel.ts:13*

___

### type

• `Readonly` **type**: number

*Defined in src/structures/Channel.ts:9*

___

### user\_limit

• `Optional` `Readonly` **user\_limit**: number

*Defined in src/structures/Channel.ts:17*
