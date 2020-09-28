type Long = protobuf.Long;

/** Namespace com. */
declare namespace com {

    /** Namespace message. */
    namespace message {

        /** Properties of an IntIntMapMsg. */
        interface IIntIntMapMsg {

            /** IntIntMapMsg key */
            key?: (number|null);

            /** IntIntMapMsg value */
            value?: (number|null);
        }

        /** Represents an IntIntMapMsg. */
        class IntIntMapMsg implements IIntIntMapMsg {

            /**
             * Constructs a new IntIntMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntIntMapMsg);

            /** IntIntMapMsg key. */
            public key: number;

            /** IntIntMapMsg value. */
            public value: number;

            /**
             * Encodes the specified IntIntMapMsg message. Does not implicitly {@link com.message.IntIntMapMsg.verify|verify} messages.
             * @param message IntIntMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntIntMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntIntMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntIntMapMsg;
        }

        /** Properties of a StringIntMapMsg. */
        interface IStringIntMapMsg {

            /** StringIntMapMsg key */
            key?: (string|null);

            /** StringIntMapMsg value */
            value?: (number|null);
        }

        /** Represents a StringIntMapMsg. */
        class StringIntMapMsg implements IStringIntMapMsg {

            /**
             * Constructs a new StringIntMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IStringIntMapMsg);

            /** StringIntMapMsg key. */
            public key: string;

            /** StringIntMapMsg value. */
            public value: number;

            /**
             * Encodes the specified StringIntMapMsg message. Does not implicitly {@link com.message.StringIntMapMsg.verify|verify} messages.
             * @param message StringIntMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IStringIntMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StringIntMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringIntMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.StringIntMapMsg;
        }

        /** Properties of an IntLongMapMsg. */
        interface IIntLongMapMsg {

            /** IntLongMapMsg key */
            key?: (number|null);

            /** IntLongMapMsg value */
            value?: (number|Long|null);
        }

        /** Represents an IntLongMapMsg. */
        class IntLongMapMsg implements IIntLongMapMsg {

            /**
             * Constructs a new IntLongMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntLongMapMsg);

            /** IntLongMapMsg key. */
            public key: number;

            /** IntLongMapMsg value. */
            public value: (number|Long);

            /**
             * Encodes the specified IntLongMapMsg message. Does not implicitly {@link com.message.IntLongMapMsg.verify|verify} messages.
             * @param message IntLongMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntLongMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntLongMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntLongMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntLongMapMsg;
        }

        /** Properties of an IntDoubleMapMsg. */
        interface IIntDoubleMapMsg {

            /** IntDoubleMapMsg key */
            key?: (number|null);

            /** IntDoubleMapMsg value */
            value?: (number|null);
        }

        /** Represents an IntDoubleMapMsg. */
        class IntDoubleMapMsg implements IIntDoubleMapMsg {

            /**
             * Constructs a new IntDoubleMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntDoubleMapMsg);

            /** IntDoubleMapMsg key. */
            public key: number;

            /** IntDoubleMapMsg value. */
            public value: number;

            /**
             * Encodes the specified IntDoubleMapMsg message. Does not implicitly {@link com.message.IntDoubleMapMsg.verify|verify} messages.
             * @param message IntDoubleMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntDoubleMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntDoubleMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntDoubleMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntDoubleMapMsg;
        }

        /** Properties of an IntFloatMapMsg. */
        interface IIntFloatMapMsg {

            /** IntFloatMapMsg key */
            key?: (number|null);

            /** IntFloatMapMsg value */
            value?: (number|null);
        }

        /** Represents an IntFloatMapMsg. */
        class IntFloatMapMsg implements IIntFloatMapMsg {

            /**
             * Constructs a new IntFloatMapMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IIntFloatMapMsg);

            /** IntFloatMapMsg key. */
            public key: number;

            /** IntFloatMapMsg value. */
            public value: number;

            /**
             * Encodes the specified IntFloatMapMsg message. Does not implicitly {@link com.message.IntFloatMapMsg.verify|verify} messages.
             * @param message IntFloatMapMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IIntFloatMapMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an IntFloatMapMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntFloatMapMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.IntFloatMapMsg;
        }

        /** Properties of an ItemMsg. */
        interface IItemMsg {

            /** ItemMsg itemId */
            itemId?: (number|null);

            /** ItemMsg num */
            num?: (number|null);
        }

        /** Represents an ItemMsg. */
        class ItemMsg implements IItemMsg {

            /**
             * Constructs a new ItemMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IItemMsg);

            /** ItemMsg itemId. */
            public itemId: number;

            /** ItemMsg num. */
            public num: number;

            /**
             * Encodes the specified ItemMsg message. Does not implicitly {@link com.message.ItemMsg.verify|verify} messages.
             * @param message ItemMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IItemMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ItemMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.ItemMsg;
        }

        /** Properties of an ItemListMsg. */
        interface IItemListMsg {

            /** ItemListMsg list */
            list?: (com.message.IItemMsg[]|null);
        }

        /** Represents an ItemListMsg. */
        class ItemListMsg implements IItemListMsg {

            /**
             * Constructs a new ItemListMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IItemListMsg);

            /** ItemListMsg list. */
            public list: com.message.IItemMsg[];

            /**
             * Encodes the specified ItemListMsg message. Does not implicitly {@link com.message.ItemListMsg.verify|verify} messages.
             * @param message ItemListMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ItemListMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemListMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.ItemListMsg;
        }

        /** Properties of a CROSS_C_SERVER_REGISTER. */
        interface ICROSS_C_SERVER_REGISTER {

            /** CROSS_C_SERVER_REGISTER serverId */
            serverId?: (number|null);

            /** CROSS_C_SERVER_REGISTER platName */
            platName?: (string|null);

            /** CROSS_C_SERVER_REGISTER mergeServerIds */
            mergeServerIds?: (string|null);
        }

        /** Represents a CROSS_C_SERVER_REGISTER. */
        class CROSS_C_SERVER_REGISTER implements ICROSS_C_SERVER_REGISTER {

            /**
             * Constructs a new CROSS_C_SERVER_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_SERVER_REGISTER);

            /** CROSS_C_SERVER_REGISTER serverId. */
            public serverId: number;

            /** CROSS_C_SERVER_REGISTER platName. */
            public platName: string;

            /** CROSS_C_SERVER_REGISTER mergeServerIds. */
            public mergeServerIds: string;

            /**
             * Encodes the specified CROSS_C_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_C_SERVER_REGISTER.verify|verify} messages.
             * @param message CROSS_C_SERVER_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_SERVER_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_SERVER_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_SERVER_REGISTER;
        }

        /** Properties of a CROSS_S_SERVER_REGISTER. */
        interface ICROSS_S_SERVER_REGISTER {

            /** CROSS_S_SERVER_REGISTER serverId */
            serverId?: (number|null);
        }

        /** Represents a CROSS_S_SERVER_REGISTER. */
        class CROSS_S_SERVER_REGISTER implements ICROSS_S_SERVER_REGISTER {

            /**
             * Constructs a new CROSS_S_SERVER_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_SERVER_REGISTER);

            /** CROSS_S_SERVER_REGISTER serverId. */
            public serverId: number;

            /**
             * Encodes the specified CROSS_S_SERVER_REGISTER message. Does not implicitly {@link com.message.CROSS_S_SERVER_REGISTER.verify|verify} messages.
             * @param message CROSS_S_SERVER_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_SERVER_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_SERVER_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_SERVER_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_SERVER_REGISTER;
        }

        /** Properties of a CROSS_C_HEART_BEAT. */
        interface ICROSS_C_HEART_BEAT {
        }

        /** Represents a CROSS_C_HEART_BEAT. */
        class CROSS_C_HEART_BEAT implements ICROSS_C_HEART_BEAT {

            /**
             * Constructs a new CROSS_C_HEART_BEAT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_HEART_BEAT);

            /**
             * Encodes the specified CROSS_C_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_C_HEART_BEAT.verify|verify} messages.
             * @param message CROSS_C_HEART_BEAT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_HEART_BEAT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_HEART_BEAT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_HEART_BEAT;
        }

        /** Properties of a CROSS_S_HEART_BEAT. */
        interface ICROSS_S_HEART_BEAT {
        }

        /** Represents a CROSS_S_HEART_BEAT. */
        class CROSS_S_HEART_BEAT implements ICROSS_S_HEART_BEAT {

            /**
             * Constructs a new CROSS_S_HEART_BEAT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_HEART_BEAT);

            /**
             * Encodes the specified CROSS_S_HEART_BEAT message. Does not implicitly {@link com.message.CROSS_S_HEART_BEAT.verify|verify} messages.
             * @param message CROSS_S_HEART_BEAT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_HEART_BEAT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_HEART_BEAT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_HEART_BEAT;
        }

        /** Properties of a CROSS_C_SERVER_PUSH. */
        interface ICROSS_C_SERVER_PUSH {

            /** CROSS_C_SERVER_PUSH serverId */
            serverId?: (number|null);
        }

        /** Represents a CROSS_C_SERVER_PUSH. */
        class CROSS_C_SERVER_PUSH implements ICROSS_C_SERVER_PUSH {

            /**
             * Constructs a new CROSS_C_SERVER_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_SERVER_PUSH);

            /** CROSS_C_SERVER_PUSH serverId. */
            public serverId: number;

            /**
             * Encodes the specified CROSS_C_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_C_SERVER_PUSH.verify|verify} messages.
             * @param message CROSS_C_SERVER_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_SERVER_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_SERVER_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_SERVER_PUSH;
        }

        /** Properties of a CROSS_S_SERVER_PUSH. */
        interface ICROSS_S_SERVER_PUSH {

            /** CROSS_S_SERVER_PUSH serverId */
            serverId?: (number|null);

            /** CROSS_S_SERVER_PUSH sendRankData */
            sendRankData?: (number|null);
        }

        /** Represents a CROSS_S_SERVER_PUSH. */
        class CROSS_S_SERVER_PUSH implements ICROSS_S_SERVER_PUSH {

            /**
             * Constructs a new CROSS_S_SERVER_PUSH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_SERVER_PUSH);

            /** CROSS_S_SERVER_PUSH serverId. */
            public serverId: number;

            /** CROSS_S_SERVER_PUSH sendRankData. */
            public sendRankData: number;

            /**
             * Encodes the specified CROSS_S_SERVER_PUSH message. Does not implicitly {@link com.message.CROSS_S_SERVER_PUSH.verify|verify} messages.
             * @param message CROSS_S_SERVER_PUSH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_SERVER_PUSH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_SERVER_PUSH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_SERVER_PUSH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_SERVER_PUSH;
        }

        /** Properties of a CROSS_C_HTTP_DATA. */
        interface ICROSS_C_HTTP_DATA {

            /** CROSS_C_HTTP_DATA serverId */
            serverId?: (number|null);

            /** CROSS_C_HTTP_DATA platName */
            platName?: (string|null);

            /** CROSS_C_HTTP_DATA httpType */
            httpType?: (number|null);

            /** CROSS_C_HTTP_DATA httpData */
            httpData?: (string|null);
        }

        /** Represents a CROSS_C_HTTP_DATA. */
        class CROSS_C_HTTP_DATA implements ICROSS_C_HTTP_DATA {

            /**
             * Constructs a new CROSS_C_HTTP_DATA.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_C_HTTP_DATA);

            /** CROSS_C_HTTP_DATA serverId. */
            public serverId: number;

            /** CROSS_C_HTTP_DATA platName. */
            public platName: string;

            /** CROSS_C_HTTP_DATA httpType. */
            public httpType: number;

            /** CROSS_C_HTTP_DATA httpData. */
            public httpData: string;

            /**
             * Encodes the specified CROSS_C_HTTP_DATA message. Does not implicitly {@link com.message.CROSS_C_HTTP_DATA.verify|verify} messages.
             * @param message CROSS_C_HTTP_DATA message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_C_HTTP_DATA, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_C_HTTP_DATA message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_C_HTTP_DATA
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_C_HTTP_DATA;
        }

        /** Properties of a C_DEBUG_COMMON. */
        interface IC_DEBUG_COMMON {

            /** C_DEBUG_COMMON debugString */
            debugString?: (string|null);
        }

        /** Represents a C_DEBUG_COMMON. */
        class C_DEBUG_COMMON implements IC_DEBUG_COMMON {

            /**
             * Constructs a new C_DEBUG_COMMON.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_DEBUG_COMMON);

            /** C_DEBUG_COMMON debugString. */
            public debugString: string;

            /**
             * Encodes the specified C_DEBUG_COMMON message. Does not implicitly {@link com.message.C_DEBUG_COMMON.verify|verify} messages.
             * @param message C_DEBUG_COMMON message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_DEBUG_COMMON, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_DEBUG_COMMON message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_DEBUG_COMMON;
        }

        /** Properties of a S_DEBUG_COMMON. */
        interface IS_DEBUG_COMMON {

            /** S_DEBUG_COMMON debugString */
            debugString?: (string|null);
        }

        /** Represents a S_DEBUG_COMMON. */
        class S_DEBUG_COMMON implements IS_DEBUG_COMMON {

            /**
             * Constructs a new S_DEBUG_COMMON.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_DEBUG_COMMON);

            /** S_DEBUG_COMMON debugString. */
            public debugString: string;

            /**
             * Encodes the specified S_DEBUG_COMMON message. Does not implicitly {@link com.message.S_DEBUG_COMMON.verify|verify} messages.
             * @param message S_DEBUG_COMMON message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_DEBUG_COMMON, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_DEBUG_COMMON message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_DEBUG_COMMON
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_DEBUG_COMMON;
        }

        /** Properties of a MoneyExchangeMsg. */
        interface IMoneyExchangeMsg {

            /** MoneyExchangeMsg sysAllKAD */
            sysAllKAD?: (number|null);

            /** MoneyExchangeMsg exAllKAD */
            exAllKAD?: (number|null);

            /** MoneyExchangeMsg exRatio */
            exRatio?: (number|null);
        }

        /** Represents a MoneyExchangeMsg. */
        class MoneyExchangeMsg implements IMoneyExchangeMsg {

            /**
             * Constructs a new MoneyExchangeMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IMoneyExchangeMsg);

            /** MoneyExchangeMsg sysAllKAD. */
            public sysAllKAD: number;

            /** MoneyExchangeMsg exAllKAD. */
            public exAllKAD: number;

            /** MoneyExchangeMsg exRatio. */
            public exRatio: number;

            /**
             * Encodes the specified MoneyExchangeMsg message. Does not implicitly {@link com.message.MoneyExchangeMsg.verify|verify} messages.
             * @param message MoneyExchangeMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IMoneyExchangeMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MoneyExchangeMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoneyExchangeMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.MoneyExchangeMsg;
        }

        /** Properties of a PlayerExcInfoMsg. */
        interface IPlayerExcInfoMsg {

            /** PlayerExcInfoMsg moneyCount */
            moneyCount?: (number|null);

            /** PlayerExcInfoMsg KADCount */
            KADCount?: (number|null);

            /** PlayerExcInfoMsg logTime */
            logTime?: (number|Long|null);
        }

        /** Represents a PlayerExcInfoMsg. */
        class PlayerExcInfoMsg implements IPlayerExcInfoMsg {

            /**
             * Constructs a new PlayerExcInfoMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPlayerExcInfoMsg);

            /** PlayerExcInfoMsg moneyCount. */
            public moneyCount: number;

            /** PlayerExcInfoMsg KADCount. */
            public KADCount: number;

            /** PlayerExcInfoMsg logTime. */
            public logTime: (number|Long);

            /**
             * Encodes the specified PlayerExcInfoMsg message. Does not implicitly {@link com.message.PlayerExcInfoMsg.verify|verify} messages.
             * @param message PlayerExcInfoMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPlayerExcInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerExcInfoMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerExcInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PlayerExcInfoMsg;
        }

        /** Properties of a C_GET_MONEY_EXCHANGE_INFO. */
        interface IC_GET_MONEY_EXCHANGE_INFO {
        }

        /** Represents a C_GET_MONEY_EXCHANGE_INFO. */
        class C_GET_MONEY_EXCHANGE_INFO implements IC_GET_MONEY_EXCHANGE_INFO {

            /**
             * Constructs a new C_GET_MONEY_EXCHANGE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MONEY_EXCHANGE_INFO);

            /**
             * Encodes the specified C_GET_MONEY_EXCHANGE_INFO message. Does not implicitly {@link com.message.C_GET_MONEY_EXCHANGE_INFO.verify|verify} messages.
             * @param message C_GET_MONEY_EXCHANGE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MONEY_EXCHANGE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MONEY_EXCHANGE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MONEY_EXCHANGE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MONEY_EXCHANGE_INFO;
        }

        /** Properties of a S_GET_MONEY_EXCHANGE_INFO. */
        interface IS_GET_MONEY_EXCHANGE_INFO {

            /** S_GET_MONEY_EXCHANGE_INFO moneyExchangeMsg */
            moneyExchangeMsg?: (com.message.IMoneyExchangeMsg|null);

            /** S_GET_MONEY_EXCHANGE_INFO playerExcInfoMsg */
            playerExcInfoMsg?: (com.message.IPlayerExcInfoMsg[]|null);
        }

        /** Represents a S_GET_MONEY_EXCHANGE_INFO. */
        class S_GET_MONEY_EXCHANGE_INFO implements IS_GET_MONEY_EXCHANGE_INFO {

