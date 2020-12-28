# Module: "structures/slash\_command"

## Index

### Classes

* [SlashCommand](../classes/_structures_slash_command_.slashcommand.md)

### Interfaces

* [OptionsProps](../interfaces/_structures_slash_command_.optionsprops.md)
* [SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md)

### Variables

* [CommandTypes](_structures_slash_command_.md#commandtypes)

### Functions

* [getSlash](_structures_slash_command_.md#getslash)

## Variables

### CommandTypes

• `Const` **CommandTypes**: object = { SUB\_COMMAND: 1, SUB\_COMMAND\_GROUP: 2, STRING: 3, INTEGER: 4, BOOLEAN: 5, USER: 6, CHANNEL: 7, ROLE: 8 } as const

*Defined in [src/structures/slash_command.ts:31](https://github.com/ourcord/ourcord/blob/1388589/src/structures/slash_command.ts#L31)*

#### Type declaration:

Name | Type |
------ | ------ |
`BOOLEAN` | 5 |
`CHANNEL` | 7 |
`INTEGER` | 4 |
`ROLE` | 8 |
`STRING` | 3 |
`SUB_COMMAND` | 1 |
`SUB_COMMAND_GROUP` | 2 |
`USER` | 6 |

## Functions

### getSlash

▸ **getSlash**(`client`: [Client](../classes/_websocket_.client.md), `postUrl`: string, `config`: [SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md)): Promise<[SlashCommand](../classes/_structures_slash_command_.slashcommand.md)\>

*Defined in [src/structures/slash_command.ts:65](https://github.com/ourcord/ourcord/blob/1388589/src/structures/slash_command.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](../classes/_websocket_.client.md) |
`postUrl` | string |
`config` | [SlashConfig](../interfaces/_structures_slash_command_.slashconfig.md) |

**Returns:** Promise<[SlashCommand](../classes/_structures_slash_command_.slashcommand.md)\>
