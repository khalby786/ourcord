# Class: Client

**`param`** The client's token used for gateway connection.

**`param`** The socket.

**`param`** The configurations.

## Hierarchy

* EventEmitter

  ↳ **Client**

## Index

### Constructors

* [constructor](_websocket_.client.md#constructor)

### Properties

* [activities](_websocket_.client.md#activities)
* [cache](_websocket_.client.md#cache)
* [config](_websocket_.client.md#config)
* [hb](_websocket_.client.md#hb)
* [security](_websocket_.client.md#security)
* [socket](_websocket_.client.md#socket)
* [token](_websocket_.client.md#token)
* [user](_websocket_.client.md#user)
* [ws](_websocket_.client.md#ws)
* [defaultMaxListeners](_websocket_.client.md#defaultmaxlisteners)
* [errorMonitor](_websocket_.client.md#errormonitor)

### Methods

* [\_GetRestUser](_websocket_.client.md#_getrestuser)
* [\_MessageEmbed](_websocket_.client.md#_messageembed)
* [\_deleteEmoji](_websocket_.client.md#_deleteemoji)
* [\_modifyEmoji](_websocket_.client.md#_modifyemoji)
* [\_sendMessage](_websocket_.client.md#_sendmessage)
* [addListener](_websocket_.client.md#addlistener)
* [connect](_websocket_.client.md#connect)
* [createChannel](_websocket_.client.md#createchannel)
* [createSlashCommand](_websocket_.client.md#createslashcommand)
* [destroy](_websocket_.client.md#destroy)
* [emit](_websocket_.client.md#emit)
* [evaluate](_websocket_.client.md#evaluate)
* [eventNames](_websocket_.client.md#eventnames)
* [getGlobalSlashcommands](_websocket_.client.md#getglobalslashcommands)
* [getMaxListeners](_websocket_.client.md#getmaxlisteners)
* [getMetaData](_websocket_.client.md#getmetadata)
* [listenerCount](_websocket_.client.md#listenercount)
* [listeners](_websocket_.client.md#listeners)
* [off](_websocket_.client.md#off)
* [on](_websocket_.client.md#on)
* [once](_websocket_.client.md#once)
* [prependListener](_websocket_.client.md#prependlistener)
* [prependOnceListener](_websocket_.client.md#prependoncelistener)
* [rawListeners](_websocket_.client.md#rawlisteners)
* [removeAllListeners](_websocket_.client.md#removealllisteners)
* [removeListener](_websocket_.client.md#removelistener)
* [request](_websocket_.client.md#request)
* [setMaxListeners](_websocket_.client.md#setmaxlisteners)
* [setStatus](_websocket_.client.md#setstatus)
* [listenerCount](_websocket_.client.md#listenercount)

## Constructors

### constructor

\+ **new Client**(`token`: string, `options?`: [ClientOptions](../interfaces/_websocket_.clientoptions.md)): [Client](_websocket_.client.md)

*Overrides void*

*Defined in [src/websocket.ts:102](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L102)*

The main client constructor.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | string | The client's token used for gateway connection. |
`options?` | [ClientOptions](../interfaces/_websocket_.clientoptions.md) | - |

**Returns:** [Client](_websocket_.client.md)

## Properties

### activities

•  **activities**: any

*Defined in [src/websocket.ts:98](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L98)*

___

### cache

•  **cache**: any

*Defined in [src/websocket.ts:100](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L100)*

___

### config

•  **config**: [ClientOptions](../interfaces/_websocket_.clientoptions.md)

*Defined in [src/websocket.ts:99](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L99)*

___

### hb

• `Readonly` **hb**: Timeout

*Defined in [src/websocket.ts:95](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L95)*

___

### security

•  **security**: [SecurityProperties](../interfaces/_websocket_.securityproperties.md)

*Defined in [src/websocket.ts:102](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L102)*

___

### socket

•  **socket**: any

*Defined in [src/websocket.ts:97](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L97)*

___

### token

• `Readonly` **token**: string

*Defined in [src/websocket.ts:94](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L94)*

___

### user

• `Readonly` **user**: [User](_structures_user_.user.md)

*Defined in [src/websocket.ts:96](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L96)*

___

### ws

•  **ws**: [WSProperties](../modules/_websocket_.md#wsproperties)

*Defined in [src/websocket.ts:101](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L101)*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [Client](_websocket_.client.md).[defaultMaxListeners](_websocket_.client.md#defaultmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:45*

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: unique symbol

*Inherited from [Client](_websocket_.client.md).[errorMonitor](_websocket_.client.md#errormonitor)*

*Defined in node_modules/@types/node/events.d.ts:55*

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

## Methods

### \_GetRestUser

▸ **_GetRestUser**(`userID`: string): Promise<[User](_structures_user_.user.md)\>

*Defined in [src/websocket.ts:276](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L276)*

The method used to fetch a user from the rest discord API.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userID` | string | The ID of the user to fetch. |

**Returns:** Promise<[User](_structures_user_.user.md)\>

___

### \_MessageEmbed

▸ **_MessageEmbed**(`channel`: string, `options`: [EmbedProperties](../interfaces/_websocket_.embedproperties.md)): Promise<any\>

*Defined in [src/websocket.ts:266](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L266)*

The method used to send an embed in a TextChannel.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`channel` | string | ID of the TextChannel the embed will be sent in. |
`options` | [EmbedProperties](../interfaces/_websocket_.embedproperties.md) | The embed data. |

**Returns:** Promise<any\>

___

### \_deleteEmoji

▸ **_deleteEmoji**(`guild`: string, `emoji`: string): Promise<boolean\>

*Defined in [src/websocket.ts:181](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L181)*

Method to delete an emoji

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`guild` | string | ID of the Guild that the Emoji belongs to |
`emoji` | string | ID of the Emoji that is to be deleted  |

**Returns:** Promise<boolean\>

___

### \_modifyEmoji

▸ **_modifyEmoji**(`guild`: string, `emoji`: string, `name?`: string, `roles?`: Array<string\>): Promise<[EmojiRaw](../interfaces/_structures_emojiraw_.emojiraw.md)\>

*Defined in [src/websocket.ts:168](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L168)*

Method to update an Emoji

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`guild` | string | ID of the Guild that the Emoji belongs to |
`emoji` | string | ID of the Emoji that is to be modified |
`name?` | string | New name of the Emoji |
`roles?` | Array<string\> | Array of all Role ids which should be whitelisted to the emoji  |

**Returns:** Promise<[EmojiRaw](../interfaces/_structures_emojiraw_.emojiraw.md)\>

___

### \_sendMessage

▸ **_sendMessage**(`channel`: string, `content`: string \| [MessageProperties](../interfaces/_websocket_.messageproperties.md)): Promise<[MessageRaw](_structures_messageraw_.messageraw.md)\>

*Defined in [src/websocket.ts:246](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L246)*

The method used to send a message to a TextChannel.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`channel` | string | ID of the TextChannel the message will be sent in. |
`content` | string \| [MessageProperties](../interfaces/_websocket_.messageproperties.md) | The body of the message. |

**Returns:** Promise<[MessageRaw](_structures_messageraw_.messageraw.md)\>

___

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[addListener](_websocket_.client.md#addlistener)*

*Defined in node_modules/@types/node/events.d.ts:62*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### connect

▸ **connect**(): void

*Defined in [src/websocket.ts:190](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L190)*

The method used to connect to the gateway.

**Returns:** void

___

### createChannel

▸ **createChannel**(`g`: string, `name`: string): Promise<any\>

*Defined in [src/websocket.ts:348](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L348)*

The method used to create a GuildChannel.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`g` | string | ID of the guild where the channel will be created in. |
`name` | string | The name of the channel. |

**Returns:** Promise<any\>

___

### createSlashCommand

▸ **createSlashCommand**(`SlashConfig`: [SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md)): Promise<[SlashCommand](_structures_slash_command_.slashcommand.md)\>

*Defined in [src/websocket.ts:223](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L223)*

#### Parameters:

Name | Type |
------ | ------ |
`SlashConfig` | [SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md) |

**Returns:** Promise<[SlashCommand](_structures_slash_command_.slashcommand.md)\>

___

### destroy

▸ **destroy**(`reason?`: string): void

*Defined in [src/websocket.ts:214](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L214)*

The method used to destroy the client and close the connection to the websocket.

#### Parameters:

Name | Type |
------ | ------ |
`reason?` | string |

**Returns:** void

___

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [Client](_websocket_.client.md).[emit](_websocket_.client.md#emit)*

*Defined in node_modules/@types/node/events.d.ts:72*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### evaluate

▸ **evaluate**(`data`: any, `flag`: any): string

*Defined in [src/websocket.ts:310](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L310)*

Evaluates under the hood stuff.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | any | The data to evaluate. |
`flag` | any | The flags for evaluation. |

**Returns:** string

___

### eventNames

▸ **eventNames**(): Array<string \| symbol\>

*Inherited from [Client](_websocket_.client.md).[eventNames](_websocket_.client.md#eventnames)*

*Defined in node_modules/@types/node/events.d.ts:77*

**Returns:** Array<string \| symbol\>

___

### getGlobalSlashcommands

▸ **getGlobalSlashcommands**(): Promise<Array<[SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md)\>\>

*Defined in [src/websocket.ts:230](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L230)*

**Returns:** Promise<Array<[SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md)\>\>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [Client](_websocket_.client.md).[getMaxListeners](_websocket_.client.md#getmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:69*

**Returns:** number

___

### getMetaData

▸ **getMetaData**(): any

*Defined in [src/websocket.ts:285](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L285)*

The method used to get the metadata.

**Returns:** any

___

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

*Inherited from [Client](_websocket_.client.md).[listenerCount](_websocket_.client.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:73*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [Client](_websocket_.client.md).[listeners](_websocket_.client.md#listeners)*

*Defined in node_modules/@types/node/events.d.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[off](_websocket_.client.md#off)*

*Defined in node_modules/@types/node/events.d.ts:66*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: \"ready\", `listener`: (user: [User](_structures_user_.user.md)) => void): this

*Overrides void*

*Defined in [src/websocket.ts:82](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L82)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"ready\" |
`listener` | (user: [User](_structures_user_.user.md)) => void |

**Returns:** this

▸ **on**(`event`: \"debug\", `listener`: (message: string) => void): this

*Overrides void*

*Defined in [src/websocket.ts:83](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L83)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"debug\" |
`listener` | (message: string) => void |

**Returns:** this

▸ **on**(`event`: \"message\", `listener`: (message: [Message](_structures_message_.message.md)) => void): this

*Overrides void*

*Defined in [src/websocket.ts:84](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L84)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"message\" |
`listener` | (message: [Message](_structures_message_.message.md)) => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (error: any) => void): this

*Overrides void*

*Defined in [src/websocket.ts:85](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L85)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (error: any) => void |

**Returns:** this

___

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[once](_websocket_.client.md#once)*

*Defined in node_modules/@types/node/events.d.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[prependListener](_websocket_.client.md#prependlistener)*

*Defined in node_modules/@types/node/events.d.ts:75*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[prependOnceListener](_websocket_.client.md#prependoncelistener)*

*Defined in node_modules/@types/node/events.d.ts:76*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [Client](_websocket_.client.md).[rawListeners](_websocket_.client.md#rawlisteners)*

*Defined in node_modules/@types/node/events.d.ts:71*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [Client](_websocket_.client.md).[removeAllListeners](_websocket_.client.md#removealllisteners)*

*Defined in node_modules/@types/node/events.d.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Client](_websocket_.client.md).[removeListener](_websocket_.client.md#removelistener)*

*Defined in node_modules/@types/node/events.d.ts:65*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### request

▸ **request**(`method`: string, `path`: string, `body?`: object): Promise<Response \| any\>

*Defined in [src/websocket.ts:151](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L151)*

Requests to a specific discord API endpoint.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | string | - | method, e.g: GET, POST, DELETE, PUT, etc. |
`path` | string | - | path of URL. |
`body` | object | null | body/data of Request. |

**Returns:** Promise<Response \| any\>

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [Client](_websocket_.client.md).[setMaxListeners](_websocket_.client.md#setmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### setStatus

▸ **setStatus**(`t`: \"online\" \| \"idle\" \| \"dnd\" \| \"invisible\"): void

*Defined in [src/websocket.ts:324](https://github.com/ourcord/ourcord/blob/6675e55/src/websocket.ts#L324)*

The method used to set the status of the client.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`t` | \"online\" \| \"idle\" \| \"dnd\" \| \"invisible\" | The status type to set client's status to. |

**Returns:** void

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [Client](_websocket_.client.md).[listenerCount](_websocket_.client.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:44*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number