            /**
             * Constructs a new S_GET_MONEY_EXCHANGE_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MONEY_EXCHANGE_INFO);

            /** S_GET_MONEY_EXCHANGE_INFO moneyExchangeMsg. */
            public moneyExchangeMsg?: (com.message.IMoneyExchangeMsg|null);

            /** S_GET_MONEY_EXCHANGE_INFO playerExcInfoMsg. */
            public playerExcInfoMsg: com.message.IPlayerExcInfoMsg[];

            /**
             * Encodes the specified S_GET_MONEY_EXCHANGE_INFO message. Does not implicitly {@link com.message.S_GET_MONEY_EXCHANGE_INFO.verify|verify} messages.
             * @param message S_GET_MONEY_EXCHANGE_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MONEY_EXCHANGE_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MONEY_EXCHANGE_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MONEY_EXCHANGE_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MONEY_EXCHANGE_INFO;
        }

        /** Properties of a C_MONEY_EXCHANGE_KAD. */
        interface IC_MONEY_EXCHANGE_KAD {

            /** C_MONEY_EXCHANGE_KAD moneyCount */
            moneyCount?: (number|null);
        }

        /** Represents a C_MONEY_EXCHANGE_KAD. */
        class C_MONEY_EXCHANGE_KAD implements IC_MONEY_EXCHANGE_KAD {

            /**
             * Constructs a new C_MONEY_EXCHANGE_KAD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MONEY_EXCHANGE_KAD);

            /** C_MONEY_EXCHANGE_KAD moneyCount. */
            public moneyCount: number;

            /**
             * Encodes the specified C_MONEY_EXCHANGE_KAD message. Does not implicitly {@link com.message.C_MONEY_EXCHANGE_KAD.verify|verify} messages.
             * @param message C_MONEY_EXCHANGE_KAD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MONEY_EXCHANGE_KAD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MONEY_EXCHANGE_KAD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MONEY_EXCHANGE_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MONEY_EXCHANGE_KAD;
        }

        /** Properties of a S_MONEY_EXCHANGE_KAD. */
        interface IS_MONEY_EXCHANGE_KAD {

            /** S_MONEY_EXCHANGE_KAD moneyCount */
            moneyCount?: (number|null);

            /** S_MONEY_EXCHANGE_KAD KADCount */
            KADCount?: (number|null);

            /** S_MONEY_EXCHANGE_KAD playerExcInfoMsg */
            playerExcInfoMsg?: (com.message.IPlayerExcInfoMsg|null);
        }

        /** Represents a S_MONEY_EXCHANGE_KAD. */
        class S_MONEY_EXCHANGE_KAD implements IS_MONEY_EXCHANGE_KAD {

            /**
             * Constructs a new S_MONEY_EXCHANGE_KAD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MONEY_EXCHANGE_KAD);

            /** S_MONEY_EXCHANGE_KAD moneyCount. */
            public moneyCount: number;

            /** S_MONEY_EXCHANGE_KAD KADCount. */
            public KADCount: number;

            /** S_MONEY_EXCHANGE_KAD playerExcInfoMsg. */
            public playerExcInfoMsg?: (com.message.IPlayerExcInfoMsg|null);

            /**
             * Encodes the specified S_MONEY_EXCHANGE_KAD message. Does not implicitly {@link com.message.S_MONEY_EXCHANGE_KAD.verify|verify} messages.
             * @param message S_MONEY_EXCHANGE_KAD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MONEY_EXCHANGE_KAD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MONEY_EXCHANGE_KAD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MONEY_EXCHANGE_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MONEY_EXCHANGE_KAD;
        }

        /** Properties of a SysBonusMsg. */
        interface ISysBonusMsg {

            /** SysBonusMsg sysAllBonus */
            sysAllBonus?: (number|null);

            /** SysBonusMsg todayAllBonus */
            todayAllBonus?: (number|null);

            /** SysBonusMsg bonusRatio */
            bonusRatio?: (number|null);
        }

        /** Represents a SysBonusMsg. */
        class SysBonusMsg implements ISysBonusMsg {

            /**
             * Constructs a new SysBonusMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ISysBonusMsg);

            /** SysBonusMsg sysAllBonus. */
            public sysAllBonus: number;

            /** SysBonusMsg todayAllBonus. */
            public todayAllBonus: number;

            /** SysBonusMsg bonusRatio. */
            public bonusRatio: number;

            /**
             * Encodes the specified SysBonusMsg message. Does not implicitly {@link com.message.SysBonusMsg.verify|verify} messages.
             * @param message SysBonusMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ISysBonusMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SysBonusMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SysBonusMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.SysBonusMsg;
        }

        /** Properties of a PersonBonusMsg. */
        interface IPersonBonusMsg {

            /** PersonBonusMsg diamondCount */
            diamondCount?: (number|null);

            /** PersonBonusMsg info */
            info?: (string|null);

            /** PersonBonusMsg logTime */
            logTime?: (number|Long|null);
        }

        /** Represents a PersonBonusMsg. */
        class PersonBonusMsg implements IPersonBonusMsg {

            /**
             * Constructs a new PersonBonusMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPersonBonusMsg);

            /** PersonBonusMsg diamondCount. */
            public diamondCount: number;

            /** PersonBonusMsg info. */
            public info: string;

            /** PersonBonusMsg logTime. */
            public logTime: (number|Long);

            /**
             * Encodes the specified PersonBonusMsg message. Does not implicitly {@link com.message.PersonBonusMsg.verify|verify} messages.
             * @param message PersonBonusMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPersonBonusMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PersonBonusMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PersonBonusMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PersonBonusMsg;
        }

        /** Properties of a C_GET_BONUS_INFO. */
        interface IC_GET_BONUS_INFO {
        }

        /** Represents a C_GET_BONUS_INFO. */
        class C_GET_BONUS_INFO implements IC_GET_BONUS_INFO {

            /**
             * Constructs a new C_GET_BONUS_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_BONUS_INFO);

            /**
             * Encodes the specified C_GET_BONUS_INFO message. Does not implicitly {@link com.message.C_GET_BONUS_INFO.verify|verify} messages.
             * @param message C_GET_BONUS_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_BONUS_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_BONUS_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_BONUS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_BONUS_INFO;
        }

        /** Properties of a S_GET_BONUS_INFO. */
        interface IS_GET_BONUS_INFO {

            /** S_GET_BONUS_INFO sysBonusMsg */
            sysBonusMsg?: (com.message.ISysBonusMsg|null);

            /** S_GET_BONUS_INFO personBonusMsg */
            personBonusMsg?: (com.message.IPersonBonusMsg[]|null);
        }

        /** Represents a S_GET_BONUS_INFO. */
        class S_GET_BONUS_INFO implements IS_GET_BONUS_INFO {

            /**
             * Constructs a new S_GET_BONUS_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_BONUS_INFO);

            /** S_GET_BONUS_INFO sysBonusMsg. */
            public sysBonusMsg?: (com.message.ISysBonusMsg|null);

            /** S_GET_BONUS_INFO personBonusMsg. */
            public personBonusMsg: com.message.IPersonBonusMsg[];

            /**
             * Encodes the specified S_GET_BONUS_INFO message. Does not implicitly {@link com.message.S_GET_BONUS_INFO.verify|verify} messages.
             * @param message S_GET_BONUS_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_BONUS_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_BONUS_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_BONUS_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_BONUS_INFO;
        }

        /** Properties of a PersonInjectMsg. */
        interface IPersonInjectMsg {

            /** PersonInjectMsg KADCount */
            KADCount?: (number|null);

            /** PersonInjectMsg cycleId */
            cycleId?: (number|null);

            /** PersonInjectMsg createTime */
            createTime?: (number|Long|null);

            /** PersonInjectMsg endTime */
            endTime?: (number|Long|null);

            /** PersonInjectMsg state */
            state?: (number|null);
        }

        /** Represents a PersonInjectMsg. */
        class PersonInjectMsg implements IPersonInjectMsg {

            /**
             * Constructs a new PersonInjectMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPersonInjectMsg);

            /** PersonInjectMsg KADCount. */
            public KADCount: number;

            /** PersonInjectMsg cycleId. */
            public cycleId: number;

            /** PersonInjectMsg createTime. */
            public createTime: (number|Long);

            /** PersonInjectMsg endTime. */
            public endTime: (number|Long);

            /** PersonInjectMsg state. */
            public state: number;

            /**
             * Encodes the specified PersonInjectMsg message. Does not implicitly {@link com.message.PersonInjectMsg.verify|verify} messages.
             * @param message PersonInjectMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPersonInjectMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PersonInjectMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PersonInjectMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PersonInjectMsg;
        }

        /** Properties of a C_GET_INJECT_INFO. */
        interface IC_GET_INJECT_INFO {
        }

        /** Represents a C_GET_INJECT_INFO. */
        class C_GET_INJECT_INFO implements IC_GET_INJECT_INFO {

            /**
             * Constructs a new C_GET_INJECT_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_INJECT_INFO);

            /**
             * Encodes the specified C_GET_INJECT_INFO message. Does not implicitly {@link com.message.C_GET_INJECT_INFO.verify|verify} messages.
             * @param message C_GET_INJECT_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_INJECT_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_INJECT_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_INJECT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_INJECT_INFO;
        }

        /** Properties of a S_GET_INJECT_INFO. */
        interface IS_GET_INJECT_INFO {

            /** S_GET_INJECT_INFO allInject */
            allInject?: (number|null);

            /** S_GET_INJECT_INFO personInjectMsg */
            personInjectMsg?: (com.message.IPersonInjectMsg[]|null);
        }

        /** Represents a S_GET_INJECT_INFO. */
        class S_GET_INJECT_INFO implements IS_GET_INJECT_INFO {

            /**
             * Constructs a new S_GET_INJECT_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_INJECT_INFO);

            /** S_GET_INJECT_INFO allInject. */
            public allInject: number;

            /** S_GET_INJECT_INFO personInjectMsg. */
            public personInjectMsg: com.message.IPersonInjectMsg[];

            /**
             * Encodes the specified S_GET_INJECT_INFO message. Does not implicitly {@link com.message.S_GET_INJECT_INFO.verify|verify} messages.
             * @param message S_GET_INJECT_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_INJECT_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_INJECT_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_INJECT_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_INJECT_INFO;
        }

        /** Properties of a C_INJECT_KAD. */
        interface IC_INJECT_KAD {

            /** C_INJECT_KAD KADCount */
            KADCount?: (number|null);

            /** C_INJECT_KAD cycleId */
            cycleId?: (number|null);
        }

        /** Represents a C_INJECT_KAD. */
        class C_INJECT_KAD implements IC_INJECT_KAD {

            /**
             * Constructs a new C_INJECT_KAD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_INJECT_KAD);

            /** C_INJECT_KAD KADCount. */
            public KADCount: number;

            /** C_INJECT_KAD cycleId. */
            public cycleId: number;

            /**
             * Encodes the specified C_INJECT_KAD message. Does not implicitly {@link com.message.C_INJECT_KAD.verify|verify} messages.
             * @param message C_INJECT_KAD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_INJECT_KAD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_INJECT_KAD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_INJECT_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_INJECT_KAD;
        }

        /** Properties of a S_INJECT_KAD. */
        interface IS_INJECT_KAD {

            /** S_INJECT_KAD allInject */
            allInject?: (number|null);

            /** S_INJECT_KAD personInjectMsg */
            personInjectMsg?: (com.message.IPersonInjectMsg|null);
        }

        /** Represents a S_INJECT_KAD. */
        class S_INJECT_KAD implements IS_INJECT_KAD {

            /**
             * Constructs a new S_INJECT_KAD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_INJECT_KAD);

            /** S_INJECT_KAD allInject. */
            public allInject: number;

            /** S_INJECT_KAD personInjectMsg. */
            public personInjectMsg?: (com.message.IPersonInjectMsg|null);

            /**
             * Encodes the specified S_INJECT_KAD message. Does not implicitly {@link com.message.S_INJECT_KAD.verify|verify} messages.
             * @param message S_INJECT_KAD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_INJECT_KAD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_INJECT_KAD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_INJECT_KAD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_INJECT_KAD;
        }

        /** Properties of a DolphinMsg. */
        interface IDolphinMsg {

            /** DolphinMsg id */
            id?: (number|Long|null);

            /** DolphinMsg state */
            state?: (number|null);

            /** DolphinMsg endTime */
            endTime?: (number|Long|null);

            /** DolphinMsg createTime */
            createTime?: (number|Long|null);
        }

        /** Represents a DolphinMsg. */
        class DolphinMsg implements IDolphinMsg {

            /**
             * Constructs a new DolphinMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IDolphinMsg);

            /** DolphinMsg id. */
            public id: (number|Long);

            /** DolphinMsg state. */
            public state: number;

            /** DolphinMsg endTime. */
            public endTime: (number|Long);

            /** DolphinMsg createTime. */
            public createTime: (number|Long);

            /**
             * Encodes the specified DolphinMsg message. Does not implicitly {@link com.message.DolphinMsg.verify|verify} messages.
             * @param message DolphinMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IDolphinMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a DolphinMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DolphinMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.DolphinMsg;
        }

        /** Properties of a C_GET_DOLPHIN_INFO. */
        interface IC_GET_DOLPHIN_INFO {
        }

        /** Represents a C_GET_DOLPHIN_INFO. */
        class C_GET_DOLPHIN_INFO implements IC_GET_DOLPHIN_INFO {

            /**
             * Constructs a new C_GET_DOLPHIN_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_DOLPHIN_INFO);

            /**
             * Encodes the specified C_GET_DOLPHIN_INFO message. Does not implicitly {@link com.message.C_GET_DOLPHIN_INFO.verify|verify} messages.
             * @param message C_GET_DOLPHIN_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_DOLPHIN_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_DOLPHIN_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_DOLPHIN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_DOLPHIN_INFO;
        }

        /** Properties of a S_GET_DOLPHIN_INFO. */
        interface IS_GET_DOLPHIN_INFO {

            /** S_GET_DOLPHIN_INFO dolphinMsg */
            dolphinMsg?: (com.message.IDolphinMsg[]|null);
        }

        /** Represents a S_GET_DOLPHIN_INFO. */
        class S_GET_DOLPHIN_INFO implements IS_GET_DOLPHIN_INFO {

            /**
             * Constructs a new S_GET_DOLPHIN_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_DOLPHIN_INFO);

            /** S_GET_DOLPHIN_INFO dolphinMsg. */
            public dolphinMsg: com.message.IDolphinMsg[];

            /**
             * Encodes the specified S_GET_DOLPHIN_INFO message. Does not implicitly {@link com.message.S_GET_DOLPHIN_INFO.verify|verify} messages.
             * @param message S_GET_DOLPHIN_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_DOLPHIN_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_DOLPHIN_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_DOLPHIN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_DOLPHIN_INFO;
        }

        /** Properties of a C_BUY_DOLPHIN. */
        interface IC_BUY_DOLPHIN {
        }

        /** Represents a C_BUY_DOLPHIN. */
        class C_BUY_DOLPHIN implements IC_BUY_DOLPHIN {

            /**
             * Constructs a new C_BUY_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_BUY_DOLPHIN);

            /**
             * Encodes the specified C_BUY_DOLPHIN message. Does not implicitly {@link com.message.C_BUY_DOLPHIN.verify|verify} messages.
             * @param message C_BUY_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_BUY_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_BUY_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_BUY_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_BUY_DOLPHIN;
        }

        /** Properties of a S_BUY_DOLPHIN. */
        interface IS_BUY_DOLPHIN {

            /** S_BUY_DOLPHIN dolphinMsg */
            dolphinMsg?: (com.message.IDolphinMsg|null);
        }

        /** Represents a S_BUY_DOLPHIN. */
        class S_BUY_DOLPHIN implements IS_BUY_DOLPHIN {

            /**
             * Constructs a new S_BUY_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_BUY_DOLPHIN);

            /** S_BUY_DOLPHIN dolphinMsg. */
            public dolphinMsg?: (com.message.IDolphinMsg|null);

            /**
             * Encodes the specified S_BUY_DOLPHIN message. Does not implicitly {@link com.message.S_BUY_DOLPHIN.verify|verify} messages.
             * @param message S_BUY_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_BUY_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_BUY_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_BUY_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_BUY_DOLPHIN;
        }

        /** Properties of a C_QUICK_DOLPHIN. */
        interface IC_QUICK_DOLPHIN {

            /** C_QUICK_DOLPHIN dolphinId */
            dolphinId?: (number|Long|null);
        }

        /** Represents a C_QUICK_DOLPHIN. */
        class C_QUICK_DOLPHIN implements IC_QUICK_DOLPHIN {

            /**
             * Constructs a new C_QUICK_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_QUICK_DOLPHIN);

            /** C_QUICK_DOLPHIN dolphinId. */
            public dolphinId: (number|Long);

            /**
             * Encodes the specified C_QUICK_DOLPHIN message. Does not implicitly {@link com.message.C_QUICK_DOLPHIN.verify|verify} messages.
             * @param message C_QUICK_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_QUICK_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_QUICK_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_QUICK_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_QUICK_DOLPHIN;
        }

        /** Properties of a S_QUICK_DOLPHIN. */
        interface IS_QUICK_DOLPHIN {

            /** S_QUICK_DOLPHIN dolphinMsg */
            dolphinMsg?: (com.message.IDolphinMsg|null);
        }

