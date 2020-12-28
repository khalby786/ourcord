# Class: Message

## Hierarchy

* **Message**

## Index

### Constructors

* [constructor](_structures_message_.message.md#constructor)

### Properties

* [\_client](_structures_message_.message.md#_client)
* [attachments](_structures_message_.message.md#attachments)
* [author](_structures_message_.message.md#author)
* [channel](_structures_message_.message.md#channel)
* [channel\_type](_structures_message_.message.md#channel_type)
* [content](_structures_message_.message.md#content)
* [embeds](_structures_message_.message.md#embeds)
* [guild](_structures_message_.message.md#guild)
* [id](_structures_message_.message.md#id)
* [member](_structures_message_.message.md#member)
* [mentions](_structures_message_.message.md#mentions)
* [pinned](_structures_message_.message.md#pinned)
* [reactions](_structures_message_.message.md#reactions)
* [reply](_structures_message_.message.md#reply)
* [replyTo](_structures_message_.message.md#replyto)
* [stickers](_structures_message_.message.md#stickers)
* [timestamp](_structures_message_.message.md#timestamp)
* [tts](_structures_message_.message.md#tts)
* [type](_structures_message_.message.md#type)

### Methods

* [delete](_structures_message_.message.md#delete)
* [edit](_structures_message_.message.md#edit)

## Constructors

### constructor

\+ **new Message**(`data`: [MessageRaw](_structures_messageraw_.messageraw.md), `client`: [Client](_websocket_.client.md)): [Message](_structures_message_.message.md)

*Defined in src/structures/Message.ts:27*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [MessageRaw](_structures_messageraw_.messageraw.md) | the raw message |
`client` | [Client](_websocket_.client.md) | the client  |

**Returns:** [Message](_structures_message_.message.md)

## Properties

### \_client

•  **\_client**: [Client](_websocket_.client.md)

*Defined in src/structures/Message.ts:27*

___

### attachments

•  **attachments**: object

*Defined in src/structures/Message.ts:19*

___

### author

•  **author**: [User](_structures_user_.user.md)

*Defined in src/structures/Message.ts:13*

___

### channel

•  **channel**: [Channel](_structures_channel_.channel.md)

*Defined in src/structures/Message.ts:10*

___

### channel\_type

•  **channel\_type**: number

*Defined in src/structures/Message.ts:11*

___

### content

•  **content**: string \| object

*Defined in src/structures/Message.ts:15*

___

### embeds

•  **embeds**: object

*Defined in src/structures/Message.ts:20*

___

### guild

•  **guild**: object

*Defined in src/structures/Message.ts:12*

___

### id

•  **id**: string

*Defined in src/structures/Message.ts:9*

___

### member

•  **member**: [Member](../interfaces/_structures_member_.member.md)

*Defined in src/structures/Message.ts:14*

___

### mentions

•  **mentions**: object

*Defined in src/structures/Message.ts:18*

___

### pinned

•  **pinned**: boolean

*Defined in src/structures/Message.ts:22*

___

### reactions

•  **reactions**: object

*Defined in src/structures/Message.ts:21*

___

### reply

•  **reply**: () => [Message](_structures_message_.message.md)

*Defined in src/structures/Message.ts:26*

___

### replyTo

•  **replyTo**: object

*Defined in src/structures/Message.ts:25*

___

### stickers

•  **stickers**: object

*Defined in src/structures/Message.ts:24*

___

### timestamp

•  **timestamp**: number

*Defined in src/structures/Message.ts:16*

___

### tts

•  **tts**: boolean

*Defined in src/structures/Message.ts:17*

___

### type

•  **type**: string

*Defined in src/structures/Message.ts:23*

## Methods

### delete

▸ **delete**(`reason`: string): Promise<[Message](_structures_message_.message.md)\>

*Defined in src/structures/Message.ts:73*

The method used to delete the message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reason` | string | The reason for deleting the message. |

**Returns:** Promise<[Message](_structures_message_.message.md)\>

___

### edit

▸ **edit**(`content`: string): Promise<any\>

*Defined in src/structures/Message.ts:82*

Edits the message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | string | New content of the message. |

**Returns:** Promise<any\>