        /** Represents a S_QUICK_DOLPHIN. */
        class S_QUICK_DOLPHIN implements IS_QUICK_DOLPHIN {

            /**
             * Constructs a new S_QUICK_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_QUICK_DOLPHIN);

            /** S_QUICK_DOLPHIN dolphinMsg. */
            public dolphinMsg?: (com.message.IDolphinMsg|null);

            /**
             * Encodes the specified S_QUICK_DOLPHIN message. Does not implicitly {@link com.message.S_QUICK_DOLPHIN.verify|verify} messages.
             * @param message S_QUICK_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_QUICK_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_QUICK_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_QUICK_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_QUICK_DOLPHIN;
        }

        /** Properties of a C_HATCH_DOLPHIN. */
        interface IC_HATCH_DOLPHIN {

            /** C_HATCH_DOLPHIN dolphinId */
            dolphinId?: (number|Long|null);
        }

        /** Represents a C_HATCH_DOLPHIN. */
        class C_HATCH_DOLPHIN implements IC_HATCH_DOLPHIN {

            /**
             * Constructs a new C_HATCH_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_HATCH_DOLPHIN);

            /** C_HATCH_DOLPHIN dolphinId. */
            public dolphinId: (number|Long);

            /**
             * Encodes the specified C_HATCH_DOLPHIN message. Does not implicitly {@link com.message.C_HATCH_DOLPHIN.verify|verify} messages.
             * @param message C_HATCH_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_HATCH_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_HATCH_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_HATCH_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_HATCH_DOLPHIN;
        }

        /** Properties of a S_HATCH_DOLPHIN. */
        interface IS_HATCH_DOLPHIN {

            /** S_HATCH_DOLPHIN dolphinMsg */
            dolphinMsg?: (com.message.IDolphinMsg|null);
        }

        /** Represents a S_HATCH_DOLPHIN. */
        class S_HATCH_DOLPHIN implements IS_HATCH_DOLPHIN {

            /**
             * Constructs a new S_HATCH_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_HATCH_DOLPHIN);

            /** S_HATCH_DOLPHIN dolphinMsg. */
            public dolphinMsg?: (com.message.IDolphinMsg|null);

            /**
             * Encodes the specified S_HATCH_DOLPHIN message. Does not implicitly {@link com.message.S_HATCH_DOLPHIN.verify|verify} messages.
             * @param message S_HATCH_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_HATCH_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_HATCH_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_HATCH_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_HATCH_DOLPHIN;
        }

        /** Properties of a C_FERTILIZE_DOLPHIN. */
        interface IC_FERTILIZE_DOLPHIN {

            /** C_FERTILIZE_DOLPHIN dolphinId */
            dolphinId?: (number|Long|null);
        }

        /** Represents a C_FERTILIZE_DOLPHIN. */
        class C_FERTILIZE_DOLPHIN implements IC_FERTILIZE_DOLPHIN {

            /**
             * Constructs a new C_FERTILIZE_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_FERTILIZE_DOLPHIN);

            /** C_FERTILIZE_DOLPHIN dolphinId. */
            public dolphinId: (number|Long);

            /**
             * Encodes the specified C_FERTILIZE_DOLPHIN message. Does not implicitly {@link com.message.C_FERTILIZE_DOLPHIN.verify|verify} messages.
             * @param message C_FERTILIZE_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_FERTILIZE_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_FERTILIZE_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_FERTILIZE_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_FERTILIZE_DOLPHIN;
        }

        /** Properties of a S_FERTILIZE_DOLPHIN. */
        interface IS_FERTILIZE_DOLPHIN {

            /** S_FERTILIZE_DOLPHIN dolphinMsg */
            dolphinMsg?: (com.message.IDolphinMsg|null);
        }

        /** Represents a S_FERTILIZE_DOLPHIN. */
        class S_FERTILIZE_DOLPHIN implements IS_FERTILIZE_DOLPHIN {

            /**
             * Constructs a new S_FERTILIZE_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_FERTILIZE_DOLPHIN);

            /** S_FERTILIZE_DOLPHIN dolphinMsg. */
            public dolphinMsg?: (com.message.IDolphinMsg|null);

            /**
             * Encodes the specified S_FERTILIZE_DOLPHIN message. Does not implicitly {@link com.message.S_FERTILIZE_DOLPHIN.verify|verify} messages.
             * @param message S_FERTILIZE_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_FERTILIZE_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_FERTILIZE_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_FERTILIZE_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_FERTILIZE_DOLPHIN;
        }

        /** Properties of a DolphinMoneyLogMsg. */
        interface IDolphinMoneyLogMsg {

            /** DolphinMoneyLogMsg playerId */
            playerId?: (number|Long|null);

            /** DolphinMoneyLogMsg srcPlayerId */
            srcPlayerId?: (number|Long|null);

            /** DolphinMoneyLogMsg type */
            type?: (number|null);

            /** DolphinMoneyLogMsg beforeMoney */
            beforeMoney?: (number|null);

            /** DolphinMoneyLogMsg changeMoney */
            changeMoney?: (number|null);

            /** DolphinMoneyLogMsg afterMoney */
            afterMoney?: (number|null);

            /** DolphinMoneyLogMsg logTime */
            logTime?: (number|Long|null);

            /** DolphinMoneyLogMsg info */
            info?: (string|null);
        }

        /** Represents a DolphinMoneyLogMsg. */
        class DolphinMoneyLogMsg implements IDolphinMoneyLogMsg {

            /**
             * Constructs a new DolphinMoneyLogMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IDolphinMoneyLogMsg);

            /** DolphinMoneyLogMsg playerId. */
            public playerId: (number|Long);

            /** DolphinMoneyLogMsg srcPlayerId. */
            public srcPlayerId: (number|Long);

            /** DolphinMoneyLogMsg type. */
            public type: number;

            /** DolphinMoneyLogMsg beforeMoney. */
            public beforeMoney: number;

            /** DolphinMoneyLogMsg changeMoney. */
            public changeMoney: number;

            /** DolphinMoneyLogMsg afterMoney. */
            public afterMoney: number;

            /** DolphinMoneyLogMsg logTime. */
            public logTime: (number|Long);

            /** DolphinMoneyLogMsg info. */
            public info: string;

            /**
             * Encodes the specified DolphinMoneyLogMsg message. Does not implicitly {@link com.message.DolphinMoneyLogMsg.verify|verify} messages.
             * @param message DolphinMoneyLogMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IDolphinMoneyLogMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a DolphinMoneyLogMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DolphinMoneyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.DolphinMoneyLogMsg;
        }

        /** Properties of a C_GET_DOLPHIN_MONEY_LOG_LIST. */
        interface IC_GET_DOLPHIN_MONEY_LOG_LIST {
        }

        /** Represents a C_GET_DOLPHIN_MONEY_LOG_LIST. */
        class C_GET_DOLPHIN_MONEY_LOG_LIST implements IC_GET_DOLPHIN_MONEY_LOG_LIST {

            /**
             * Constructs a new C_GET_DOLPHIN_MONEY_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_DOLPHIN_MONEY_LOG_LIST);

            /**
             * Encodes the specified C_GET_DOLPHIN_MONEY_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_MONEY_LOG_LIST.verify|verify} messages.
             * @param message C_GET_DOLPHIN_MONEY_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_DOLPHIN_MONEY_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_DOLPHIN_MONEY_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_DOLPHIN_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_DOLPHIN_MONEY_LOG_LIST;
        }

        /** Properties of a S_GET_DOLPHIN_MONEY_LOG_LIST. */
        interface IS_GET_DOLPHIN_MONEY_LOG_LIST {

            /** S_GET_DOLPHIN_MONEY_LOG_LIST moneyLogMsg */
            moneyLogMsg?: (com.message.IDolphinMoneyLogMsg[]|null);
        }

        /** Represents a S_GET_DOLPHIN_MONEY_LOG_LIST. */
        class S_GET_DOLPHIN_MONEY_LOG_LIST implements IS_GET_DOLPHIN_MONEY_LOG_LIST {

            /**
             * Constructs a new S_GET_DOLPHIN_MONEY_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_DOLPHIN_MONEY_LOG_LIST);

            /** S_GET_DOLPHIN_MONEY_LOG_LIST moneyLogMsg. */
            public moneyLogMsg: com.message.IDolphinMoneyLogMsg[];

            /**
             * Encodes the specified S_GET_DOLPHIN_MONEY_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_MONEY_LOG_LIST.verify|verify} messages.
             * @param message S_GET_DOLPHIN_MONEY_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_DOLPHIN_MONEY_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_DOLPHIN_MONEY_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_DOLPHIN_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_DOLPHIN_MONEY_LOG_LIST;
        }

        /** Properties of a DolphinBuyCountLogMsg. */
        interface IDolphinBuyCountLogMsg {

            /** DolphinBuyCountLogMsg playerId */
            playerId?: (number|Long|null);

            /** DolphinBuyCountLogMsg srcPlayerId */
            srcPlayerId?: (number|Long|null);

            /** DolphinBuyCountLogMsg type */
            type?: (number|null);

            /** DolphinBuyCountLogMsg beforeMoney */
            beforeMoney?: (number|null);

            /** DolphinBuyCountLogMsg changeMoney */
            changeMoney?: (number|null);

            /** DolphinBuyCountLogMsg afterMoney */
            afterMoney?: (number|null);

            /** DolphinBuyCountLogMsg logTime */
            logTime?: (number|Long|null);

            /** DolphinBuyCountLogMsg info */
            info?: (string|null);
        }

        /** Represents a DolphinBuyCountLogMsg. */
        class DolphinBuyCountLogMsg implements IDolphinBuyCountLogMsg {

            /**
             * Constructs a new DolphinBuyCountLogMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IDolphinBuyCountLogMsg);

            /** DolphinBuyCountLogMsg playerId. */
            public playerId: (number|Long);

            /** DolphinBuyCountLogMsg srcPlayerId. */
            public srcPlayerId: (number|Long);

            /** DolphinBuyCountLogMsg type. */
            public type: number;

            /** DolphinBuyCountLogMsg beforeMoney. */
            public beforeMoney: number;

            /** DolphinBuyCountLogMsg changeMoney. */
            public changeMoney: number;

            /** DolphinBuyCountLogMsg afterMoney. */
            public afterMoney: number;

            /** DolphinBuyCountLogMsg logTime. */
            public logTime: (number|Long);

            /** DolphinBuyCountLogMsg info. */
            public info: string;

            /**
             * Encodes the specified DolphinBuyCountLogMsg message. Does not implicitly {@link com.message.DolphinBuyCountLogMsg.verify|verify} messages.
             * @param message DolphinBuyCountLogMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IDolphinBuyCountLogMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a DolphinBuyCountLogMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DolphinBuyCountLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.DolphinBuyCountLogMsg;
        }

        /** Properties of a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST. */
        interface IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST {
        }

        /** Represents a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST. */
        class C_GET_DOLPHIN_BUYCOUNT_LOG_LIST implements IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST {

            /**
             * Constructs a new C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST);

            /**
             * Encodes the specified C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST.verify|verify} messages.
             * @param message C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_DOLPHIN_BUYCOUNT_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_DOLPHIN_BUYCOUNT_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_DOLPHIN_BUYCOUNT_LOG_LIST;
        }

        /** Properties of a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST. */
        interface IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST {

            /** S_GET_DOLPHIN_BUYCOUNT_LOG_LIST buyCountLogMsg */
            buyCountLogMsg?: (com.message.IDolphinBuyCountLogMsg[]|null);
        }

        /** Represents a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST. */
        class S_GET_DOLPHIN_BUYCOUNT_LOG_LIST implements IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST {

            /**
             * Constructs a new S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST);

            /** S_GET_DOLPHIN_BUYCOUNT_LOG_LIST buyCountLogMsg. */
            public buyCountLogMsg: com.message.IDolphinBuyCountLogMsg[];

            /**
             * Encodes the specified S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST.verify|verify} messages.
             * @param message S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_DOLPHIN_BUYCOUNT_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_DOLPHIN_BUYCOUNT_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_DOLPHIN_BUYCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_DOLPHIN_BUYCOUNT_LOG_LIST;
        }

        /** Properties of a DolphinSpeedCountLogMsg. */
        interface IDolphinSpeedCountLogMsg {

            /** DolphinSpeedCountLogMsg playerId */
            playerId?: (number|Long|null);

            /** DolphinSpeedCountLogMsg srcPlayerId */
            srcPlayerId?: (number|Long|null);

            /** DolphinSpeedCountLogMsg type */
            type?: (number|null);

            /** DolphinSpeedCountLogMsg beforeMoney */
            beforeMoney?: (number|null);

            /** DolphinSpeedCountLogMsg changeMoney */
            changeMoney?: (number|null);

            /** DolphinSpeedCountLogMsg afterMoney */
            afterMoney?: (number|null);

            /** DolphinSpeedCountLogMsg logTime */
            logTime?: (number|Long|null);

            /** DolphinSpeedCountLogMsg info */
            info?: (string|null);
        }

        /** Represents a DolphinSpeedCountLogMsg. */
        class DolphinSpeedCountLogMsg implements IDolphinSpeedCountLogMsg {

            /**
             * Constructs a new DolphinSpeedCountLogMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IDolphinSpeedCountLogMsg);

            /** DolphinSpeedCountLogMsg playerId. */
            public playerId: (number|Long);

            /** DolphinSpeedCountLogMsg srcPlayerId. */
            public srcPlayerId: (number|Long);

            /** DolphinSpeedCountLogMsg type. */
            public type: number;

            /** DolphinSpeedCountLogMsg beforeMoney. */
            public beforeMoney: number;

            /** DolphinSpeedCountLogMsg changeMoney. */
            public changeMoney: number;

            /** DolphinSpeedCountLogMsg afterMoney. */
            public afterMoney: number;

            /** DolphinSpeedCountLogMsg logTime. */
            public logTime: (number|Long);

            /** DolphinSpeedCountLogMsg info. */
            public info: string;

            /**
             * Encodes the specified DolphinSpeedCountLogMsg message. Does not implicitly {@link com.message.DolphinSpeedCountLogMsg.verify|verify} messages.
             * @param message DolphinSpeedCountLogMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IDolphinSpeedCountLogMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a DolphinSpeedCountLogMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DolphinSpeedCountLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.DolphinSpeedCountLogMsg;
        }

        /** Properties of a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST. */
        interface IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST {
        }

        /** Represents a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST. */
        class C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST implements IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST {

            /**
             * Constructs a new C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST);

            /**
             * Encodes the specified C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.verify|verify} messages.
             * @param message C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST;
        }

        /** Properties of a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST. */
        interface IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST {

            /** S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST speedCountLogMsg */
            speedCountLogMsg?: (com.message.IDolphinSpeedCountLogMsg[]|null);
        }

        /** Represents a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST. */
        class S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST implements IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST {

            /**
             * Constructs a new S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST);

            /** S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST speedCountLogMsg. */
            public speedCountLogMsg: com.message.IDolphinSpeedCountLogMsg[];

            /**
             * Encodes the specified S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST.verify|verify} messages.
             * @param message S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST;
        }

        /** Properties of a C_EXCHANGE_DOLPHIN_MONEY. */
        interface IC_EXCHANGE_DOLPHIN_MONEY {

            /** C_EXCHANGE_DOLPHIN_MONEY exchangeCount */
            exchangeCount?: (number|null);
        }

        /** Represents a C_EXCHANGE_DOLPHIN_MONEY. */
        class C_EXCHANGE_DOLPHIN_MONEY implements IC_EXCHANGE_DOLPHIN_MONEY {

            /**
             * Constructs a new C_EXCHANGE_DOLPHIN_MONEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_EXCHANGE_DOLPHIN_MONEY);

            /** C_EXCHANGE_DOLPHIN_MONEY exchangeCount. */
            public exchangeCount: number;

            /**
             * Encodes the specified C_EXCHANGE_DOLPHIN_MONEY message. Does not implicitly {@link com.message.C_EXCHANGE_DOLPHIN_MONEY.verify|verify} messages.
             * @param message C_EXCHANGE_DOLPHIN_MONEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_EXCHANGE_DOLPHIN_MONEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_EXCHANGE_DOLPHIN_MONEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_EXCHANGE_DOLPHIN_MONEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_EXCHANGE_DOLPHIN_MONEY;
        }

        /** Properties of a S_EXCHANGE_DOLPHIN_MONEY. */
        interface IS_EXCHANGE_DOLPHIN_MONEY {

            /** S_EXCHANGE_DOLPHIN_MONEY exchangeCount */
            exchangeCount?: (number|null);

            /** S_EXCHANGE_DOLPHIN_MONEY dolphinBuyCount */
            dolphinBuyCount?: (number|null);

            /** S_EXCHANGE_DOLPHIN_MONEY dolphinMoney */
            dolphinMoney?: (number|null);
        }

        /** Represents a S_EXCHANGE_DOLPHIN_MONEY. */
        class S_EXCHANGE_DOLPHIN_MONEY implements IS_EXCHANGE_DOLPHIN_MONEY {

            /**
             * Constructs a new S_EXCHANGE_DOLPHIN_MONEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_EXCHANGE_DOLPHIN_MONEY);

            /** S_EXCHANGE_DOLPHIN_MONEY exchangeCount. */
            public exchangeCount: number;

            /** S_EXCHANGE_DOLPHIN_MONEY dolphinBuyCount. */
            public dolphinBuyCount: number;

            /** S_EXCHANGE_DOLPHIN_MONEY dolphinMoney. */
            public dolphinMoney: number;

            /**
             * Encodes the specified S_EXCHANGE_DOLPHIN_MONEY message. Does not implicitly {@link com.message.S_EXCHANGE_DOLPHIN_MONEY.verify|verify} messages.
             * @param message S_EXCHANGE_DOLPHIN_MONEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_EXCHANGE_DOLPHIN_MONEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_EXCHANGE_DOLPHIN_MONEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_EXCHANGE_DOLPHIN_MONEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_EXCHANGE_DOLPHIN_MONEY;
        }

        /** Properties of a S_SYNC_NEW_DOLPHIN. */
        interface IS_SYNC_NEW_DOLPHIN {

            /** S_SYNC_NEW_DOLPHIN dolphinOneMsg */
            dolphinOneMsg?: (com.message.IDolphinMsg|null);

            /** S_SYNC_NEW_DOLPHIN dolphinTwoMsg */
            dolphinTwoMsg?: (com.message.IDolphinMsg|null);
        }

        /** Represents a S_SYNC_NEW_DOLPHIN. */
        class S_SYNC_NEW_DOLPHIN implements IS_SYNC_NEW_DOLPHIN {

            /**
             * Constructs a new S_SYNC_NEW_DOLPHIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYNC_NEW_DOLPHIN);

            /** S_SYNC_NEW_DOLPHIN dolphinOneMsg. */
            public dolphinOneMsg?: (com.message.IDolphinMsg|null);

            /** S_SYNC_NEW_DOLPHIN dolphinTwoMsg. */
            public dolphinTwoMsg?: (com.message.IDolphinMsg|null);

            /**
             * Encodes the specified S_SYNC_NEW_DOLPHIN message. Does not implicitly {@link com.message.S_SYNC_NEW_DOLPHIN.verify|verify} messages.
             * @param message S_SYNC_NEW_DOLPHIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYNC_NEW_DOLPHIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYNC_NEW_DOLPHIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYNC_NEW_DOLPHIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYNC_NEW_DOLPHIN;
        }

        /** Properties of a C_GET_SIGN_IN_INFO. */
        interface IC_GET_SIGN_IN_INFO {
        }

        /** Represents a C_GET_SIGN_IN_INFO. */
        class C_GET_SIGN_IN_INFO implements IC_GET_SIGN_IN_INFO {

            /**
             * Constructs a new C_GET_SIGN_IN_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_SIGN_IN_INFO);

            /**
             * Encodes the specified C_GET_SIGN_IN_INFO message. Does not implicitly {@link com.message.C_GET_SIGN_IN_INFO.verify|verify} messages.
             * @param message C_GET_SIGN_IN_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_SIGN_IN_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_SIGN_IN_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_SIGN_IN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_SIGN_IN_INFO;
        }

        /** Properties of a S_GET_SIGN_IN_INFO. */
        interface IS_GET_SIGN_IN_INFO {

            /** S_GET_SIGN_IN_INFO dolphinMoney */
            dolphinMoney?: (number|null);

            /** S_GET_SIGN_IN_INFO lastTime */
            lastTime?: (number|Long|null);
        }

        /** Represents a S_GET_SIGN_IN_INFO. */
        class S_GET_SIGN_IN_INFO implements IS_GET_SIGN_IN_INFO {

            /**
             * Constructs a new S_GET_SIGN_IN_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_SIGN_IN_INFO);

            /** S_GET_SIGN_IN_INFO dolphinMoney. */
            public dolphinMoney: number;

            /** S_GET_SIGN_IN_INFO lastTime. */
            public lastTime: (number|Long);

            /**
             * Encodes the specified S_GET_SIGN_IN_INFO message. Does not implicitly {@link com.message.S_GET_SIGN_IN_INFO.verify|verify} messages.
             * @param message S_GET_SIGN_IN_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_SIGN_IN_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_SIGN_IN_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_SIGN_IN_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_SIGN_IN_INFO;
        }

        /** Properties of a C_GET_SIGN_IN_REWARD. */
        interface IC_GET_SIGN_IN_REWARD {
        }

        /** Represents a C_GET_SIGN_IN_REWARD. */
        class C_GET_SIGN_IN_REWARD implements IC_GET_SIGN_IN_REWARD {

            /**
             * Constructs a new C_GET_SIGN_IN_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_SIGN_IN_REWARD);

            /**
             * Encodes the specified C_GET_SIGN_IN_REWARD message. Does not implicitly {@link com.message.C_GET_SIGN_IN_REWARD.verify|verify} messages.
             * @param message C_GET_SIGN_IN_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_SIGN_IN_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_SIGN_IN_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_SIGN_IN_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_SIGN_IN_REWARD;
        }

        /** Properties of a S_GET_SIGN_IN_REWARD. */
        interface IS_GET_SIGN_IN_REWARD {

            /** S_GET_SIGN_IN_REWARD dolphinMoney */
            dolphinMoney?: (number|null);

            /** S_GET_SIGN_IN_REWARD lastTime */
            lastTime?: (number|Long|null);
        }

        /** Represents a S_GET_SIGN_IN_REWARD. */
        class S_GET_SIGN_IN_REWARD implements IS_GET_SIGN_IN_REWARD {

            /**
             * Constructs a new S_GET_SIGN_IN_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_SIGN_IN_REWARD);

            /** S_GET_SIGN_IN_REWARD dolphinMoney. */
            public dolphinMoney: number;

            /** S_GET_SIGN_IN_REWARD lastTime. */
            public lastTime: (number|Long);

            /**
             * Encodes the specified S_GET_SIGN_IN_REWARD message. Does not implicitly {@link com.message.S_GET_SIGN_IN_REWARD.verify|verify} messages.
             * @param message S_GET_SIGN_IN_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_SIGN_IN_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_SIGN_IN_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_SIGN_IN_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_SIGN_IN_REWARD;
        }

        /** Properties of a S_EXCEPTION_MSG. */
        interface IS_EXCEPTION_MSG {

            /** S_EXCEPTION_MSG code */
            code?: (number|null);
        }

        /** Represents a S_EXCEPTION_MSG. */
        class S_EXCEPTION_MSG implements IS_EXCEPTION_MSG {

            /**
             * Constructs a new S_EXCEPTION_MSG.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_EXCEPTION_MSG);

            /** S_EXCEPTION_MSG code. */
            public code: number;

            /**
             * Encodes the specified S_EXCEPTION_MSG message. Does not implicitly {@link com.message.S_EXCEPTION_MSG.verify|verify} messages.
             * @param message S_EXCEPTION_MSG message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_EXCEPTION_MSG, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_EXCEPTION_MSG message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_EXCEPTION_MSG;
        }

        /** Properties of a CROSS_S_EXCEPTION_MSG. */
        interface ICROSS_S_EXCEPTION_MSG {

            /** CROSS_S_EXCEPTION_MSG playerId */
            playerId?: (number|Long|null);

            /** CROSS_S_EXCEPTION_MSG code */
            code?: (number|null);
        }

        /** Represents a CROSS_S_EXCEPTION_MSG. */
        class CROSS_S_EXCEPTION_MSG implements ICROSS_S_EXCEPTION_MSG {

            /**
             * Constructs a new CROSS_S_EXCEPTION_MSG.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.ICROSS_S_EXCEPTION_MSG);

            /** CROSS_S_EXCEPTION_MSG playerId. */
            public playerId: (number|Long);

            /** CROSS_S_EXCEPTION_MSG code. */
            public code: number;

            /**
             * Encodes the specified CROSS_S_EXCEPTION_MSG message. Does not implicitly {@link com.message.CROSS_S_EXCEPTION_MSG.verify|verify} messages.
             * @param message CROSS_S_EXCEPTION_MSG message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.ICROSS_S_EXCEPTION_MSG, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CROSS_S_EXCEPTION_MSG message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CROSS_S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.CROSS_S_EXCEPTION_MSG;
        }

        /** Properties of a FishMsg. */
        interface IFishMsg {

            /** FishMsg id */
            id?: (number|Long|null);

            /** FishMsg level */
            level?: (number|null);

            /** FishMsg fishId */
            fishId?: (number|Long|null);

            /** FishMsg state */
            state?: (number|null);

            /** FishMsg allMoney */
            allMoney?: (number|null);

            /** FishMsg extMoney */
            extMoney?: (number|null);

            /** FishMsg leftMoney */
            leftMoney?: (number|null);

            /** FishMsg todayGotMoney */
            todayGotMoney?: (number|null);

            /** FishMsg todayCurMoney */
            todayCurMoney?: (number|null);

            /** FishMsg allDay */
            allDay?: (number|null);
        }

        /** Represents a FishMsg. */
        class FishMsg implements IFishMsg {

            /**
             * Constructs a new FishMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IFishMsg);

            /** FishMsg id. */
            public id: (number|Long);

            /** FishMsg level. */
            public level: number;

            /** FishMsg fishId. */
            public fishId: (number|Long);

            /** FishMsg state. */
            public state: number;

            /** FishMsg allMoney. */
            public allMoney: number;

            /** FishMsg extMoney. */
            public extMoney: number;

            /** FishMsg leftMoney. */
            public leftMoney: number;

            /** FishMsg todayGotMoney. */
            public todayGotMoney: number;

            /** FishMsg todayCurMoney. */
            public todayCurMoney: number;

            /** FishMsg allDay. */
            public allDay: number;

            /**
             * Encodes the specified FishMsg message. Does not implicitly {@link com.message.FishMsg.verify|verify} messages.
             * @param message FishMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IFishMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a FishMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FishMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.FishMsg;
        }

        /** Properties of a C_GET_FISH_INFO. */
        interface IC_GET_FISH_INFO {
        }

        /** Represents a C_GET_FISH_INFO. */
        class C_GET_FISH_INFO implements IC_GET_FISH_INFO {

            /**
             * Constructs a new C_GET_FISH_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_FISH_INFO);

            /**
             * Encodes the specified C_GET_FISH_INFO message. Does not implicitly {@link com.message.C_GET_FISH_INFO.verify|verify} messages.
             * @param message C_GET_FISH_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_FISH_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_FISH_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_FISH_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_FISH_INFO;
        }

        /** Properties of a S_GET_FISH_INFO. */
        interface IS_GET_FISH_INFO {

            /** S_GET_FISH_INFO fishMsg */
            fishMsg?: (com.message.IFishMsg[]|null);
        }

        /** Represents a S_GET_FISH_INFO. */
        class S_GET_FISH_INFO implements IS_GET_FISH_INFO {

            /**
             * Constructs a new S_GET_FISH_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_FISH_INFO);

            /** S_GET_FISH_INFO fishMsg. */
            public fishMsg: com.message.IFishMsg[];

            /**
             * Encodes the specified S_GET_FISH_INFO message. Does not implicitly {@link com.message.S_GET_FISH_INFO.verify|verify} messages.
             * @param message S_GET_FISH_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_FISH_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_FISH_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_FISH_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_FISH_INFO;
        }

        /** Properties of a C_BUY_FISH. */
        interface IC_BUY_FISH {

            /** C_BUY_FISH fishConfigId */
            fishConfigId?: (number|null);
        }

        /** Represents a C_BUY_FISH. */
        class C_BUY_FISH implements IC_BUY_FISH {

            /**
             * Constructs a new C_BUY_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_BUY_FISH);

            /** C_BUY_FISH fishConfigId. */
            public fishConfigId: number;

            /**
             * Encodes the specified C_BUY_FISH message. Does not implicitly {@link com.message.C_BUY_FISH.verify|verify} messages.
             * @param message C_BUY_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_BUY_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_BUY_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_BUY_FISH;
        }

        /** Properties of a S_BUY_FISH. */
        interface IS_BUY_FISH {

            /** S_BUY_FISH fishMsg */
            fishMsg?: (com.message.IFishMsg|null);
        }

        /** Represents a S_BUY_FISH. */
        class S_BUY_FISH implements IS_BUY_FISH {

            /**
             * Constructs a new S_BUY_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_BUY_FISH);

            /** S_BUY_FISH fishMsg. */
            public fishMsg?: (com.message.IFishMsg|null);

            /**
             * Encodes the specified S_BUY_FISH message. Does not implicitly {@link com.message.S_BUY_FISH.verify|verify} messages.
             * @param message S_BUY_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_BUY_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_BUY_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_BUY_FISH;
        }

        /** Properties of a C_DIAMOND_BUY_FISH. */
        interface IC_DIAMOND_BUY_FISH {

            /** C_DIAMOND_BUY_FISH fishConfigId */
            fishConfigId?: (number|null);
        }

        /** Represents a C_DIAMOND_BUY_FISH. */
        class C_DIAMOND_BUY_FISH implements IC_DIAMOND_BUY_FISH {

            /**
             * Constructs a new C_DIAMOND_BUY_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_DIAMOND_BUY_FISH);

            /** C_DIAMOND_BUY_FISH fishConfigId. */
            public fishConfigId: number;

            /**
             * Encodes the specified C_DIAMOND_BUY_FISH message. Does not implicitly {@link com.message.C_DIAMOND_BUY_FISH.verify|verify} messages.
             * @param message C_DIAMOND_BUY_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_DIAMOND_BUY_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_DIAMOND_BUY_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_DIAMOND_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_DIAMOND_BUY_FISH;
        }

        /** Properties of a S_DIAMOND_BUY_FISH. */
        interface IS_DIAMOND_BUY_FISH {

            /** S_DIAMOND_BUY_FISH fishMsg */
            fishMsg?: (com.message.IFishMsg|null);

            /** S_DIAMOND_BUY_FISH buyFishStr */
            buyFishStr?: (string|null);
        }

        /** Represents a S_DIAMOND_BUY_FISH. */
        class S_DIAMOND_BUY_FISH implements IS_DIAMOND_BUY_FISH {

            /**
             * Constructs a new S_DIAMOND_BUY_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_DIAMOND_BUY_FISH);

            /** S_DIAMOND_BUY_FISH fishMsg. */
            public fishMsg?: (com.message.IFishMsg|null);

            /** S_DIAMOND_BUY_FISH buyFishStr. */
            public buyFishStr: string;

            /**
             * Encodes the specified S_DIAMOND_BUY_FISH message. Does not implicitly {@link com.message.S_DIAMOND_BUY_FISH.verify|verify} messages.
             * @param message S_DIAMOND_BUY_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_DIAMOND_BUY_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_DIAMOND_BUY_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_DIAMOND_BUY_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_DIAMOND_BUY_FISH;
        }

        /** Properties of a C_COMBINE_FISH. */
        interface IC_COMBINE_FISH {

            /** C_COMBINE_FISH fish1Id */
            fish1Id?: (number|Long|null);

            /** C_COMBINE_FISH fish2Id */
            fish2Id?: (number|Long|null);
        }

        /** Represents a C_COMBINE_FISH. */
        class C_COMBINE_FISH implements IC_COMBINE_FISH {

            /**
             * Constructs a new C_COMBINE_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_COMBINE_FISH);

            /** C_COMBINE_FISH fish1Id. */
            public fish1Id: (number|Long);

            /** C_COMBINE_FISH fish2Id. */
            public fish2Id: (number|Long);

            /**
             * Encodes the specified C_COMBINE_FISH message. Does not implicitly {@link com.message.C_COMBINE_FISH.verify|verify} messages.
             * @param message C_COMBINE_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_COMBINE_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_COMBINE_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_COMBINE_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_COMBINE_FISH;
        }

        /** Properties of a S_COMBINE_FISH. */
        interface IS_COMBINE_FISH {

            /** S_COMBINE_FISH fish1Id */
            fish1Id?: (number|Long|null);

            /** S_COMBINE_FISH fish2Id */
            fish2Id?: (number|Long|null);

            /** S_COMBINE_FISH fishMsg */
            fishMsg?: (com.message.IFishMsg|null);
        }

        /** Represents a S_COMBINE_FISH. */
        class S_COMBINE_FISH implements IS_COMBINE_FISH {

            /**
             * Constructs a new S_COMBINE_FISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_COMBINE_FISH);

            /** S_COMBINE_FISH fish1Id. */
            public fish1Id: (number|Long);

            /** S_COMBINE_FISH fish2Id. */
            public fish2Id: (number|Long);

            /** S_COMBINE_FISH fishMsg. */
            public fishMsg?: (com.message.IFishMsg|null);

            /**
             * Encodes the specified S_COMBINE_FISH message. Does not implicitly {@link com.message.S_COMBINE_FISH.verify|verify} messages.
             * @param message S_COMBINE_FISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_COMBINE_FISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_COMBINE_FISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_COMBINE_FISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_COMBINE_FISH;
        }

        /** Properties of a C_GET_MONEY_REWARD. */
        interface IC_GET_MONEY_REWARD {
        }

        /** Represents a C_GET_MONEY_REWARD. */
        class C_GET_MONEY_REWARD implements IC_GET_MONEY_REWARD {

            /**
             * Constructs a new C_GET_MONEY_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MONEY_REWARD);

            /**
             * Encodes the specified C_GET_MONEY_REWARD message. Does not implicitly {@link com.message.C_GET_MONEY_REWARD.verify|verify} messages.
             * @param message C_GET_MONEY_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MONEY_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MONEY_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MONEY_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MONEY_REWARD;
        }

        /** Properties of a S_GET_MONEY_REWARD. */
        interface IS_GET_MONEY_REWARD {

            /** S_GET_MONEY_REWARD money */
            money?: (number|null);
        }

        /** Represents a S_GET_MONEY_REWARD. */
        class S_GET_MONEY_REWARD implements IS_GET_MONEY_REWARD {

            /**
             * Constructs a new S_GET_MONEY_REWARD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MONEY_REWARD);

            /** S_GET_MONEY_REWARD money. */
            public money: number;

            /**
             * Encodes the specified S_GET_MONEY_REWARD message. Does not implicitly {@link com.message.S_GET_MONEY_REWARD.verify|verify} messages.
             * @param message S_GET_MONEY_REWARD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MONEY_REWARD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MONEY_REWARD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MONEY_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MONEY_REWARD;
        }

        /** Properties of a C_GET_MONEY_INFO. */
        interface IC_GET_MONEY_INFO {
        }

        /** Represents a C_GET_MONEY_INFO. */
        class C_GET_MONEY_INFO implements IC_GET_MONEY_INFO {

            /**
             * Constructs a new C_GET_MONEY_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MONEY_INFO);

            /**
             * Encodes the specified C_GET_MONEY_INFO message. Does not implicitly {@link com.message.C_GET_MONEY_INFO.verify|verify} messages.
             * @param message C_GET_MONEY_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MONEY_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MONEY_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MONEY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MONEY_INFO;
        }

        /** Properties of a S_GET_MONEY_INFO. */
        interface IS_GET_MONEY_INFO {

            /** S_GET_MONEY_INFO money */
            money?: (number|null);

            /** S_GET_MONEY_INFO diamond */
            diamond?: (number|null);
        }

        /** Represents a S_GET_MONEY_INFO. */
        class S_GET_MONEY_INFO implements IS_GET_MONEY_INFO {

            /**
             * Constructs a new S_GET_MONEY_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MONEY_INFO);

            /** S_GET_MONEY_INFO money. */
            public money: number;

            /** S_GET_MONEY_INFO diamond. */
            public diamond: number;

            /**
             * Encodes the specified S_GET_MONEY_INFO message. Does not implicitly {@link com.message.S_GET_MONEY_INFO.verify|verify} messages.
             * @param message S_GET_MONEY_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MONEY_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MONEY_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MONEY_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MONEY_INFO;
        }

        /** Properties of a MoneyLogMsg. */
        interface IMoneyLogMsg {

            /** MoneyLogMsg playerId */
            playerId?: (number|Long|null);

            /** MoneyLogMsg fishId */
            fishId?: (number|Long|null);

            /** MoneyLogMsg fishConfigId */
            fishConfigId?: (number|Long|null);

            /** MoneyLogMsg type */
            type?: (number|null);

            /** MoneyLogMsg beforeMoney */
            beforeMoney?: (number|null);

            /** MoneyLogMsg changeMoney */
            changeMoney?: (number|null);

            /** MoneyLogMsg afterMoney */
            afterMoney?: (number|null);

            /** MoneyLogMsg logTime */
            logTime?: (number|Long|null);

            /** MoneyLogMsg info */
            info?: (string|null);
        }

        /** Represents a MoneyLogMsg. */
        class MoneyLogMsg implements IMoneyLogMsg {

            /**
             * Constructs a new MoneyLogMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IMoneyLogMsg);

            /** MoneyLogMsg playerId. */
            public playerId: (number|Long);

            /** MoneyLogMsg fishId. */
            public fishId: (number|Long);

            /** MoneyLogMsg fishConfigId. */
            public fishConfigId: (number|Long);

            /** MoneyLogMsg type. */
            public type: number;

            /** MoneyLogMsg beforeMoney. */
            public beforeMoney: number;

            /** MoneyLogMsg changeMoney. */
            public changeMoney: number;

            /** MoneyLogMsg afterMoney. */
            public afterMoney: number;

            /** MoneyLogMsg logTime. */
            public logTime: (number|Long);

            /** MoneyLogMsg info. */
            public info: string;

            /**
             * Encodes the specified MoneyLogMsg message. Does not implicitly {@link com.message.MoneyLogMsg.verify|verify} messages.
             * @param message MoneyLogMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IMoneyLogMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MoneyLogMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoneyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.MoneyLogMsg;
        }

        /** Properties of a C_GET_MONEY_LOG_LIST. */
        interface IC_GET_MONEY_LOG_LIST {
        }

        /** Represents a C_GET_MONEY_LOG_LIST. */
        class C_GET_MONEY_LOG_LIST implements IC_GET_MONEY_LOG_LIST {

            /**
             * Constructs a new C_GET_MONEY_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MONEY_LOG_LIST);

            /**
             * Encodes the specified C_GET_MONEY_LOG_LIST message. Does not implicitly {@link com.message.C_GET_MONEY_LOG_LIST.verify|verify} messages.
             * @param message C_GET_MONEY_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MONEY_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MONEY_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MONEY_LOG_LIST;
        }

        /** Properties of a S_GET_MONEY_LOG_LIST. */
        interface IS_GET_MONEY_LOG_LIST {

            /** S_GET_MONEY_LOG_LIST moneyLogMsg */
            moneyLogMsg?: (com.message.IMoneyLogMsg[]|null);
        }

        /** Represents a S_GET_MONEY_LOG_LIST. */
        class S_GET_MONEY_LOG_LIST implements IS_GET_MONEY_LOG_LIST {

            /**
             * Constructs a new S_GET_MONEY_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MONEY_LOG_LIST);

            /** S_GET_MONEY_LOG_LIST moneyLogMsg. */
            public moneyLogMsg: com.message.IMoneyLogMsg[];

            /**
             * Encodes the specified S_GET_MONEY_LOG_LIST message. Does not implicitly {@link com.message.S_GET_MONEY_LOG_LIST.verify|verify} messages.
             * @param message S_GET_MONEY_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MONEY_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MONEY_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MONEY_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MONEY_LOG_LIST;
        }

        /** Properties of a C_GET_DIAMOND_LOG_LIST. */
        interface IC_GET_DIAMOND_LOG_LIST {
        }

        /** Represents a C_GET_DIAMOND_LOG_LIST. */
        class C_GET_DIAMOND_LOG_LIST implements IC_GET_DIAMOND_LOG_LIST {

            /**
             * Constructs a new C_GET_DIAMOND_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_DIAMOND_LOG_LIST);

            /**
             * Encodes the specified C_GET_DIAMOND_LOG_LIST message. Does not implicitly {@link com.message.C_GET_DIAMOND_LOG_LIST.verify|verify} messages.
             * @param message C_GET_DIAMOND_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_DIAMOND_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_DIAMOND_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_DIAMOND_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_DIAMOND_LOG_LIST;
        }

        /** Properties of a S_GET_DIAMOND_LOG_LIST. */
        interface IS_GET_DIAMOND_LOG_LIST {

            /** S_GET_DIAMOND_LOG_LIST moneyLogMsg */
            moneyLogMsg?: (com.message.IMoneyLogMsg[]|null);
        }

        /** Represents a S_GET_DIAMOND_LOG_LIST. */
        class S_GET_DIAMOND_LOG_LIST implements IS_GET_DIAMOND_LOG_LIST {

            /**
             * Constructs a new S_GET_DIAMOND_LOG_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_DIAMOND_LOG_LIST);

            /** S_GET_DIAMOND_LOG_LIST moneyLogMsg. */
            public moneyLogMsg: com.message.IMoneyLogMsg[];

            /**
             * Encodes the specified S_GET_DIAMOND_LOG_LIST message. Does not implicitly {@link com.message.S_GET_DIAMOND_LOG_LIST.verify|verify} messages.
             * @param message S_GET_DIAMOND_LOG_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_DIAMOND_LOG_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_DIAMOND_LOG_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_DIAMOND_LOG_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_DIAMOND_LOG_LIST;
        }

        /** Properties of a C_USER_LOGIN. */
        interface IC_USER_LOGIN {

            /** C_USER_LOGIN mobile */
            mobile?: (string|null);

            /** C_USER_LOGIN password */
            password?: (string|null);

            /** C_USER_LOGIN sparam */
            sparam?: (string|null);

            /** C_USER_LOGIN fromGame */
            fromGame?: (number|null);
        }

        /** Represents a C_USER_LOGIN. */
        class C_USER_LOGIN implements IC_USER_LOGIN {

            /**
             * Constructs a new C_USER_LOGIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGIN);

            /** C_USER_LOGIN mobile. */
            public mobile: string;

            /** C_USER_LOGIN password. */
            public password: string;

            /** C_USER_LOGIN sparam. */
            public sparam: string;

            /** C_USER_LOGIN fromGame. */
            public fromGame: number;

            /**
             * Encodes the specified C_USER_LOGIN message. Does not implicitly {@link com.message.C_USER_LOGIN.verify|verify} messages.
             * @param message C_USER_LOGIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGIN;
        }

        /** Properties of a C_USER_LOGIN_VERIFY_CODE. */
        interface IC_USER_LOGIN_VERIFY_CODE {

            /** C_USER_LOGIN_VERIFY_CODE mobile */
            mobile?: (string|null);

            /** C_USER_LOGIN_VERIFY_CODE verifyCode */
            verifyCode?: (string|null);

            /** C_USER_LOGIN_VERIFY_CODE sparam */
            sparam?: (string|null);

            /** C_USER_LOGIN_VERIFY_CODE fromGame */
            fromGame?: (number|null);
        }

        /** Represents a C_USER_LOGIN_VERIFY_CODE. */
        class C_USER_LOGIN_VERIFY_CODE implements IC_USER_LOGIN_VERIFY_CODE {

            /**
             * Constructs a new C_USER_LOGIN_VERIFY_CODE.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGIN_VERIFY_CODE);

            /** C_USER_LOGIN_VERIFY_CODE mobile. */
            public mobile: string;

            /** C_USER_LOGIN_VERIFY_CODE verifyCode. */
            public verifyCode: string;

            /** C_USER_LOGIN_VERIFY_CODE sparam. */
            public sparam: string;

            /** C_USER_LOGIN_VERIFY_CODE fromGame. */
            public fromGame: number;

            /**
             * Encodes the specified C_USER_LOGIN_VERIFY_CODE message. Does not implicitly {@link com.message.C_USER_LOGIN_VERIFY_CODE.verify|verify} messages.
             * @param message C_USER_LOGIN_VERIFY_CODE message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGIN_VERIFY_CODE, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGIN_VERIFY_CODE message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGIN_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGIN_VERIFY_CODE;
        }

        /** Properties of a S_USER_LOGIN. */
        interface IS_USER_LOGIN {

            /** S_USER_LOGIN playerId */
            playerId?: (number|Long|null);

            /** S_USER_LOGIN fromGame */
            fromGame?: (number|null);
        }

        /** Represents a S_USER_LOGIN. */
        class S_USER_LOGIN implements IS_USER_LOGIN {

            /**
             * Constructs a new S_USER_LOGIN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN);

            /** S_USER_LOGIN playerId. */
            public playerId: (number|Long);

            /** S_USER_LOGIN fromGame. */
            public fromGame: number;

            /**
             * Encodes the specified S_USER_LOGIN message. Does not implicitly {@link com.message.S_USER_LOGIN.verify|verify} messages.
             * @param message S_USER_LOGIN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN;
        }

        /** Properties of a C_LOGIN_REGISTER. */
        interface IC_LOGIN_REGISTER {

            /** C_LOGIN_REGISTER mobile */
            mobile?: (string|null);

            /** C_LOGIN_REGISTER inviteCode */
            inviteCode?: (string|null);

            /** C_LOGIN_REGISTER password */
            password?: (string|null);

            /** C_LOGIN_REGISTER rePassword */
            rePassword?: (string|null);

            /** C_LOGIN_REGISTER verifyCode */
            verifyCode?: (string|null);

            /** C_LOGIN_REGISTER sparam */
            sparam?: (string|null);

            /** C_LOGIN_REGISTER fromGame */
            fromGame?: (number|null);
        }

        /** Represents a C_LOGIN_REGISTER. */
        class C_LOGIN_REGISTER implements IC_LOGIN_REGISTER {

            /**
             * Constructs a new C_LOGIN_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_LOGIN_REGISTER);

            /** C_LOGIN_REGISTER mobile. */
            public mobile: string;

            /** C_LOGIN_REGISTER inviteCode. */
            public inviteCode: string;

            /** C_LOGIN_REGISTER password. */
            public password: string;

            /** C_LOGIN_REGISTER rePassword. */
            public rePassword: string;

            /** C_LOGIN_REGISTER verifyCode. */
            public verifyCode: string;

            /** C_LOGIN_REGISTER sparam. */
            public sparam: string;

            /** C_LOGIN_REGISTER fromGame. */
            public fromGame: number;

            /**
             * Encodes the specified C_LOGIN_REGISTER message. Does not implicitly {@link com.message.C_LOGIN_REGISTER.verify|verify} messages.
             * @param message C_LOGIN_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_LOGIN_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_LOGIN_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_LOGIN_REGISTER;
        }

        /** Properties of a S_LOGIN_REGISTER. */
        interface IS_LOGIN_REGISTER {

            /** S_LOGIN_REGISTER playerId */
            playerId?: (number|Long|null);

            /** S_LOGIN_REGISTER fromGame */
            fromGame?: (number|null);
        }

        /** Represents a S_LOGIN_REGISTER. */
        class S_LOGIN_REGISTER implements IS_LOGIN_REGISTER {

            /**
             * Constructs a new S_LOGIN_REGISTER.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_LOGIN_REGISTER);

            /** S_LOGIN_REGISTER playerId. */
            public playerId: (number|Long);

            /** S_LOGIN_REGISTER fromGame. */
            public fromGame: number;

            /**
             * Encodes the specified S_LOGIN_REGISTER message. Does not implicitly {@link com.message.S_LOGIN_REGISTER.verify|verify} messages.
             * @param message S_LOGIN_REGISTER message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_LOGIN_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_LOGIN_REGISTER message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_LOGIN_REGISTER;
        }

        /** Properties of a C_SEND_VERIFY_CODE. */
        interface IC_SEND_VERIFY_CODE {

            /** C_SEND_VERIFY_CODE mobile */
            mobile?: (string|null);

            /** C_SEND_VERIFY_CODE type */
            type?: (number|null);
        }

        /** Represents a C_SEND_VERIFY_CODE. */
        class C_SEND_VERIFY_CODE implements IC_SEND_VERIFY_CODE {

            /**
             * Constructs a new C_SEND_VERIFY_CODE.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SEND_VERIFY_CODE);

            /** C_SEND_VERIFY_CODE mobile. */
            public mobile: string;

            /** C_SEND_VERIFY_CODE type. */
            public type: number;

            /**
             * Encodes the specified C_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.C_SEND_VERIFY_CODE.verify|verify} messages.
             * @param message C_SEND_VERIFY_CODE message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SEND_VERIFY_CODE, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SEND_VERIFY_CODE;
        }

        /** Properties of a S_SEND_VERIFY_CODE. */
        interface IS_SEND_VERIFY_CODE {

            /** S_SEND_VERIFY_CODE mobile */
            mobile?: (string|null);

            /** S_SEND_VERIFY_CODE state */
            state?: (number|null);
        }

        /** Represents a S_SEND_VERIFY_CODE. */
        class S_SEND_VERIFY_CODE implements IS_SEND_VERIFY_CODE {

            /**
             * Constructs a new S_SEND_VERIFY_CODE.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SEND_VERIFY_CODE);

            /** S_SEND_VERIFY_CODE mobile. */
            public mobile: string;

            /** S_SEND_VERIFY_CODE state. */
            public state: number;

            /**
             * Encodes the specified S_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.S_SEND_VERIFY_CODE.verify|verify} messages.
             * @param message S_SEND_VERIFY_CODE message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SEND_VERIFY_CODE, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SEND_VERIFY_CODE;
        }

        /** Properties of a C_USER_LOGOUT. */
        interface IC_USER_LOGOUT {

            /** C_USER_LOGOUT playerId */
            playerId?: (number|Long|null);
        }

        /** Represents a C_USER_LOGOUT. */
        class C_USER_LOGOUT implements IC_USER_LOGOUT {

            /**
             * Constructs a new C_USER_LOGOUT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGOUT);

            /** C_USER_LOGOUT playerId. */
            public playerId: (number|Long);

            /**
             * Encodes the specified C_USER_LOGOUT message. Does not implicitly {@link com.message.C_USER_LOGOUT.verify|verify} messages.
             * @param message C_USER_LOGOUT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGOUT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGOUT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGOUT;
        }

        /** Properties of a S_USER_LOGOUT. */
        interface IS_USER_LOGOUT {

            /** S_USER_LOGOUT playerId */
            playerId?: (number|Long|null);

            /** S_USER_LOGOUT beKickOut */
            beKickOut?: (boolean|null);
        }

        /** Represents a S_USER_LOGOUT. */
        class S_USER_LOGOUT implements IS_USER_LOGOUT {

            /**
             * Constructs a new S_USER_LOGOUT.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGOUT);

            /** S_USER_LOGOUT playerId. */
            public playerId: (number|Long);

            /** S_USER_LOGOUT beKickOut. */
            public beKickOut: boolean;

            /**
             * Encodes the specified S_USER_LOGOUT message. Does not implicitly {@link com.message.S_USER_LOGOUT.verify|verify} messages.
             * @param message S_USER_LOGOUT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGOUT, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGOUT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGOUT;
        }

        /** Properties of a S_USER_LOGIN_BAN. */
        interface IS_USER_LOGIN_BAN {
        }

        /** Represents a S_USER_LOGIN_BAN. */
        class S_USER_LOGIN_BAN implements IS_USER_LOGIN_BAN {

            /**
             * Constructs a new S_USER_LOGIN_BAN.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN_BAN);

            /**
             * Encodes the specified S_USER_LOGIN_BAN message. Does not implicitly {@link com.message.S_USER_LOGIN_BAN.verify|verify} messages.
             * @param message S_USER_LOGIN_BAN message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN_BAN, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN_BAN message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN_BAN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN_BAN;
        }

        /** Properties of a C_SYNC_TIME. */
        interface IC_SYNC_TIME {
        }

        /** Represents a C_SYNC_TIME. */
        class C_SYNC_TIME implements IC_SYNC_TIME {

            /**
             * Constructs a new C_SYNC_TIME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_SYNC_TIME);

            /**
             * Encodes the specified C_SYNC_TIME message. Does not implicitly {@link com.message.C_SYNC_TIME.verify|verify} messages.
             * @param message C_SYNC_TIME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_SYNC_TIME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_SYNC_TIME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_SYNC_TIME;
        }

        /** Properties of a S_SYNC_TIME. */
        interface IS_SYNC_TIME {

            /** S_SYNC_TIME time */
            time?: (number|Long|null);
        }

        /** Represents a S_SYNC_TIME. */
        class S_SYNC_TIME implements IS_SYNC_TIME {

            /**
             * Constructs a new S_SYNC_TIME.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYNC_TIME);

            /** S_SYNC_TIME time. */
            public time: (number|Long);

            /**
             * Encodes the specified S_SYNC_TIME message. Does not implicitly {@link com.message.S_SYNC_TIME.verify|verify} messages.
             * @param message S_SYNC_TIME message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYNC_TIME, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYNC_TIME message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYNC_TIME;
        }

        /** Properties of a C_USER_LOGIN_INIT_FINISH. */
        interface IC_USER_LOGIN_INIT_FINISH {
        }

        /** Represents a C_USER_LOGIN_INIT_FINISH. */
        class C_USER_LOGIN_INIT_FINISH implements IC_USER_LOGIN_INIT_FINISH {

            /**
             * Constructs a new C_USER_LOGIN_INIT_FINISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USER_LOGIN_INIT_FINISH);

            /**
             * Encodes the specified C_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.C_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @param message C_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USER_LOGIN_INIT_FINISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USER_LOGIN_INIT_FINISH;
        }

        /** Properties of a S_USER_LOGIN_INIT_FINISH. */
        interface IS_USER_LOGIN_INIT_FINISH {

            /** S_USER_LOGIN_INIT_FINISH playerId */
            playerId?: (number|Long|null);

            /** S_USER_LOGIN_INIT_FINISH property */
            property?: (com.message.IPlayerPropertyMsg|null);

            /** S_USER_LOGIN_INIT_FINISH basePlayerMsg */
            basePlayerMsg?: (com.message.IBasePlayerMsg|null);

            /** S_USER_LOGIN_INIT_FINISH fishMsg */
            fishMsg?: (com.message.IFishMsg[]|null);

            /** S_USER_LOGIN_INIT_FINISH buyFishStr */
            buyFishStr?: (string|null);
        }

        /** Represents a S_USER_LOGIN_INIT_FINISH. */
        class S_USER_LOGIN_INIT_FINISH implements IS_USER_LOGIN_INIT_FINISH {

            /**
             * Constructs a new S_USER_LOGIN_INIT_FINISH.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USER_LOGIN_INIT_FINISH);

            /** S_USER_LOGIN_INIT_FINISH playerId. */
            public playerId: (number|Long);

            /** S_USER_LOGIN_INIT_FINISH property. */
            public property?: (com.message.IPlayerPropertyMsg|null);

            /** S_USER_LOGIN_INIT_FINISH basePlayerMsg. */
            public basePlayerMsg?: (com.message.IBasePlayerMsg|null);

            /** S_USER_LOGIN_INIT_FINISH fishMsg. */
            public fishMsg: com.message.IFishMsg[];

            /** S_USER_LOGIN_INIT_FINISH buyFishStr. */
            public buyFishStr: string;

            /**
             * Encodes the specified S_USER_LOGIN_INIT_FINISH message. Does not implicitly {@link com.message.S_USER_LOGIN_INIT_FINISH.verify|verify} messages.
             * @param message S_USER_LOGIN_INIT_FINISH message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USER_LOGIN_INIT_FINISH, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USER_LOGIN_INIT_FINISH message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USER_LOGIN_INIT_FINISH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USER_LOGIN_INIT_FINISH;
        }

        /** Properties of a BasePlayerMsg. */
        interface IBasePlayerMsg {

            /** BasePlayerMsg playerId */
            playerId?: (number|Long|null);

            /** BasePlayerMsg state */
            state?: (number|null);

            /** BasePlayerMsg inviteCode */
            inviteCode?: (string|null);

            /** BasePlayerMsg mobile */
            mobile?: (string|null);

            /** BasePlayerMsg name */
            name?: (string|null);

            /** BasePlayerMsg idNum */
            idNum?: (string|null);
        }

        /** Represents a BasePlayerMsg. */
        class BasePlayerMsg implements IBasePlayerMsg {

            /**
             * Constructs a new BasePlayerMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IBasePlayerMsg);

            /** BasePlayerMsg playerId. */
            public playerId: (number|Long);

            /** BasePlayerMsg state. */
            public state: number;

            /** BasePlayerMsg inviteCode. */
            public inviteCode: string;

            /** BasePlayerMsg mobile. */
            public mobile: string;

            /** BasePlayerMsg name. */
            public name: string;

            /** BasePlayerMsg idNum. */
            public idNum: string;

            /**
             * Encodes the specified BasePlayerMsg message. Does not implicitly {@link com.message.BasePlayerMsg.verify|verify} messages.
             * @param message BasePlayerMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IBasePlayerMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BasePlayerMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BasePlayerMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.BasePlayerMsg;
        }

        /** Properties of a PlayerPropertyMsg. */
        interface IPlayerPropertyMsg {

            /** PlayerPropertyMsg playerId */
            playerId?: (number|Long|null);

            /** PlayerPropertyMsg money */
            money?: (number|null);

            /** PlayerPropertyMsg diamond */
            diamond?: (number|null);

            /** PlayerPropertyMsg KAD */
            KAD?: (number|null);

            /** PlayerPropertyMsg keyCount */
            keyCount?: (number|null);

            /** PlayerPropertyMsg dolphinBuyCount */
            dolphinBuyCount?: (number|null);

            /** PlayerPropertyMsg dolphinSpeedCount */
            dolphinSpeedCount?: (number|null);

            /** PlayerPropertyMsg dolphinMoney */
            dolphinMoney?: (number|null);
        }

        /** Represents a PlayerPropertyMsg. */
        class PlayerPropertyMsg implements IPlayerPropertyMsg {

            /**
             * Constructs a new PlayerPropertyMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IPlayerPropertyMsg);

            /** PlayerPropertyMsg playerId. */
            public playerId: (number|Long);

            /** PlayerPropertyMsg money. */
            public money: number;

            /** PlayerPropertyMsg diamond. */
            public diamond: number;

            /** PlayerPropertyMsg KAD. */
            public KAD: number;

            /** PlayerPropertyMsg keyCount. */
            public keyCount: number;

            /** PlayerPropertyMsg dolphinBuyCount. */
            public dolphinBuyCount: number;

            /** PlayerPropertyMsg dolphinSpeedCount. */
            public dolphinSpeedCount: number;

            /** PlayerPropertyMsg dolphinMoney. */
            public dolphinMoney: number;

            /**
             * Encodes the specified PlayerPropertyMsg message. Does not implicitly {@link com.message.PlayerPropertyMsg.verify|verify} messages.
             * @param message PlayerPropertyMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IPlayerPropertyMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerPropertyMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerPropertyMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.PlayerPropertyMsg;
        }

        /** Properties of a BuyGoodMsg. */
        interface IBuyGoodMsg {

            /** BuyGoodMsg buyGoodMsgId */
            buyGoodMsgId?: (number|Long|null);

            /** BuyGoodMsg playerId */
            playerId?: (number|Long|null);

            /** BuyGoodMsg mobile */
            mobile?: (string|null);

            /** BuyGoodMsg moneyCount */
            moneyCount?: (number|null);

            /** BuyGoodMsg diamondPrice */
            diamondPrice?: (number|null);

            /** BuyGoodMsg createTime */
            createTime?: (number|Long|null);
        }

        /** Represents a BuyGoodMsg. */
        class BuyGoodMsg implements IBuyGoodMsg {

            /**
             * Constructs a new BuyGoodMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IBuyGoodMsg);

            /** BuyGoodMsg buyGoodMsgId. */
            public buyGoodMsgId: (number|Long);

            /** BuyGoodMsg playerId. */
            public playerId: (number|Long);

            /** BuyGoodMsg mobile. */
            public mobile: string;

            /** BuyGoodMsg moneyCount. */
            public moneyCount: number;

            /** BuyGoodMsg diamondPrice. */
            public diamondPrice: number;

            /** BuyGoodMsg createTime. */
            public createTime: (number|Long);

            /**
             * Encodes the specified BuyGoodMsg message. Does not implicitly {@link com.message.BuyGoodMsg.verify|verify} messages.
             * @param message BuyGoodMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IBuyGoodMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BuyGoodMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuyGoodMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.BuyGoodMsg;
        }

        /** Properties of a HistoryPriceMsg. */
        interface IHistoryPriceMsg {

            /** HistoryPriceMsg historyPrice */
            historyPrice?: (number|null);

            /** HistoryPriceMsg historyTime */
            historyTime?: (number|Long|null);
        }

        /** Represents a HistoryPriceMsg. */
        class HistoryPriceMsg implements IHistoryPriceMsg {

            /**
             * Constructs a new HistoryPriceMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IHistoryPriceMsg);

            /** HistoryPriceMsg historyPrice. */
            public historyPrice: number;

            /** HistoryPriceMsg historyTime. */
            public historyTime: (number|Long);

            /**
             * Encodes the specified HistoryPriceMsg message. Does not implicitly {@link com.message.HistoryPriceMsg.verify|verify} messages.
             * @param message HistoryPriceMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IHistoryPriceMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a HistoryPriceMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HistoryPriceMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.HistoryPriceMsg;
        }

        /** Properties of a C_GET_OCT_MARKET_INFO. */
        interface IC_GET_OCT_MARKET_INFO {
        }

        /** Represents a C_GET_OCT_MARKET_INFO. */
        class C_GET_OCT_MARKET_INFO implements IC_GET_OCT_MARKET_INFO {

            /**
             * Constructs a new C_GET_OCT_MARKET_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_OCT_MARKET_INFO);

            /**
             * Encodes the specified C_GET_OCT_MARKET_INFO message. Does not implicitly {@link com.message.C_GET_OCT_MARKET_INFO.verify|verify} messages.
             * @param message C_GET_OCT_MARKET_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_OCT_MARKET_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_OCT_MARKET_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_OCT_MARKET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_OCT_MARKET_INFO;
        }

        /** Properties of a S_GET_OCT_MARKET_INFO. */
        interface IS_GET_OCT_MARKET_INFO {

            /** S_GET_OCT_MARKET_INFO sysDiamondPrice */
            sysDiamondPrice?: (number|null);

            /** S_GET_OCT_MARKET_INFO historyPriceMsgList */
            historyPriceMsgList?: (com.message.IHistoryPriceMsg[]|null);
        }

        /** Represents a S_GET_OCT_MARKET_INFO. */
        class S_GET_OCT_MARKET_INFO implements IS_GET_OCT_MARKET_INFO {

            /**
             * Constructs a new S_GET_OCT_MARKET_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_OCT_MARKET_INFO);

            /** S_GET_OCT_MARKET_INFO sysDiamondPrice. */
            public sysDiamondPrice: number;

            /** S_GET_OCT_MARKET_INFO historyPriceMsgList. */
            public historyPriceMsgList: com.message.IHistoryPriceMsg[];

            /**
             * Encodes the specified S_GET_OCT_MARKET_INFO message. Does not implicitly {@link com.message.S_GET_OCT_MARKET_INFO.verify|verify} messages.
             * @param message S_GET_OCT_MARKET_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_OCT_MARKET_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_OCT_MARKET_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_OCT_MARKET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_OCT_MARKET_INFO;
        }

        /** Properties of a C_GET_OCT_BUYGOOD_LIST. */
        interface IC_GET_OCT_BUYGOOD_LIST {

            /** C_GET_OCT_BUYGOOD_LIST page */
            page?: (number|null);

            /** C_GET_OCT_BUYGOOD_LIST pageSize */
            pageSize?: (number|null);
        }

        /** Represents a C_GET_OCT_BUYGOOD_LIST. */
        class C_GET_OCT_BUYGOOD_LIST implements IC_GET_OCT_BUYGOOD_LIST {

            /**
             * Constructs a new C_GET_OCT_BUYGOOD_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_OCT_BUYGOOD_LIST);

            /** C_GET_OCT_BUYGOOD_LIST page. */
            public page: number;

            /** C_GET_OCT_BUYGOOD_LIST pageSize. */
            public pageSize: number;

            /**
             * Encodes the specified C_GET_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.C_GET_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @param message C_GET_OCT_BUYGOOD_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_OCT_BUYGOOD_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_OCT_BUYGOOD_LIST;
        }

        /** Properties of a S_GET_OCT_BUYGOOD_LIST. */
        interface IS_GET_OCT_BUYGOOD_LIST {

            /** S_GET_OCT_BUYGOOD_LIST buyGoodMsgList */
            buyGoodMsgList?: (com.message.IBuyGoodMsg[]|null);
        }

        /** Represents a S_GET_OCT_BUYGOOD_LIST. */
        class S_GET_OCT_BUYGOOD_LIST implements IS_GET_OCT_BUYGOOD_LIST {

            /**
             * Constructs a new S_GET_OCT_BUYGOOD_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_OCT_BUYGOOD_LIST);

            /** S_GET_OCT_BUYGOOD_LIST buyGoodMsgList. */
            public buyGoodMsgList: com.message.IBuyGoodMsg[];

            /**
             * Encodes the specified S_GET_OCT_BUYGOOD_LIST message. Does not implicitly {@link com.message.S_GET_OCT_BUYGOOD_LIST.verify|verify} messages.
             * @param message S_GET_OCT_BUYGOOD_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_OCT_BUYGOOD_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_OCT_BUYGOOD_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_OCT_BUYGOOD_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_OCT_BUYGOOD_LIST;
        }

        /** Properties of a C_MARKET_BUY. */
        interface IC_MARKET_BUY {

            /** C_MARKET_BUY diamondPrice */
            diamondPrice?: (number|null);

            /** C_MARKET_BUY moneyCount */
            moneyCount?: (number|null);
        }

        /** Represents a C_MARKET_BUY. */
        class C_MARKET_BUY implements IC_MARKET_BUY {

            /**
             * Constructs a new C_MARKET_BUY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MARKET_BUY);

            /** C_MARKET_BUY diamondPrice. */
            public diamondPrice: number;

            /** C_MARKET_BUY moneyCount. */
            public moneyCount: number;

            /**
             * Encodes the specified C_MARKET_BUY message. Does not implicitly {@link com.message.C_MARKET_BUY.verify|verify} messages.
             * @param message C_MARKET_BUY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MARKET_BUY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MARKET_BUY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MARKET_BUY;
        }

        /** Properties of a S_MARKET_BUY. */
        interface IS_MARKET_BUY {

            /** S_MARKET_BUY buyGoodMsg */
            buyGoodMsg?: (com.message.IBuyGoodMsg|null);
        }

        /** Represents a S_MARKET_BUY. */
        class S_MARKET_BUY implements IS_MARKET_BUY {

            /**
             * Constructs a new S_MARKET_BUY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MARKET_BUY);

            /** S_MARKET_BUY buyGoodMsg. */
            public buyGoodMsg?: (com.message.IBuyGoodMsg|null);

            /**
             * Encodes the specified S_MARKET_BUY message. Does not implicitly {@link com.message.S_MARKET_BUY.verify|verify} messages.
             * @param message S_MARKET_BUY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MARKET_BUY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MARKET_BUY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MARKET_BUY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MARKET_BUY;
        }

        /** Properties of a C_MARKET_SELL. */
        interface IC_MARKET_SELL {

            /** C_MARKET_SELL buyGoodMsgId */
            buyGoodMsgId?: (number|Long|null);

            /** C_MARKET_SELL sellMoneyCount */
            sellMoneyCount?: (number|null);
        }

        /** Represents a C_MARKET_SELL. */
        class C_MARKET_SELL implements IC_MARKET_SELL {

            /**
             * Constructs a new C_MARKET_SELL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MARKET_SELL);

            /** C_MARKET_SELL buyGoodMsgId. */
            public buyGoodMsgId: (number|Long);

            /** C_MARKET_SELL sellMoneyCount. */
            public sellMoneyCount: number;

            /**
             * Encodes the specified C_MARKET_SELL message. Does not implicitly {@link com.message.C_MARKET_SELL.verify|verify} messages.
             * @param message C_MARKET_SELL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MARKET_SELL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MARKET_SELL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MARKET_SELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MARKET_SELL;
        }

        /** Properties of a S_MARKET_SELL. */
        interface IS_MARKET_SELL {

            /** S_MARKET_SELL buyGoodMsgId */
            buyGoodMsgId?: (number|Long|null);

            /** S_MARKET_SELL sellMoneyCount */
            sellMoneyCount?: (number|null);
        }

        /** Represents a S_MARKET_SELL. */
        class S_MARKET_SELL implements IS_MARKET_SELL {

            /**
             * Constructs a new S_MARKET_SELL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MARKET_SELL);

            /** S_MARKET_SELL buyGoodMsgId. */
            public buyGoodMsgId: (number|Long);

            /** S_MARKET_SELL sellMoneyCount. */
            public sellMoneyCount: number;

            /**
             * Encodes the specified S_MARKET_SELL message. Does not implicitly {@link com.message.S_MARKET_SELL.verify|verify} messages.
             * @param message S_MARKET_SELL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MARKET_SELL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MARKET_SELL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MARKET_SELL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MARKET_SELL;
        }

        /** Properties of a C_MARKET_CANCEL. */
        interface IC_MARKET_CANCEL {

            /** C_MARKET_CANCEL buyGoodMsgId */
            buyGoodMsgId?: (number|Long|null);
        }

        /** Represents a C_MARKET_CANCEL. */
        class C_MARKET_CANCEL implements IC_MARKET_CANCEL {

            /**
             * Constructs a new C_MARKET_CANCEL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MARKET_CANCEL);

            /** C_MARKET_CANCEL buyGoodMsgId. */
            public buyGoodMsgId: (number|Long);

            /**
             * Encodes the specified C_MARKET_CANCEL message. Does not implicitly {@link com.message.C_MARKET_CANCEL.verify|verify} messages.
             * @param message C_MARKET_CANCEL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MARKET_CANCEL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MARKET_CANCEL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MARKET_CANCEL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MARKET_CANCEL;
        }

        /** Properties of a S_MARKET_CANCEL. */
        interface IS_MARKET_CANCEL {

            /** S_MARKET_CANCEL buyGoodMsgId */
            buyGoodMsgId?: (number|Long|null);
        }

        /** Represents a S_MARKET_CANCEL. */
        class S_MARKET_CANCEL implements IS_MARKET_CANCEL {

            /**
             * Constructs a new S_MARKET_CANCEL.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MARKET_CANCEL);

            /** S_MARKET_CANCEL buyGoodMsgId. */
            public buyGoodMsgId: (number|Long);

            /**
             * Encodes the specified S_MARKET_CANCEL message. Does not implicitly {@link com.message.S_MARKET_CANCEL.verify|verify} messages.
             * @param message S_MARKET_CANCEL message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MARKET_CANCEL, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MARKET_CANCEL message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MARKET_CANCEL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MARKET_CANCEL;
        }

        /** Properties of a MsgEnum. */
        interface IMsgEnum {
        }

        /** Represents a MsgEnum. */
        class MsgEnum implements IMsgEnum {

            /**
             * Constructs a new MsgEnum.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IMsgEnum);

            /**
             * Encodes the specified MsgEnum message. Does not implicitly {@link com.message.MsgEnum.verify|verify} messages.
             * @param message MsgEnum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IMsgEnum, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MsgEnum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEnum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.MsgEnum;
        }

        namespace MsgEnum {

            /** MsgCode enum. */
            enum MsgCode {
                MSG_EMPTY = 0,
                S_EXCEPTION_MSG = 900,
                C_USER_LOGIN = 1001,
                S_USER_LOGIN = 1002,
                S_USER_LOGIN_BAN = 1003,
                C_USER_LOGIN_VERIFY_CODE = 1004,
                C_LOGIN_REGISTER = 1005,
                S_LOGIN_REGISTER = 1006,
                C_USER_LOGOUT = 1007,
                S_USER_LOGOUT = 1008,
                C_USER_LOGIN_INIT_FINISH = 1009,
                S_USER_LOGIN_INIT_FINISH = 1010,
                C_MODIFY_PASSWORD = 1011,
                S_MODIFY_PASSWORD = 1012,
                C_USE_KEY = 1013,
                S_USE_KEY = 1014,
                C_GIVE_KEY = 1015,
                S_GIVE_KEY = 1016,
                C_GET_KEY_LIST = 1017,
                S_GET_KEY_LIST = 1018,
                C_SEND_VERIFY_CODE = 1019,
                S_SEND_VERIFY_CODE = 1020,
                C_GET_FISH_INFO = 1051,
                S_GET_FISH_INFO = 1052,
                C_BUY_FISH = 1053,
                S_BUY_FISH = 1054,
                C_COMBINE_FISH = 1055,
                S_COMBINE_FISH = 1056,
                C_GET_MONEY_REWARD = 1057,
                S_GET_MONEY_REWARD = 1058,
                C_GET_MONEY_INFO = 1059,
                S_GET_MONEY_INFO = 1060,
                C_DIAMOND_BUY_FISH = 1061,
                S_DIAMOND_BUY_FISH = 1062,
                C_GET_MONEY_LOG_LIST = 1063,
                S_GET_MONEY_LOG_LIST = 1064,
                C_GET_DIAMOND_LOG_LIST = 1065,
                S_GET_DIAMOND_LOG_LIST = 1066,
                C_GET_OCT_MARKET_INFO = 1101,
                S_GET_OCT_MARKET_INFO = 1102,
                C_MARKET_BUY = 1103,
                S_MARKET_BUY = 1104,
                C_MARKET_SELL = 1105,
                S_MARKET_SELL = 1106,
                C_MARKET_CANCEL = 1107,
                S_MARKET_CANCEL = 1108,
                C_GET_OCT_BUYGOOD_LIST = 1109,
                S_GET_OCT_BUYGOOD_LIST = 1110,
                C_GET_MONEY_EXCHANGE_INFO = 1201,
                S_GET_MONEY_EXCHANGE_INFO = 1202,
                C_MONEY_EXCHANGE_KAD = 1203,
                S_MONEY_EXCHANGE_KAD = 1204,
                C_GET_BONUS_INFO = 1205,
                S_GET_BONUS_INFO = 1206,
                C_GET_INJECT_INFO = 1207,
                S_GET_INJECT_INFO = 1208,
                C_INJECT_KAD = 1209,
                S_INJECT_KAD = 1210,
                C_REAL_NAME_VERIFICATION = 1221,
                S_REAL_NAME_VERIFICATION = 1222,
                C_GET_MY_TEAM_INFO = 1301,
                S_GET_MY_TEAM_INFO = 1302,
                C_GET_MY_TEAM_LIST = 1303,
                S_GET_MY_TEAM_LIST = 1304,
                C_GET_MY_ADDRESS = 1401,
                S_GET_MY_ADDRESS = 1402,
                C_GET_EXTRACT_LIST = 1403,
                S_GET_EXTRACT_LIST = 1404,
                C_GET_RECHARGE_LIST = 1405,
                S_GET_RECHARGE_LIST = 1406,
                S_SYN_PROPERTY = 2001,
                C_SYNC_TIME = 2101,
                S_SYNC_TIME = 2102,
                C_DEBUG_COMMON = 3101,
                S_DEBUG_COMMON = 3102,
                C_GET_DOLPHIN_INFO = 5001,
                S_GET_DOLPHIN_INFO = 5002,
                C_BUY_DOLPHIN = 5003,
                S_BUY_DOLPHIN = 5004,
                C_QUICK_DOLPHIN = 5005,
                S_QUICK_DOLPHIN = 5006,
                C_HATCH_DOLPHIN = 5007,
                S_HATCH_DOLPHIN = 5008,
                C_FERTILIZE_DOLPHIN = 5009,
                S_FERTILIZE_DOLPHIN = 5010,
                C_GET_DOLPHIN_MONEY_LOG_LIST = 5011,
                S_GET_DOLPHIN_MONEY_LOG_LIST = 5012,
                C_GET_DOLPHIN_BUYCOUNT_LOG_LIST = 5013,
                S_GET_DOLPHIN_BUYCOUNT_LOG_LIST = 5014,
                C_EXCHANGE_DOLPHIN_MONEY = 5015,
                S_EXCHANGE_DOLPHIN_MONEY = 5016,
                C_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST = 5017,
                S_GET_DOLPHIN_SPEEDCOUNT_LOG_LIST = 5018,
                C_GET_SIGN_IN_INFO = 5019,
                S_GET_SIGN_IN_INFO = 5020,
                C_GET_SIGN_IN_REWARD = 5021,
                S_GET_SIGN_IN_REWARD = 5022,
                S_SYNC_NEW_DOLPHIN = 5030,
                CROSS_C_HEART_BEAT = 100001,
                CROSS_S_HEART_BEAT = 100002,
                CROSS_C_SERVER_REGISTER = 100003,
                CROSS_S_SERVER_REGISTER = 100004,
                CROSS_S_EXCEPTION_MSG = 100005,
                CROSS_C_SERVER_PUSH = 100006,
                CROSS_S_SERVER_PUSH = 100007,
                CROSS_C_HTTP_DATA = 100008
            }

            /** ExceptionCode enum. */
            enum ExceptionCode {
                EXCEPTION_EMPTY = 0,
                ERROR_INPUT_PARAMETER = 1001,
                ERROR_INPUT_NUMBER = 1002,
                NOT_ENOUGH_ITEM_GOODS = 1003,
                PASSWROD_NOT_RIGHT = 1004,
                PASSWROD_REPASSWORD_NOT_MATCH = 1005,
                PASSWROD_SIZE_NOT_RIGHT = 1006,
                VERIFY_CODE_NOT_RIGHT = 1007,
                GOODS_NOT_EXIST = 1008,
                ERROR_CONFIG = 1030,
                PLAYER_LEVEL_LIMITED = 1038,
                ROLE_NOT_FOUND = 1047,
                MONEY_NOT_ENOUGH_REWARD = 1048,
                CAN_NOT_BUY_BY_U = 1049,
                U_BUY_FISH_LIMITED = 1050,
                DOLPHIN_BUY_COUNT_NOT_ENOUGH = 1051,
                PLAYER_NOT_FOUND = 1052,
                USERNAME_REPEATED = 1170,
                NICKNAME_REPEATED = 1171,
                CAN_NOT_USE_ILLEGAL_CHAR = 1172,
                CAN_NOT_USE_SENSITIVE_CHAR = 1173,
                MOBILE_NOT_RIGHT_PHONE = 1174,
                INVITE_CODE_IS_NULL = 1175,
                INVITE_CODE_NOT_FOUND = 1176,
                MOBILE_HAS_REGISTER = 1177,
                HAVE_USE_KEY = 1178,
                PLAYER_NOT_ACTIVATION = 1179,
                PLAYER_NOT_EXIST = 1181,
                FISH_MAX_LIMIT = 1201,
                CAN_NOT_SEND_TO_YOURSELF = 1202,
                MOBILE_NOT_RIGHT = 1203,
                MOBILE_NOT_THE_LOGIN_ONE = 1204,
                ID_NUM_NOT_RIGHT = 1205,
                ALREADY_VERIFY_NOT_NEED = 1206,
                MOBILE_IDNUM_ALREADY_VERIFY = 1207,
                VERIFY_HAVE_ERROR_CHECK = 1208,
                NOT_VERIFY_CANT_DO = 1209,
                SIGN_HOUR_NOT_ENOUGH = 1210
            }
        }

        /** Properties of a S_SYN_PROPERTY. */
        interface IS_SYN_PROPERTY {

            /** S_SYN_PROPERTY mapMsg */
            mapMsg?: (com.message.IIntDoubleMapMsg[]|null);
        }

        /** Represents a S_SYN_PROPERTY. */
        class S_SYN_PROPERTY implements IS_SYN_PROPERTY {

            /**
             * Constructs a new S_SYN_PROPERTY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_SYN_PROPERTY);

            /** S_SYN_PROPERTY mapMsg. */
            public mapMsg: com.message.IIntDoubleMapMsg[];

            /**
             * Encodes the specified S_SYN_PROPERTY message. Does not implicitly {@link com.message.S_SYN_PROPERTY.verify|verify} messages.
             * @param message S_SYN_PROPERTY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_SYN_PROPERTY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_SYN_PROPERTY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_SYN_PROPERTY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_SYN_PROPERTY;
        }

        /** PropertyID enum. */
        enum PropertyID {
            LEVEL = 0,
            MONEY = 1,
            DIAMOND = 2,
            KAD = 3,
            KEY = 4,
            DOLPHIN_BUY_COUNT = 5,
            DOLPHIN_SPEED_COUNT = 6,
            DOLPHIN_MONEY = 7
        }

        /** Properties of a C_REAL_NAME_VERIFICATION. */
        interface IC_REAL_NAME_VERIFICATION {

            /** C_REAL_NAME_VERIFICATION mobile */
            mobile?: (string|null);

            /** C_REAL_NAME_VERIFICATION name */
            name?: (string|null);

            /** C_REAL_NAME_VERIFICATION idNum */
            idNum?: (string|null);
        }

        /** Represents a C_REAL_NAME_VERIFICATION. */
        class C_REAL_NAME_VERIFICATION implements IC_REAL_NAME_VERIFICATION {

            /**
             * Constructs a new C_REAL_NAME_VERIFICATION.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_REAL_NAME_VERIFICATION);

            /** C_REAL_NAME_VERIFICATION mobile. */
            public mobile: string;

            /** C_REAL_NAME_VERIFICATION name. */
            public name: string;

            /** C_REAL_NAME_VERIFICATION idNum. */
            public idNum: string;

            /**
             * Encodes the specified C_REAL_NAME_VERIFICATION message. Does not implicitly {@link com.message.C_REAL_NAME_VERIFICATION.verify|verify} messages.
             * @param message C_REAL_NAME_VERIFICATION message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_REAL_NAME_VERIFICATION, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_REAL_NAME_VERIFICATION message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_REAL_NAME_VERIFICATION
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_REAL_NAME_VERIFICATION;
        }

        /** Properties of a S_REAL_NAME_VERIFICATION. */
        interface IS_REAL_NAME_VERIFICATION {

            /** S_REAL_NAME_VERIFICATION result */
            result?: (string|null);

            /** S_REAL_NAME_VERIFICATION remark */
            remark?: (string|null);
        }

        /** Represents a S_REAL_NAME_VERIFICATION. */
        class S_REAL_NAME_VERIFICATION implements IS_REAL_NAME_VERIFICATION {

            /**
             * Constructs a new S_REAL_NAME_VERIFICATION.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_REAL_NAME_VERIFICATION);

            /** S_REAL_NAME_VERIFICATION result. */
            public result: string;

            /** S_REAL_NAME_VERIFICATION remark. */
            public remark: string;

            /**
             * Encodes the specified S_REAL_NAME_VERIFICATION message. Does not implicitly {@link com.message.S_REAL_NAME_VERIFICATION.verify|verify} messages.
             * @param message S_REAL_NAME_VERIFICATION message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_REAL_NAME_VERIFICATION, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_REAL_NAME_VERIFICATION message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_REAL_NAME_VERIFICATION
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_REAL_NAME_VERIFICATION;
        }

        /** Properties of a C_MODIFY_PASSWORD. */
        interface IC_MODIFY_PASSWORD {

            /** C_MODIFY_PASSWORD mobile */
            mobile?: (string|null);

            /** C_MODIFY_PASSWORD password */
            password?: (string|null);

            /** C_MODIFY_PASSWORD verifyCode */
            verifyCode?: (string|null);
        }

        /** Represents a C_MODIFY_PASSWORD. */
        class C_MODIFY_PASSWORD implements IC_MODIFY_PASSWORD {

            /**
             * Constructs a new C_MODIFY_PASSWORD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_MODIFY_PASSWORD);

            /** C_MODIFY_PASSWORD mobile. */
            public mobile: string;

            /** C_MODIFY_PASSWORD password. */
            public password: string;

            /** C_MODIFY_PASSWORD verifyCode. */
            public verifyCode: string;

            /**
             * Encodes the specified C_MODIFY_PASSWORD message. Does not implicitly {@link com.message.C_MODIFY_PASSWORD.verify|verify} messages.
             * @param message C_MODIFY_PASSWORD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_MODIFY_PASSWORD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_MODIFY_PASSWORD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_MODIFY_PASSWORD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_MODIFY_PASSWORD;
        }

        /** Properties of a S_MODIFY_PASSWORD. */
        interface IS_MODIFY_PASSWORD {

            /** S_MODIFY_PASSWORD mobile */
            mobile?: (string|null);
        }

        /** Represents a S_MODIFY_PASSWORD. */
        class S_MODIFY_PASSWORD implements IS_MODIFY_PASSWORD {

            /**
             * Constructs a new S_MODIFY_PASSWORD.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_MODIFY_PASSWORD);

            /** S_MODIFY_PASSWORD mobile. */
            public mobile: string;

            /**
             * Encodes the specified S_MODIFY_PASSWORD message. Does not implicitly {@link com.message.S_MODIFY_PASSWORD.verify|verify} messages.
             * @param message S_MODIFY_PASSWORD message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_MODIFY_PASSWORD, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_MODIFY_PASSWORD message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_MODIFY_PASSWORD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_MODIFY_PASSWORD;
        }

        /** Properties of a KeyLogMsg. */
        interface IKeyLogMsg {

            /** KeyLogMsg playerId */
            playerId?: (number|Long|null);

            /** KeyLogMsg bePlayerId */
            bePlayerId?: (number|Long|null);

            /** KeyLogMsg type */
            type?: (number|null);

            /** KeyLogMsg beforeMoney */
            beforeMoney?: (number|null);

            /** KeyLogMsg changeMoney */
            changeMoney?: (number|null);

            /** KeyLogMsg afterMoney */
            afterMoney?: (number|null);

            /** KeyLogMsg logTime */
            logTime?: (number|Long|null);

            /** KeyLogMsg info */
            info?: (string|null);
        }

        /** Represents a KeyLogMsg. */
        class KeyLogMsg implements IKeyLogMsg {

            /**
             * Constructs a new KeyLogMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IKeyLogMsg);

            /** KeyLogMsg playerId. */
            public playerId: (number|Long);

            /** KeyLogMsg bePlayerId. */
            public bePlayerId: (number|Long);

            /** KeyLogMsg type. */
            public type: number;

            /** KeyLogMsg beforeMoney. */
            public beforeMoney: number;

            /** KeyLogMsg changeMoney. */
            public changeMoney: number;

            /** KeyLogMsg afterMoney. */
            public afterMoney: number;

            /** KeyLogMsg logTime. */
            public logTime: (number|Long);

            /** KeyLogMsg info. */
            public info: string;

            /**
             * Encodes the specified KeyLogMsg message. Does not implicitly {@link com.message.KeyLogMsg.verify|verify} messages.
             * @param message KeyLogMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IKeyLogMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a KeyLogMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyLogMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.KeyLogMsg;
        }

        /** Properties of a C_GET_KEY_LIST. */
        interface IC_GET_KEY_LIST {
        }

        /** Represents a C_GET_KEY_LIST. */
        class C_GET_KEY_LIST implements IC_GET_KEY_LIST {

            /**
             * Constructs a new C_GET_KEY_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_KEY_LIST);

            /**
             * Encodes the specified C_GET_KEY_LIST message. Does not implicitly {@link com.message.C_GET_KEY_LIST.verify|verify} messages.
             * @param message C_GET_KEY_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_KEY_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_KEY_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_KEY_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_KEY_LIST;
        }

        /** Properties of a S_GET_KEY_LIST. */
        interface IS_GET_KEY_LIST {

            /** S_GET_KEY_LIST keyLogMsg */
            keyLogMsg?: (com.message.IKeyLogMsg[]|null);

            /** S_GET_KEY_LIST keyCount */
            keyCount?: (number|null);
        }

        /** Represents a S_GET_KEY_LIST. */
        class S_GET_KEY_LIST implements IS_GET_KEY_LIST {

            /**
             * Constructs a new S_GET_KEY_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_KEY_LIST);

            /** S_GET_KEY_LIST keyLogMsg. */
            public keyLogMsg: com.message.IKeyLogMsg[];

            /** S_GET_KEY_LIST keyCount. */
            public keyCount: number;

            /**
             * Encodes the specified S_GET_KEY_LIST message. Does not implicitly {@link com.message.S_GET_KEY_LIST.verify|verify} messages.
             * @param message S_GET_KEY_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_KEY_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_KEY_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_KEY_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_KEY_LIST;
        }

        /** Properties of a C_USE_KEY. */
        interface IC_USE_KEY {
        }

        /** Represents a C_USE_KEY. */
        class C_USE_KEY implements IC_USE_KEY {

            /**
             * Constructs a new C_USE_KEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_USE_KEY);

            /**
             * Encodes the specified C_USE_KEY message. Does not implicitly {@link com.message.C_USE_KEY.verify|verify} messages.
             * @param message C_USE_KEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_USE_KEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_USE_KEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_USE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_USE_KEY;
        }

        /** Properties of a S_USE_KEY. */
        interface IS_USE_KEY {

            /** S_USE_KEY state */
            state?: (number|null);

            /** S_USE_KEY keyCount */
            keyCount?: (number|null);
        }

        /** Represents a S_USE_KEY. */
        class S_USE_KEY implements IS_USE_KEY {

            /**
             * Constructs a new S_USE_KEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_USE_KEY);

            /** S_USE_KEY state. */
            public state: number;

            /** S_USE_KEY keyCount. */
            public keyCount: number;

            /**
             * Encodes the specified S_USE_KEY message. Does not implicitly {@link com.message.S_USE_KEY.verify|verify} messages.
             * @param message S_USE_KEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_USE_KEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_USE_KEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_USE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_USE_KEY;
        }

        /** Properties of a C_GIVE_KEY. */
        interface IC_GIVE_KEY {

            /** C_GIVE_KEY mobile */
            mobile?: (string|null);

            /** C_GIVE_KEY giveCount */
            giveCount?: (number|null);
        }

        /** Represents a C_GIVE_KEY. */
        class C_GIVE_KEY implements IC_GIVE_KEY {

            /**
             * Constructs a new C_GIVE_KEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GIVE_KEY);

            /** C_GIVE_KEY mobile. */
            public mobile: string;

            /** C_GIVE_KEY giveCount. */
            public giveCount: number;

            /**
             * Encodes the specified C_GIVE_KEY message. Does not implicitly {@link com.message.C_GIVE_KEY.verify|verify} messages.
             * @param message C_GIVE_KEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GIVE_KEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GIVE_KEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GIVE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GIVE_KEY;
        }

        /** Properties of a S_GIVE_KEY. */
        interface IS_GIVE_KEY {

            /** S_GIVE_KEY mobile */
            mobile?: (string|null);

            /** S_GIVE_KEY keyCount */
            keyCount?: (number|null);
        }

        /** Represents a S_GIVE_KEY. */
        class S_GIVE_KEY implements IS_GIVE_KEY {

            /**
             * Constructs a new S_GIVE_KEY.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GIVE_KEY);

            /** S_GIVE_KEY mobile. */
            public mobile: string;

            /** S_GIVE_KEY keyCount. */
            public keyCount: number;

            /**
             * Encodes the specified S_GIVE_KEY message. Does not implicitly {@link com.message.S_GIVE_KEY.verify|verify} messages.
             * @param message S_GIVE_KEY message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GIVE_KEY, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GIVE_KEY message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GIVE_KEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GIVE_KEY;
        }

        /** Properties of a C_GET_MY_ADDRESS. */
        interface IC_GET_MY_ADDRESS {
        }

        /** Represents a C_GET_MY_ADDRESS. */
        class C_GET_MY_ADDRESS implements IC_GET_MY_ADDRESS {

            /**
             * Constructs a new C_GET_MY_ADDRESS.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MY_ADDRESS);

            /**
             * Encodes the specified C_GET_MY_ADDRESS message. Does not implicitly {@link com.message.C_GET_MY_ADDRESS.verify|verify} messages.
             * @param message C_GET_MY_ADDRESS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MY_ADDRESS, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MY_ADDRESS message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MY_ADDRESS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MY_ADDRESS;
        }

        /** Properties of a S_GET_MY_ADDRESS. */
        interface IS_GET_MY_ADDRESS {

            /** S_GET_MY_ADDRESS address */
            address?: (string|null);
        }

        /** Represents a S_GET_MY_ADDRESS. */
        class S_GET_MY_ADDRESS implements IS_GET_MY_ADDRESS {

            /**
             * Constructs a new S_GET_MY_ADDRESS.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MY_ADDRESS);

            /** S_GET_MY_ADDRESS address. */
            public address: string;

            /**
             * Encodes the specified S_GET_MY_ADDRESS message. Does not implicitly {@link com.message.S_GET_MY_ADDRESS.verify|verify} messages.
             * @param message S_GET_MY_ADDRESS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MY_ADDRESS, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MY_ADDRESS message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MY_ADDRESS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MY_ADDRESS;
        }

        /** Properties of a C_GET_EXTRACT_LIST. */
        interface IC_GET_EXTRACT_LIST {
        }

        /** Represents a C_GET_EXTRACT_LIST. */
        class C_GET_EXTRACT_LIST implements IC_GET_EXTRACT_LIST {

            /**
             * Constructs a new C_GET_EXTRACT_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_EXTRACT_LIST);

            /**
             * Encodes the specified C_GET_EXTRACT_LIST message. Does not implicitly {@link com.message.C_GET_EXTRACT_LIST.verify|verify} messages.
             * @param message C_GET_EXTRACT_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_EXTRACT_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_EXTRACT_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_EXTRACT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_EXTRACT_LIST;
        }

        /** Properties of a S_GET_EXTRACT_LIST. */
        interface IS_GET_EXTRACT_LIST {
        }

        /** Represents a S_GET_EXTRACT_LIST. */
        class S_GET_EXTRACT_LIST implements IS_GET_EXTRACT_LIST {

            /**
             * Constructs a new S_GET_EXTRACT_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_EXTRACT_LIST);

            /**
             * Encodes the specified S_GET_EXTRACT_LIST message. Does not implicitly {@link com.message.S_GET_EXTRACT_LIST.verify|verify} messages.
             * @param message S_GET_EXTRACT_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_EXTRACT_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_EXTRACT_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_EXTRACT_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_EXTRACT_LIST;
        }

        /** Properties of a C_GET_RECHARGE_LIST. */
        interface IC_GET_RECHARGE_LIST {
        }

        /** Represents a C_GET_RECHARGE_LIST. */
        class C_GET_RECHARGE_LIST implements IC_GET_RECHARGE_LIST {

            /**
             * Constructs a new C_GET_RECHARGE_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_RECHARGE_LIST);

            /**
             * Encodes the specified C_GET_RECHARGE_LIST message. Does not implicitly {@link com.message.C_GET_RECHARGE_LIST.verify|verify} messages.
             * @param message C_GET_RECHARGE_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_RECHARGE_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_RECHARGE_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_RECHARGE_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_RECHARGE_LIST;
        }

        /** Properties of a S_GET_RECHARGE_LIST. */
        interface IS_GET_RECHARGE_LIST {
        }

        /** Represents a S_GET_RECHARGE_LIST. */
        class S_GET_RECHARGE_LIST implements IS_GET_RECHARGE_LIST {

            /**
             * Constructs a new S_GET_RECHARGE_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_RECHARGE_LIST);

            /**
             * Encodes the specified S_GET_RECHARGE_LIST message. Does not implicitly {@link com.message.S_GET_RECHARGE_LIST.verify|verify} messages.
             * @param message S_GET_RECHARGE_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_RECHARGE_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_RECHARGE_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_RECHARGE_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_RECHARGE_LIST;
        }

        /** Properties of a MyTeamMsg. */
        interface IMyTeamMsg {

            /** MyTeamMsg superName */
            superName?: (string|null);

            /** MyTeamMsg count */
            count?: (number|null);

            /** MyTeamMsg allCount */
            allCount?: (number|null);

            /** MyTeamMsg effectDirectNum */
            effectDirectNum?: (number|null);

            /** MyTeamMsg allEffectNum */
            allEffectNum?: (number|null);
        }

        /** Represents a MyTeamMsg. */
        class MyTeamMsg implements IMyTeamMsg {

            /**
             * Constructs a new MyTeamMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IMyTeamMsg);

            /** MyTeamMsg superName. */
            public superName: string;

            /** MyTeamMsg count. */
            public count: number;

            /** MyTeamMsg allCount. */
            public allCount: number;

            /** MyTeamMsg effectDirectNum. */
            public effectDirectNum: number;

            /** MyTeamMsg allEffectNum. */
            public allEffectNum: number;

            /**
             * Encodes the specified MyTeamMsg message. Does not implicitly {@link com.message.MyTeamMsg.verify|verify} messages.
             * @param message MyTeamMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IMyTeamMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MyTeamMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MyTeamMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.MyTeamMsg;
        }

        /** Properties of a DirectInfoMsg. */
        interface IDirectInfoMsg {

            /** DirectInfoMsg name */
            name?: (string|null);

            /** DirectInfoMsg state */
            state?: (number|null);

            /** DirectInfoMsg effectDirectNum */
            effectDirectNum?: (number|null);

            /** DirectInfoMsg allEffectNum */
            allEffectNum?: (number|null);

            /** DirectInfoMsg money */
            money?: (number|null);
        }

        /** Represents a DirectInfoMsg. */
        class DirectInfoMsg implements IDirectInfoMsg {

            /**
             * Constructs a new DirectInfoMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IDirectInfoMsg);

            /** DirectInfoMsg name. */
            public name: string;

            /** DirectInfoMsg state. */
            public state: number;

            /** DirectInfoMsg effectDirectNum. */
            public effectDirectNum: number;

            /** DirectInfoMsg allEffectNum. */
            public allEffectNum: number;

            /** DirectInfoMsg money. */
            public money: number;

            /**
             * Encodes the specified DirectInfoMsg message. Does not implicitly {@link com.message.DirectInfoMsg.verify|verify} messages.
             * @param message DirectInfoMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IDirectInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a DirectInfoMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DirectInfoMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.DirectInfoMsg;
        }

        /** Properties of a C_GET_MY_TEAM_INFO. */
        interface IC_GET_MY_TEAM_INFO {
        }

        /** Represents a C_GET_MY_TEAM_INFO. */
        class C_GET_MY_TEAM_INFO implements IC_GET_MY_TEAM_INFO {

            /**
             * Constructs a new C_GET_MY_TEAM_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MY_TEAM_INFO);

            /**
             * Encodes the specified C_GET_MY_TEAM_INFO message. Does not implicitly {@link com.message.C_GET_MY_TEAM_INFO.verify|verify} messages.
             * @param message C_GET_MY_TEAM_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MY_TEAM_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MY_TEAM_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MY_TEAM_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MY_TEAM_INFO;
        }

        /** Properties of a S_GET_MY_TEAM_INFO. */
        interface IS_GET_MY_TEAM_INFO {

            /** S_GET_MY_TEAM_INFO myTeamMsg */
            myTeamMsg?: (com.message.IMyTeamMsg|null);
        }

        /** Represents a S_GET_MY_TEAM_INFO. */
        class S_GET_MY_TEAM_INFO implements IS_GET_MY_TEAM_INFO {

            /**
             * Constructs a new S_GET_MY_TEAM_INFO.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MY_TEAM_INFO);

            /** S_GET_MY_TEAM_INFO myTeamMsg. */
            public myTeamMsg?: (com.message.IMyTeamMsg|null);

            /**
             * Encodes the specified S_GET_MY_TEAM_INFO message. Does not implicitly {@link com.message.S_GET_MY_TEAM_INFO.verify|verify} messages.
             * @param message S_GET_MY_TEAM_INFO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MY_TEAM_INFO, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MY_TEAM_INFO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MY_TEAM_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MY_TEAM_INFO;
        }

        /** Properties of a C_GET_MY_TEAM_LIST. */
        interface IC_GET_MY_TEAM_LIST {

            /** C_GET_MY_TEAM_LIST page */
            page?: (number|null);

            /** C_GET_MY_TEAM_LIST pageSize */
            pageSize?: (number|null);
        }

        /** Represents a C_GET_MY_TEAM_LIST. */
        class C_GET_MY_TEAM_LIST implements IC_GET_MY_TEAM_LIST {

            /**
             * Constructs a new C_GET_MY_TEAM_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IC_GET_MY_TEAM_LIST);

            /** C_GET_MY_TEAM_LIST page. */
            public page: number;

            /** C_GET_MY_TEAM_LIST pageSize. */
            public pageSize: number;

            /**
             * Encodes the specified C_GET_MY_TEAM_LIST message. Does not implicitly {@link com.message.C_GET_MY_TEAM_LIST.verify|verify} messages.
             * @param message C_GET_MY_TEAM_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IC_GET_MY_TEAM_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C_GET_MY_TEAM_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C_GET_MY_TEAM_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.C_GET_MY_TEAM_LIST;
        }

        /** Properties of a S_GET_MY_TEAM_LIST. */
        interface IS_GET_MY_TEAM_LIST {

            /** S_GET_MY_TEAM_LIST page */
            page?: (number|null);

            /** S_GET_MY_TEAM_LIST pageSize */
            pageSize?: (number|null);

            /** S_GET_MY_TEAM_LIST directInfoMsg */
            directInfoMsg?: (com.message.IDirectInfoMsg[]|null);
        }

        /** Represents a S_GET_MY_TEAM_LIST. */
        class S_GET_MY_TEAM_LIST implements IS_GET_MY_TEAM_LIST {

            /**
             * Constructs a new S_GET_MY_TEAM_LIST.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.message.IS_GET_MY_TEAM_LIST);

            /** S_GET_MY_TEAM_LIST page. */
            public page: number;

            /** S_GET_MY_TEAM_LIST pageSize. */
            public pageSize: number;

            /** S_GET_MY_TEAM_LIST directInfoMsg. */
            public directInfoMsg: com.message.IDirectInfoMsg[];

            /**
             * Encodes the specified S_GET_MY_TEAM_LIST message. Does not implicitly {@link com.message.S_GET_MY_TEAM_LIST.verify|verify} messages.
             * @param message S_GET_MY_TEAM_LIST message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.message.IS_GET_MY_TEAM_LIST, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S_GET_MY_TEAM_LIST message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S_GET_MY_TEAM_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.message.S_GET_MY_TEAM_LIST;
        }
    }
}
