
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model auth_group
 * 
 */
export type auth_group = $Result.DefaultSelection<Prisma.$auth_groupPayload>
/**
 * Model auth_group_permissions
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_group_permissions = $Result.DefaultSelection<Prisma.$auth_group_permissionsPayload>
/**
 * Model auth_permission
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_permission = $Result.DefaultSelection<Prisma.$auth_permissionPayload>
/**
 * Model auth_user
 * 
 */
export type auth_user = $Result.DefaultSelection<Prisma.$auth_userPayload>
/**
 * Model auth_user_groups
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_user_groups = $Result.DefaultSelection<Prisma.$auth_user_groupsPayload>
/**
 * Model auth_user_user_permissions
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_user_user_permissions = $Result.DefaultSelection<Prisma.$auth_user_user_permissionsPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model django_admin_log
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type django_admin_log = $Result.DefaultSelection<Prisma.$django_admin_logPayload>
/**
 * Model django_content_type
 * 
 */
export type django_content_type = $Result.DefaultSelection<Prisma.$django_content_typePayload>
/**
 * Model django_migrations
 * 
 */
export type django_migrations = $Result.DefaultSelection<Prisma.$django_migrationsPayload>
/**
 * Model django_session
 * 
 */
export type django_session = $Result.DefaultSelection<Prisma.$django_sessionPayload>
/**
 * Model order_details
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type order_details = $Result.DefaultSelection<Prisma.$order_detailsPayload>
/**
 * Model orders
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auth_groups
 * const auth_groups = await prisma.auth_group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auth_groups
   * const auth_groups = await prisma.auth_group.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auth_group`: Exposes CRUD operations for the **auth_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_groups
    * const auth_groups = await prisma.auth_group.findMany()
    * ```
    */
  get auth_group(): Prisma.auth_groupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_group_permissions`: Exposes CRUD operations for the **auth_group_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_group_permissions
    * const auth_group_permissions = await prisma.auth_group_permissions.findMany()
    * ```
    */
  get auth_group_permissions(): Prisma.auth_group_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_permission`: Exposes CRUD operations for the **auth_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_permissions
    * const auth_permissions = await prisma.auth_permission.findMany()
    * ```
    */
  get auth_permission(): Prisma.auth_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_user`: Exposes CRUD operations for the **auth_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_users
    * const auth_users = await prisma.auth_user.findMany()
    * ```
    */
  get auth_user(): Prisma.auth_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_user_groups`: Exposes CRUD operations for the **auth_user_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_user_groups
    * const auth_user_groups = await prisma.auth_user_groups.findMany()
    * ```
    */
  get auth_user_groups(): Prisma.auth_user_groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth_user_user_permissions`: Exposes CRUD operations for the **auth_user_user_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_user_user_permissions
    * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany()
    * ```
    */
  get auth_user_user_permissions(): Prisma.auth_user_user_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.django_admin_log`: Exposes CRUD operations for the **django_admin_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_admin_logs
    * const django_admin_logs = await prisma.django_admin_log.findMany()
    * ```
    */
  get django_admin_log(): Prisma.django_admin_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.django_content_type`: Exposes CRUD operations for the **django_content_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_content_types
    * const django_content_types = await prisma.django_content_type.findMany()
    * ```
    */
  get django_content_type(): Prisma.django_content_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.django_migrations`: Exposes CRUD operations for the **django_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_migrations
    * const django_migrations = await prisma.django_migrations.findMany()
    * ```
    */
  get django_migrations(): Prisma.django_migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.django_session`: Exposes CRUD operations for the **django_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_sessions
    * const django_sessions = await prisma.django_session.findMany()
    * ```
    */
  get django_session(): Prisma.django_sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_details`: Exposes CRUD operations for the **order_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_details
    * const order_details = await prisma.order_details.findMany()
    * ```
    */
  get order_details(): Prisma.order_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    auth_group: 'auth_group',
    auth_group_permissions: 'auth_group_permissions',
    auth_permission: 'auth_permission',
    auth_user: 'auth_user',
    auth_user_groups: 'auth_user_groups',
    auth_user_user_permissions: 'auth_user_user_permissions',
    customers: 'customers',
    django_admin_log: 'django_admin_log',
    django_content_type: 'django_content_type',
    django_migrations: 'django_migrations',
    django_session: 'django_session',
    order_details: 'order_details',
    orders: 'orders',
    products: 'products'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auth_group" | "auth_group_permissions" | "auth_permission" | "auth_user" | "auth_user_groups" | "auth_user_user_permissions" | "customers" | "django_admin_log" | "django_content_type" | "django_migrations" | "django_session" | "order_details" | "orders" | "products"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth_group: {
        payload: Prisma.$auth_groupPayload<ExtArgs>
        fields: Prisma.auth_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          findFirst: {
            args: Prisma.auth_groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          findMany: {
            args: Prisma.auth_groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>[]
          }
          create: {
            args: Prisma.auth_groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          createMany: {
            args: Prisma.auth_groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_groupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>[]
          }
          delete: {
            args: Prisma.auth_groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          update: {
            args: Prisma.auth_groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          deleteMany: {
            args: Prisma.auth_groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_groupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>[]
          }
          upsert: {
            args: Prisma.auth_groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_groupPayload>
          }
          aggregate: {
            args: Prisma.Auth_groupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_group>
          }
          groupBy: {
            args: Prisma.auth_groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_groupCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_groupCountAggregateOutputType> | number
          }
        }
      }
      auth_group_permissions: {
        payload: Prisma.$auth_group_permissionsPayload<ExtArgs>
        fields: Prisma.auth_group_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_group_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          findFirst: {
            args: Prisma.auth_group_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_group_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          findMany: {
            args: Prisma.auth_group_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>[]
          }
          create: {
            args: Prisma.auth_group_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          createMany: {
            args: Prisma.auth_group_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_group_permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>[]
          }
          delete: {
            args: Prisma.auth_group_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          update: {
            args: Prisma.auth_group_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.auth_group_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_group_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_group_permissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>[]
          }
          upsert: {
            args: Prisma.auth_group_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Auth_group_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_group_permissions>
          }
          groupBy: {
            args: Prisma.auth_group_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_group_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_group_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_group_permissionsCountAggregateOutputType> | number
          }
        }
      }
      auth_permission: {
        payload: Prisma.$auth_permissionPayload<ExtArgs>
        fields: Prisma.auth_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          findFirst: {
            args: Prisma.auth_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          findMany: {
            args: Prisma.auth_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>[]
          }
          create: {
            args: Prisma.auth_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          createMany: {
            args: Prisma.auth_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>[]
          }
          delete: {
            args: Prisma.auth_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          update: {
            args: Prisma.auth_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          deleteMany: {
            args: Prisma.auth_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_permissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>[]
          }
          upsert: {
            args: Prisma.auth_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_permissionPayload>
          }
          aggregate: {
            args: Prisma.Auth_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_permission>
          }
          groupBy: {
            args: Prisma.auth_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_permissionCountAggregateOutputType> | number
          }
        }
      }
      auth_user: {
        payload: Prisma.$auth_userPayload<ExtArgs>
        fields: Prisma.auth_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findFirst: {
            args: Prisma.auth_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findMany: {
            args: Prisma.auth_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          create: {
            args: Prisma.auth_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          createMany: {
            args: Prisma.auth_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          delete: {
            args: Prisma.auth_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          update: {
            args: Prisma.auth_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          deleteMany: {
            args: Prisma.auth_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          upsert: {
            args: Prisma.auth_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          aggregate: {
            args: Prisma.Auth_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_user>
          }
          groupBy: {
            args: Prisma.auth_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_userCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_userCountAggregateOutputType> | number
          }
        }
      }
      auth_user_groups: {
        payload: Prisma.$auth_user_groupsPayload<ExtArgs>
        fields: Prisma.auth_user_groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_user_groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_user_groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          findFirst: {
            args: Prisma.auth_user_groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_user_groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          findMany: {
            args: Prisma.auth_user_groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>[]
          }
          create: {
            args: Prisma.auth_user_groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          createMany: {
            args: Prisma.auth_user_groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_user_groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>[]
          }
          delete: {
            args: Prisma.auth_user_groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          update: {
            args: Prisma.auth_user_groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          deleteMany: {
            args: Prisma.auth_user_groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_user_groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_user_groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>[]
          }
          upsert: {
            args: Prisma.auth_user_groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>
          }
          aggregate: {
            args: Prisma.Auth_user_groupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_user_groups>
          }
          groupBy: {
            args: Prisma.auth_user_groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_user_groupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_user_groupsCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_user_groupsCountAggregateOutputType> | number
          }
        }
      }
      auth_user_user_permissions: {
        payload: Prisma.$auth_user_user_permissionsPayload<ExtArgs>
        fields: Prisma.auth_user_user_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_user_user_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          findFirst: {
            args: Prisma.auth_user_user_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          findMany: {
            args: Prisma.auth_user_user_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>[]
          }
          create: {
            args: Prisma.auth_user_user_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          createMany: {
            args: Prisma.auth_user_user_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_user_user_permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>[]
          }
          delete: {
            args: Prisma.auth_user_user_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          update: {
            args: Prisma.auth_user_user_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.auth_user_user_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_user_user_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_user_user_permissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>[]
          }
          upsert: {
            args: Prisma.auth_user_user_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Auth_user_user_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_user_user_permissions>
          }
          groupBy: {
            args: Prisma.auth_user_user_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_user_user_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_user_user_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_user_user_permissionsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      django_admin_log: {
        payload: Prisma.$django_admin_logPayload<ExtArgs>
        fields: Prisma.django_admin_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.django_admin_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.django_admin_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          findFirst: {
            args: Prisma.django_admin_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.django_admin_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          findMany: {
            args: Prisma.django_admin_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>[]
          }
          create: {
            args: Prisma.django_admin_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          createMany: {
            args: Prisma.django_admin_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.django_admin_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>[]
          }
          delete: {
            args: Prisma.django_admin_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          update: {
            args: Prisma.django_admin_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          deleteMany: {
            args: Prisma.django_admin_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.django_admin_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.django_admin_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>[]
          }
          upsert: {
            args: Prisma.django_admin_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_admin_logPayload>
          }
          aggregate: {
            args: Prisma.Django_admin_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDjango_admin_log>
          }
          groupBy: {
            args: Prisma.django_admin_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Django_admin_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.django_admin_logCountArgs<ExtArgs>
            result: $Utils.Optional<Django_admin_logCountAggregateOutputType> | number
          }
        }
      }
      django_content_type: {
        payload: Prisma.$django_content_typePayload<ExtArgs>
        fields: Prisma.django_content_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.django_content_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.django_content_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          findFirst: {
            args: Prisma.django_content_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.django_content_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          findMany: {
            args: Prisma.django_content_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>[]
          }
          create: {
            args: Prisma.django_content_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          createMany: {
            args: Prisma.django_content_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.django_content_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>[]
          }
          delete: {
            args: Prisma.django_content_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          update: {
            args: Prisma.django_content_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          deleteMany: {
            args: Prisma.django_content_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.django_content_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.django_content_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>[]
          }
          upsert: {
            args: Prisma.django_content_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_content_typePayload>
          }
          aggregate: {
            args: Prisma.Django_content_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDjango_content_type>
          }
          groupBy: {
            args: Prisma.django_content_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Django_content_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.django_content_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Django_content_typeCountAggregateOutputType> | number
          }
        }
      }
      django_migrations: {
        payload: Prisma.$django_migrationsPayload<ExtArgs>
        fields: Prisma.django_migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.django_migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.django_migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          findFirst: {
            args: Prisma.django_migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.django_migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          findMany: {
            args: Prisma.django_migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>[]
          }
          create: {
            args: Prisma.django_migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          createMany: {
            args: Prisma.django_migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.django_migrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>[]
          }
          delete: {
            args: Prisma.django_migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          update: {
            args: Prisma.django_migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          deleteMany: {
            args: Prisma.django_migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.django_migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.django_migrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>[]
          }
          upsert: {
            args: Prisma.django_migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_migrationsPayload>
          }
          aggregate: {
            args: Prisma.Django_migrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDjango_migrations>
          }
          groupBy: {
            args: Prisma.django_migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Django_migrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.django_migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<Django_migrationsCountAggregateOutputType> | number
          }
        }
      }
      django_session: {
        payload: Prisma.$django_sessionPayload<ExtArgs>
        fields: Prisma.django_sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.django_sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.django_sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          findFirst: {
            args: Prisma.django_sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.django_sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          findMany: {
            args: Prisma.django_sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>[]
          }
          create: {
            args: Prisma.django_sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          createMany: {
            args: Prisma.django_sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.django_sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>[]
          }
          delete: {
            args: Prisma.django_sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          update: {
            args: Prisma.django_sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          deleteMany: {
            args: Prisma.django_sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.django_sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.django_sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>[]
          }
          upsert: {
            args: Prisma.django_sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$django_sessionPayload>
          }
          aggregate: {
            args: Prisma.Django_sessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDjango_session>
          }
          groupBy: {
            args: Prisma.django_sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Django_sessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.django_sessionCountArgs<ExtArgs>
            result: $Utils.Optional<Django_sessionCountAggregateOutputType> | number
          }
        }
      }
      order_details: {
        payload: Prisma.$order_detailsPayload<ExtArgs>
        fields: Prisma.order_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findFirst: {
            args: Prisma.order_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findMany: {
            args: Prisma.order_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          create: {
            args: Prisma.order_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          createMany: {
            args: Prisma.order_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          delete: {
            args: Prisma.order_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          update: {
            args: Prisma.order_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          deleteMany: {
            args: Prisma.order_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          upsert: {
            args: Prisma.order_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          aggregate: {
            args: Prisma.Order_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_details>
          }
          groupBy: {
            args: Prisma.order_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_detailsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auth_group?: auth_groupOmit
    auth_group_permissions?: auth_group_permissionsOmit
    auth_permission?: auth_permissionOmit
    auth_user?: auth_userOmit
    auth_user_groups?: auth_user_groupsOmit
    auth_user_user_permissions?: auth_user_user_permissionsOmit
    customers?: customersOmit
    django_admin_log?: django_admin_logOmit
    django_content_type?: django_content_typeOmit
    django_migrations?: django_migrationsOmit
    django_session?: django_sessionOmit
    order_details?: order_detailsOmit
    orders?: ordersOmit
    products?: productsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Auth_groupCountOutputType
   */

  export type Auth_groupCountOutputType = {
    auth_group_permissions: number
    auth_user_groups: number
  }

  export type Auth_groupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | Auth_groupCountOutputTypeCountAuth_group_permissionsArgs
    auth_user_groups?: boolean | Auth_groupCountOutputTypeCountAuth_user_groupsArgs
  }

  // Custom InputTypes
  /**
   * Auth_groupCountOutputType without action
   */
  export type Auth_groupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_groupCountOutputType
     */
    select?: Auth_groupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Auth_groupCountOutputType without action
   */
  export type Auth_groupCountOutputTypeCountAuth_group_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_group_permissionsWhereInput
  }

  /**
   * Auth_groupCountOutputType without action
   */
  export type Auth_groupCountOutputTypeCountAuth_user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_groupsWhereInput
  }


  /**
   * Count Type Auth_permissionCountOutputType
   */

  export type Auth_permissionCountOutputType = {
    auth_group_permissions: number
    auth_user_user_permissions: number
  }

  export type Auth_permissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | Auth_permissionCountOutputTypeCountAuth_group_permissionsArgs
    auth_user_user_permissions?: boolean | Auth_permissionCountOutputTypeCountAuth_user_user_permissionsArgs
  }

  // Custom InputTypes
  /**
   * Auth_permissionCountOutputType without action
   */
  export type Auth_permissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_permissionCountOutputType
     */
    select?: Auth_permissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Auth_permissionCountOutputType without action
   */
  export type Auth_permissionCountOutputTypeCountAuth_group_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_group_permissionsWhereInput
  }

  /**
   * Auth_permissionCountOutputType without action
   */
  export type Auth_permissionCountOutputTypeCountAuth_user_user_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_user_permissionsWhereInput
  }


  /**
   * Count Type Auth_userCountOutputType
   */

  export type Auth_userCountOutputType = {
    auth_user_groups: number
    auth_user_user_permissions: number
    django_admin_log: number
  }

  export type Auth_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user_groups?: boolean | Auth_userCountOutputTypeCountAuth_user_groupsArgs
    auth_user_user_permissions?: boolean | Auth_userCountOutputTypeCountAuth_user_user_permissionsArgs
    django_admin_log?: boolean | Auth_userCountOutputTypeCountDjango_admin_logArgs
  }

  // Custom InputTypes
  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_userCountOutputType
     */
    select?: Auth_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeCountAuth_user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_groupsWhereInput
  }

  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeCountAuth_user_user_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_user_permissionsWhereInput
  }

  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeCountDjango_admin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_admin_logWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type Django_content_typeCountOutputType
   */

  export type Django_content_typeCountOutputType = {
    auth_permission: number
    django_admin_log: number
  }

  export type Django_content_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | Django_content_typeCountOutputTypeCountAuth_permissionArgs
    django_admin_log?: boolean | Django_content_typeCountOutputTypeCountDjango_admin_logArgs
  }

  // Custom InputTypes
  /**
   * Django_content_typeCountOutputType without action
   */
  export type Django_content_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Django_content_typeCountOutputType
     */
    select?: Django_content_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Django_content_typeCountOutputType without action
   */
  export type Django_content_typeCountOutputTypeCountAuth_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_permissionWhereInput
  }

  /**
   * Django_content_typeCountOutputType without action
   */
  export type Django_content_typeCountOutputTypeCountDjango_admin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_admin_logWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_details: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrdersCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_details: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | ProductsCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model auth_group
   */

  export type AggregateAuth_group = {
    _count: Auth_groupCountAggregateOutputType | null
    _avg: Auth_groupAvgAggregateOutputType | null
    _sum: Auth_groupSumAggregateOutputType | null
    _min: Auth_groupMinAggregateOutputType | null
    _max: Auth_groupMaxAggregateOutputType | null
  }

  export type Auth_groupAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_groupSumAggregateOutputType = {
    id: number | null
  }

  export type Auth_groupMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Auth_groupMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Auth_groupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Auth_groupAvgAggregateInputType = {
    id?: true
  }

  export type Auth_groupSumAggregateInputType = {
    id?: true
  }

  export type Auth_groupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Auth_groupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Auth_groupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Auth_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_group to aggregate.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: auth_groupOrderByWithRelationInput | auth_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_groups
    **/
    _count?: true | Auth_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_groupMaxAggregateInputType
  }

  export type GetAuth_groupAggregateType<T extends Auth_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_group[P]>
      : GetScalarType<T[P], AggregateAuth_group[P]>
  }




  export type auth_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_groupWhereInput
    orderBy?: auth_groupOrderByWithAggregationInput | auth_groupOrderByWithAggregationInput[]
    by: Auth_groupScalarFieldEnum[] | Auth_groupScalarFieldEnum
    having?: auth_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_groupCountAggregateInputType | true
    _avg?: Auth_groupAvgAggregateInputType
    _sum?: Auth_groupSumAggregateInputType
    _min?: Auth_groupMinAggregateInputType
    _max?: Auth_groupMaxAggregateInputType
  }

  export type Auth_groupGroupByOutputType = {
    id: number
    name: string
    _count: Auth_groupCountAggregateOutputType | null
    _avg: Auth_groupAvgAggregateOutputType | null
    _sum: Auth_groupSumAggregateOutputType | null
    _min: Auth_groupMinAggregateOutputType | null
    _max: Auth_groupMaxAggregateOutputType | null
  }

  type GetAuth_groupGroupByPayload<T extends auth_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_groupGroupByOutputType[P]>
        }
      >
    >


  export type auth_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    auth_group_permissions?: boolean | auth_group$auth_group_permissionsArgs<ExtArgs>
    auth_user_groups?: boolean | auth_group$auth_user_groupsArgs<ExtArgs>
    _count?: boolean | Auth_groupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_group"]>

  export type auth_groupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["auth_group"]>

  export type auth_groupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["auth_group"]>

  export type auth_groupSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type auth_groupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["auth_group"]>
  export type auth_groupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | auth_group$auth_group_permissionsArgs<ExtArgs>
    auth_user_groups?: boolean | auth_group$auth_user_groupsArgs<ExtArgs>
    _count?: boolean | Auth_groupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type auth_groupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type auth_groupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $auth_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_group"
    objects: {
      auth_group_permissions: Prisma.$auth_group_permissionsPayload<ExtArgs>[]
      auth_user_groups: Prisma.$auth_user_groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["auth_group"]>
    composites: {}
  }

  type auth_groupGetPayload<S extends boolean | null | undefined | auth_groupDefaultArgs> = $Result.GetResult<Prisma.$auth_groupPayload, S>

  type auth_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_groupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_groupCountAggregateInputType | true
    }

  export interface auth_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_group'], meta: { name: 'auth_group' } }
    /**
     * Find zero or one Auth_group that matches the filter.
     * @param {auth_groupFindUniqueArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_groupFindUniqueArgs>(args: SelectSubset<T, auth_groupFindUniqueArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_groupFindUniqueOrThrowArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_groupFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindFirstArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_groupFindFirstArgs>(args?: SelectSubset<T, auth_groupFindFirstArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindFirstOrThrowArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_groupFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_groups
     * const auth_groups = await prisma.auth_group.findMany()
     * 
     * // Get first 10 Auth_groups
     * const auth_groups = await prisma.auth_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_groupWithIdOnly = await prisma.auth_group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_groupFindManyArgs>(args?: SelectSubset<T, auth_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_group.
     * @param {auth_groupCreateArgs} args - Arguments to create a Auth_group.
     * @example
     * // Create one Auth_group
     * const Auth_group = await prisma.auth_group.create({
     *   data: {
     *     // ... data to create a Auth_group
     *   }
     * })
     * 
     */
    create<T extends auth_groupCreateArgs>(args: SelectSubset<T, auth_groupCreateArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_groups.
     * @param {auth_groupCreateManyArgs} args - Arguments to create many Auth_groups.
     * @example
     * // Create many Auth_groups
     * const auth_group = await prisma.auth_group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_groupCreateManyArgs>(args?: SelectSubset<T, auth_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_groups and returns the data saved in the database.
     * @param {auth_groupCreateManyAndReturnArgs} args - Arguments to create many Auth_groups.
     * @example
     * // Create many Auth_groups
     * const auth_group = await prisma.auth_group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_groups and only return the `id`
     * const auth_groupWithIdOnly = await prisma.auth_group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_groupCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_groupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_group.
     * @param {auth_groupDeleteArgs} args - Arguments to delete one Auth_group.
     * @example
     * // Delete one Auth_group
     * const Auth_group = await prisma.auth_group.delete({
     *   where: {
     *     // ... filter to delete one Auth_group
     *   }
     * })
     * 
     */
    delete<T extends auth_groupDeleteArgs>(args: SelectSubset<T, auth_groupDeleteArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_group.
     * @param {auth_groupUpdateArgs} args - Arguments to update one Auth_group.
     * @example
     * // Update one Auth_group
     * const auth_group = await prisma.auth_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_groupUpdateArgs>(args: SelectSubset<T, auth_groupUpdateArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_groups.
     * @param {auth_groupDeleteManyArgs} args - Arguments to filter Auth_groups to delete.
     * @example
     * // Delete a few Auth_groups
     * const { count } = await prisma.auth_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_groupDeleteManyArgs>(args?: SelectSubset<T, auth_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_groups
     * const auth_group = await prisma.auth_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_groupUpdateManyArgs>(args: SelectSubset<T, auth_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_groups and returns the data updated in the database.
     * @param {auth_groupUpdateManyAndReturnArgs} args - Arguments to update many Auth_groups.
     * @example
     * // Update many Auth_groups
     * const auth_group = await prisma.auth_group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_groups and only return the `id`
     * const auth_groupWithIdOnly = await prisma.auth_group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_groupUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_groupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_group.
     * @param {auth_groupUpsertArgs} args - Arguments to update or create a Auth_group.
     * @example
     * // Update or create a Auth_group
     * const auth_group = await prisma.auth_group.upsert({
     *   create: {
     *     // ... data to create a Auth_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_group we want to update
     *   }
     * })
     */
    upsert<T extends auth_groupUpsertArgs>(args: SelectSubset<T, auth_groupUpsertArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupCountArgs} args - Arguments to filter Auth_groups to count.
     * @example
     * // Count the number of Auth_groups
     * const count = await prisma.auth_group.count({
     *   where: {
     *     // ... the filter for the Auth_groups we want to count
     *   }
     * })
    **/
    count<T extends auth_groupCountArgs>(
      args?: Subset<T, auth_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_groupAggregateArgs>(args: Subset<T, Auth_groupAggregateArgs>): Prisma.PrismaPromise<GetAuth_groupAggregateType<T>>

    /**
     * Group by Auth_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_groupGroupByArgs['orderBy'] }
        : { orderBy?: auth_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_group model
   */
  readonly fields: auth_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_group_permissions<T extends auth_group$auth_group_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, auth_group$auth_group_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth_user_groups<T extends auth_group$auth_user_groupsArgs<ExtArgs> = {}>(args?: Subset<T, auth_group$auth_user_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_group model
   */
  interface auth_groupFieldRefs {
    readonly id: FieldRef<"auth_group", 'Int'>
    readonly name: FieldRef<"auth_group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * auth_group findUnique
   */
  export type auth_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter, which auth_group to fetch.
     */
    where: auth_groupWhereUniqueInput
  }

  /**
   * auth_group findUniqueOrThrow
   */
  export type auth_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter, which auth_group to fetch.
     */
    where: auth_groupWhereUniqueInput
  }

  /**
   * auth_group findFirst
   */
  export type auth_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter, which auth_group to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: auth_groupOrderByWithRelationInput | auth_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_groups.
     */
    distinct?: Auth_groupScalarFieldEnum | Auth_groupScalarFieldEnum[]
  }

  /**
   * auth_group findFirstOrThrow
   */
  export type auth_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter, which auth_group to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: auth_groupOrderByWithRelationInput | auth_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_groups.
     */
    distinct?: Auth_groupScalarFieldEnum | Auth_groupScalarFieldEnum[]
  }

  /**
   * auth_group findMany
   */
  export type auth_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter, which auth_groups to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: auth_groupOrderByWithRelationInput | auth_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    distinct?: Auth_groupScalarFieldEnum | Auth_groupScalarFieldEnum[]
  }

  /**
   * auth_group create
   */
  export type auth_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_group.
     */
    data: XOR<auth_groupCreateInput, auth_groupUncheckedCreateInput>
  }

  /**
   * auth_group createMany
   */
  export type auth_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_groups.
     */
    data: auth_groupCreateManyInput | auth_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_group createManyAndReturn
   */
  export type auth_groupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * The data used to create many auth_groups.
     */
    data: auth_groupCreateManyInput | auth_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_group update
   */
  export type auth_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_group.
     */
    data: XOR<auth_groupUpdateInput, auth_groupUncheckedUpdateInput>
    /**
     * Choose, which auth_group to update.
     */
    where: auth_groupWhereUniqueInput
  }

  /**
   * auth_group updateMany
   */
  export type auth_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_groups.
     */
    data: XOR<auth_groupUpdateManyMutationInput, auth_groupUncheckedUpdateManyInput>
    /**
     * Filter which auth_groups to update
     */
    where?: auth_groupWhereInput
    /**
     * Limit how many auth_groups to update.
     */
    limit?: number
  }

  /**
   * auth_group updateManyAndReturn
   */
  export type auth_groupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * The data used to update auth_groups.
     */
    data: XOR<auth_groupUpdateManyMutationInput, auth_groupUncheckedUpdateManyInput>
    /**
     * Filter which auth_groups to update
     */
    where?: auth_groupWhereInput
    /**
     * Limit how many auth_groups to update.
     */
    limit?: number
  }

  /**
   * auth_group upsert
   */
  export type auth_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_group to update in case it exists.
     */
    where: auth_groupWhereUniqueInput
    /**
     * In case the auth_group found by the `where` argument doesn't exist, create a new auth_group with this data.
     */
    create: XOR<auth_groupCreateInput, auth_groupUncheckedCreateInput>
    /**
     * In case the auth_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_groupUpdateInput, auth_groupUncheckedUpdateInput>
  }

  /**
   * auth_group delete
   */
  export type auth_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
    /**
     * Filter which auth_group to delete.
     */
    where: auth_groupWhereUniqueInput
  }

  /**
   * auth_group deleteMany
   */
  export type auth_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_groups to delete
     */
    where?: auth_groupWhereInput
    /**
     * Limit how many auth_groups to delete.
     */
    limit?: number
  }

  /**
   * auth_group.auth_group_permissions
   */
  export type auth_group$auth_group_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    where?: auth_group_permissionsWhereInput
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    cursor?: auth_group_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_group_permissionsScalarFieldEnum | Auth_group_permissionsScalarFieldEnum[]
  }

  /**
   * auth_group.auth_user_groups
   */
  export type auth_group$auth_user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    where?: auth_user_groupsWhereInput
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    cursor?: auth_user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_user_groupsScalarFieldEnum | Auth_user_groupsScalarFieldEnum[]
  }

  /**
   * auth_group without action
   */
  export type auth_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group
     */
    omit?: auth_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_groupInclude<ExtArgs> | null
  }


  /**
   * Model auth_group_permissions
   */

  export type AggregateAuth_group_permissions = {
    _count: Auth_group_permissionsCountAggregateOutputType | null
    _avg: Auth_group_permissionsAvgAggregateOutputType | null
    _sum: Auth_group_permissionsSumAggregateOutputType | null
    _min: Auth_group_permissionsMinAggregateOutputType | null
    _max: Auth_group_permissionsMaxAggregateOutputType | null
  }

  export type Auth_group_permissionsAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsSumAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsMinAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsMaxAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsCountAggregateOutputType = {
    id: number
    group_id: number
    permission_id: number
    _all: number
  }


  export type Auth_group_permissionsAvgAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsSumAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsMinAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsMaxAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsCountAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
    _all?: true
  }

  export type Auth_group_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_group_permissions to aggregate.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_group_permissions
    **/
    _count?: true | Auth_group_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_group_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_group_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_group_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_group_permissionsMaxAggregateInputType
  }

  export type GetAuth_group_permissionsAggregateType<T extends Auth_group_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_group_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_group_permissions[P]>
      : GetScalarType<T[P], AggregateAuth_group_permissions[P]>
  }




  export type auth_group_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_group_permissionsWhereInput
    orderBy?: auth_group_permissionsOrderByWithAggregationInput | auth_group_permissionsOrderByWithAggregationInput[]
    by: Auth_group_permissionsScalarFieldEnum[] | Auth_group_permissionsScalarFieldEnum
    having?: auth_group_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_group_permissionsCountAggregateInputType | true
    _avg?: Auth_group_permissionsAvgAggregateInputType
    _sum?: Auth_group_permissionsSumAggregateInputType
    _min?: Auth_group_permissionsMinAggregateInputType
    _max?: Auth_group_permissionsMaxAggregateInputType
  }

  export type Auth_group_permissionsGroupByOutputType = {
    id: bigint
    group_id: number
    permission_id: number
    _count: Auth_group_permissionsCountAggregateOutputType | null
    _avg: Auth_group_permissionsAvgAggregateOutputType | null
    _sum: Auth_group_permissionsSumAggregateOutputType | null
    _min: Auth_group_permissionsMinAggregateOutputType | null
    _max: Auth_group_permissionsMaxAggregateOutputType | null
  }

  type GetAuth_group_permissionsGroupByPayload<T extends auth_group_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_group_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_group_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type auth_group_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_group_permissions"]>

  export type auth_group_permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_group_permissions"]>

  export type auth_group_permissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_group_permissions"]>

  export type auth_group_permissionsSelectScalar = {
    id?: boolean
    group_id?: boolean
    permission_id?: boolean
  }

  export type auth_group_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "permission_id", ExtArgs["result"]["auth_group_permissions"]>
  export type auth_group_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }
  export type auth_group_permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }
  export type auth_group_permissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
  }

  export type $auth_group_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_group_permissions"
    objects: {
      auth_permission: Prisma.$auth_permissionPayload<ExtArgs>
      auth_group: Prisma.$auth_groupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      group_id: number
      permission_id: number
    }, ExtArgs["result"]["auth_group_permissions"]>
    composites: {}
  }

  type auth_group_permissionsGetPayload<S extends boolean | null | undefined | auth_group_permissionsDefaultArgs> = $Result.GetResult<Prisma.$auth_group_permissionsPayload, S>

  type auth_group_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_group_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_group_permissionsCountAggregateInputType | true
    }

  export interface auth_group_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_group_permissions'], meta: { name: 'auth_group_permissions' } }
    /**
     * Find zero or one Auth_group_permissions that matches the filter.
     * @param {auth_group_permissionsFindUniqueArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_group_permissionsFindUniqueArgs>(args: SelectSubset<T, auth_group_permissionsFindUniqueArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_group_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_group_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_group_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindFirstArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_group_permissionsFindFirstArgs>(args?: SelectSubset<T, auth_group_permissionsFindFirstArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_group_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindFirstOrThrowArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_group_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_group_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findMany()
     * 
     * // Get first 10 Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_group_permissionsWithIdOnly = await prisma.auth_group_permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_group_permissionsFindManyArgs>(args?: SelectSubset<T, auth_group_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_group_permissions.
     * @param {auth_group_permissionsCreateArgs} args - Arguments to create a Auth_group_permissions.
     * @example
     * // Create one Auth_group_permissions
     * const Auth_group_permissions = await prisma.auth_group_permissions.create({
     *   data: {
     *     // ... data to create a Auth_group_permissions
     *   }
     * })
     * 
     */
    create<T extends auth_group_permissionsCreateArgs>(args: SelectSubset<T, auth_group_permissionsCreateArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_group_permissions.
     * @param {auth_group_permissionsCreateManyArgs} args - Arguments to create many Auth_group_permissions.
     * @example
     * // Create many Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_group_permissionsCreateManyArgs>(args?: SelectSubset<T, auth_group_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_group_permissions and returns the data saved in the database.
     * @param {auth_group_permissionsCreateManyAndReturnArgs} args - Arguments to create many Auth_group_permissions.
     * @example
     * // Create many Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_group_permissions and only return the `id`
     * const auth_group_permissionsWithIdOnly = await prisma.auth_group_permissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_group_permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_group_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_group_permissions.
     * @param {auth_group_permissionsDeleteArgs} args - Arguments to delete one Auth_group_permissions.
     * @example
     * // Delete one Auth_group_permissions
     * const Auth_group_permissions = await prisma.auth_group_permissions.delete({
     *   where: {
     *     // ... filter to delete one Auth_group_permissions
     *   }
     * })
     * 
     */
    delete<T extends auth_group_permissionsDeleteArgs>(args: SelectSubset<T, auth_group_permissionsDeleteArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_group_permissions.
     * @param {auth_group_permissionsUpdateArgs} args - Arguments to update one Auth_group_permissions.
     * @example
     * // Update one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_group_permissionsUpdateArgs>(args: SelectSubset<T, auth_group_permissionsUpdateArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_group_permissions.
     * @param {auth_group_permissionsDeleteManyArgs} args - Arguments to filter Auth_group_permissions to delete.
     * @example
     * // Delete a few Auth_group_permissions
     * const { count } = await prisma.auth_group_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_group_permissionsDeleteManyArgs>(args?: SelectSubset<T, auth_group_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_group_permissionsUpdateManyArgs>(args: SelectSubset<T, auth_group_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_group_permissions and returns the data updated in the database.
     * @param {auth_group_permissionsUpdateManyAndReturnArgs} args - Arguments to update many Auth_group_permissions.
     * @example
     * // Update many Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_group_permissions and only return the `id`
     * const auth_group_permissionsWithIdOnly = await prisma.auth_group_permissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_group_permissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_group_permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_group_permissions.
     * @param {auth_group_permissionsUpsertArgs} args - Arguments to update or create a Auth_group_permissions.
     * @example
     * // Update or create a Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.upsert({
     *   create: {
     *     // ... data to create a Auth_group_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_group_permissions we want to update
     *   }
     * })
     */
    upsert<T extends auth_group_permissionsUpsertArgs>(args: SelectSubset<T, auth_group_permissionsUpsertArgs<ExtArgs>>): Prisma__auth_group_permissionsClient<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsCountArgs} args - Arguments to filter Auth_group_permissions to count.
     * @example
     * // Count the number of Auth_group_permissions
     * const count = await prisma.auth_group_permissions.count({
     *   where: {
     *     // ... the filter for the Auth_group_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_group_permissionsCountArgs>(
      args?: Subset<T, auth_group_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_group_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_group_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_group_permissionsAggregateArgs>(args: Subset<T, Auth_group_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_group_permissionsAggregateType<T>>

    /**
     * Group by Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_group_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_group_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: auth_group_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_group_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_group_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_group_permissions model
   */
  readonly fields: auth_group_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_group_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_group_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_permission<T extends auth_permissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_permissionDefaultArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auth_group<T extends auth_groupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_groupDefaultArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_group_permissions model
   */
  interface auth_group_permissionsFieldRefs {
    readonly id: FieldRef<"auth_group_permissions", 'BigInt'>
    readonly group_id: FieldRef<"auth_group_permissions", 'Int'>
    readonly permission_id: FieldRef<"auth_group_permissions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * auth_group_permissions findUnique
   */
  export type auth_group_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where: auth_group_permissionsWhereUniqueInput
  }

  /**
   * auth_group_permissions findUniqueOrThrow
   */
  export type auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where: auth_group_permissionsWhereUniqueInput
  }

  /**
   * auth_group_permissions findFirst
   */
  export type auth_group_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_group_permissions.
     */
    distinct?: Auth_group_permissionsScalarFieldEnum | Auth_group_permissionsScalarFieldEnum[]
  }

  /**
   * auth_group_permissions findFirstOrThrow
   */
  export type auth_group_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_group_permissions.
     */
    distinct?: Auth_group_permissionsScalarFieldEnum | Auth_group_permissionsScalarFieldEnum[]
  }

  /**
   * auth_group_permissions findMany
   */
  export type auth_group_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    distinct?: Auth_group_permissionsScalarFieldEnum | Auth_group_permissionsScalarFieldEnum[]
  }

  /**
   * auth_group_permissions create
   */
  export type auth_group_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_group_permissions.
     */
    data: XOR<auth_group_permissionsCreateInput, auth_group_permissionsUncheckedCreateInput>
  }

  /**
   * auth_group_permissions createMany
   */
  export type auth_group_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_group_permissions.
     */
    data: auth_group_permissionsCreateManyInput | auth_group_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_group_permissions createManyAndReturn
   */
  export type auth_group_permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * The data used to create many auth_group_permissions.
     */
    data: auth_group_permissionsCreateManyInput | auth_group_permissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_group_permissions update
   */
  export type auth_group_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_group_permissions.
     */
    data: XOR<auth_group_permissionsUpdateInput, auth_group_permissionsUncheckedUpdateInput>
    /**
     * Choose, which auth_group_permissions to update.
     */
    where: auth_group_permissionsWhereUniqueInput
  }

  /**
   * auth_group_permissions updateMany
   */
  export type auth_group_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_group_permissions.
     */
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_group_permissions to update
     */
    where?: auth_group_permissionsWhereInput
    /**
     * Limit how many auth_group_permissions to update.
     */
    limit?: number
  }

  /**
   * auth_group_permissions updateManyAndReturn
   */
  export type auth_group_permissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * The data used to update auth_group_permissions.
     */
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_group_permissions to update
     */
    where?: auth_group_permissionsWhereInput
    /**
     * Limit how many auth_group_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_group_permissions upsert
   */
  export type auth_group_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_group_permissions to update in case it exists.
     */
    where: auth_group_permissionsWhereUniqueInput
    /**
     * In case the auth_group_permissions found by the `where` argument doesn't exist, create a new auth_group_permissions with this data.
     */
    create: XOR<auth_group_permissionsCreateInput, auth_group_permissionsUncheckedCreateInput>
    /**
     * In case the auth_group_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_group_permissionsUpdateInput, auth_group_permissionsUncheckedUpdateInput>
  }

  /**
   * auth_group_permissions delete
   */
  export type auth_group_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    /**
     * Filter which auth_group_permissions to delete.
     */
    where: auth_group_permissionsWhereUniqueInput
  }

  /**
   * auth_group_permissions deleteMany
   */
  export type auth_group_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_group_permissions to delete
     */
    where?: auth_group_permissionsWhereInput
    /**
     * Limit how many auth_group_permissions to delete.
     */
    limit?: number
  }

  /**
   * auth_group_permissions without action
   */
  export type auth_group_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model auth_permission
   */

  export type AggregateAuth_permission = {
    _count: Auth_permissionCountAggregateOutputType | null
    _avg: Auth_permissionAvgAggregateOutputType | null
    _sum: Auth_permissionSumAggregateOutputType | null
    _min: Auth_permissionMinAggregateOutputType | null
    _max: Auth_permissionMaxAggregateOutputType | null
  }

  export type Auth_permissionAvgAggregateOutputType = {
    id: number | null
    content_type_id: number | null
  }

  export type Auth_permissionSumAggregateOutputType = {
    id: number | null
    content_type_id: number | null
  }

  export type Auth_permissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    content_type_id: number | null
    codename: string | null
  }

  export type Auth_permissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    content_type_id: number | null
    codename: string | null
  }

  export type Auth_permissionCountAggregateOutputType = {
    id: number
    name: number
    content_type_id: number
    codename: number
    _all: number
  }


  export type Auth_permissionAvgAggregateInputType = {
    id?: true
    content_type_id?: true
  }

  export type Auth_permissionSumAggregateInputType = {
    id?: true
    content_type_id?: true
  }

  export type Auth_permissionMinAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
  }

  export type Auth_permissionMaxAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
  }

  export type Auth_permissionCountAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
    _all?: true
  }

  export type Auth_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_permission to aggregate.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: auth_permissionOrderByWithRelationInput | auth_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_permissions
    **/
    _count?: true | Auth_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_permissionMaxAggregateInputType
  }

  export type GetAuth_permissionAggregateType<T extends Auth_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_permission[P]>
      : GetScalarType<T[P], AggregateAuth_permission[P]>
  }




  export type auth_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_permissionWhereInput
    orderBy?: auth_permissionOrderByWithAggregationInput | auth_permissionOrderByWithAggregationInput[]
    by: Auth_permissionScalarFieldEnum[] | Auth_permissionScalarFieldEnum
    having?: auth_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_permissionCountAggregateInputType | true
    _avg?: Auth_permissionAvgAggregateInputType
    _sum?: Auth_permissionSumAggregateInputType
    _min?: Auth_permissionMinAggregateInputType
    _max?: Auth_permissionMaxAggregateInputType
  }

  export type Auth_permissionGroupByOutputType = {
    id: number
    name: string
    content_type_id: number
    codename: string
    _count: Auth_permissionCountAggregateOutputType | null
    _avg: Auth_permissionAvgAggregateOutputType | null
    _sum: Auth_permissionSumAggregateOutputType | null
    _min: Auth_permissionMinAggregateOutputType | null
    _max: Auth_permissionMaxAggregateOutputType | null
  }

  type GetAuth_permissionGroupByPayload<T extends auth_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_permissionGroupByOutputType[P]>
        }
      >
    >


  export type auth_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content_type_id?: boolean
    codename?: boolean
    auth_group_permissions?: boolean | auth_permission$auth_group_permissionsArgs<ExtArgs>
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
    auth_user_user_permissions?: boolean | auth_permission$auth_user_user_permissionsArgs<ExtArgs>
    _count?: boolean | Auth_permissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_permission"]>

  export type auth_permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content_type_id?: boolean
    codename?: boolean
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_permission"]>

  export type auth_permissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content_type_id?: boolean
    codename?: boolean
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_permission"]>

  export type auth_permissionSelectScalar = {
    id?: boolean
    name?: boolean
    content_type_id?: boolean
    codename?: boolean
  }

  export type auth_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content_type_id" | "codename", ExtArgs["result"]["auth_permission"]>
  export type auth_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | auth_permission$auth_group_permissionsArgs<ExtArgs>
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
    auth_user_user_permissions?: boolean | auth_permission$auth_user_user_permissionsArgs<ExtArgs>
    _count?: boolean | Auth_permissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type auth_permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
  }
  export type auth_permissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    django_content_type?: boolean | django_content_typeDefaultArgs<ExtArgs>
  }

  export type $auth_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_permission"
    objects: {
      auth_group_permissions: Prisma.$auth_group_permissionsPayload<ExtArgs>[]
      django_content_type: Prisma.$django_content_typePayload<ExtArgs>
      auth_user_user_permissions: Prisma.$auth_user_user_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      content_type_id: number
      codename: string
    }, ExtArgs["result"]["auth_permission"]>
    composites: {}
  }

  type auth_permissionGetPayload<S extends boolean | null | undefined | auth_permissionDefaultArgs> = $Result.GetResult<Prisma.$auth_permissionPayload, S>

  type auth_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_permissionCountAggregateInputType | true
    }

  export interface auth_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_permission'], meta: { name: 'auth_permission' } }
    /**
     * Find zero or one Auth_permission that matches the filter.
     * @param {auth_permissionFindUniqueArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_permissionFindUniqueArgs>(args: SelectSubset<T, auth_permissionFindUniqueArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_permissionFindUniqueOrThrowArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindFirstArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_permissionFindFirstArgs>(args?: SelectSubset<T, auth_permissionFindFirstArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindFirstOrThrowArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_permissions
     * const auth_permissions = await prisma.auth_permission.findMany()
     * 
     * // Get first 10 Auth_permissions
     * const auth_permissions = await prisma.auth_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_permissionWithIdOnly = await prisma.auth_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_permissionFindManyArgs>(args?: SelectSubset<T, auth_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_permission.
     * @param {auth_permissionCreateArgs} args - Arguments to create a Auth_permission.
     * @example
     * // Create one Auth_permission
     * const Auth_permission = await prisma.auth_permission.create({
     *   data: {
     *     // ... data to create a Auth_permission
     *   }
     * })
     * 
     */
    create<T extends auth_permissionCreateArgs>(args: SelectSubset<T, auth_permissionCreateArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_permissions.
     * @param {auth_permissionCreateManyArgs} args - Arguments to create many Auth_permissions.
     * @example
     * // Create many Auth_permissions
     * const auth_permission = await prisma.auth_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_permissionCreateManyArgs>(args?: SelectSubset<T, auth_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_permissions and returns the data saved in the database.
     * @param {auth_permissionCreateManyAndReturnArgs} args - Arguments to create many Auth_permissions.
     * @example
     * // Create many Auth_permissions
     * const auth_permission = await prisma.auth_permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_permissions and only return the `id`
     * const auth_permissionWithIdOnly = await prisma.auth_permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_permission.
     * @param {auth_permissionDeleteArgs} args - Arguments to delete one Auth_permission.
     * @example
     * // Delete one Auth_permission
     * const Auth_permission = await prisma.auth_permission.delete({
     *   where: {
     *     // ... filter to delete one Auth_permission
     *   }
     * })
     * 
     */
    delete<T extends auth_permissionDeleteArgs>(args: SelectSubset<T, auth_permissionDeleteArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_permission.
     * @param {auth_permissionUpdateArgs} args - Arguments to update one Auth_permission.
     * @example
     * // Update one Auth_permission
     * const auth_permission = await prisma.auth_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_permissionUpdateArgs>(args: SelectSubset<T, auth_permissionUpdateArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_permissions.
     * @param {auth_permissionDeleteManyArgs} args - Arguments to filter Auth_permissions to delete.
     * @example
     * // Delete a few Auth_permissions
     * const { count } = await prisma.auth_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_permissionDeleteManyArgs>(args?: SelectSubset<T, auth_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_permissions
     * const auth_permission = await prisma.auth_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_permissionUpdateManyArgs>(args: SelectSubset<T, auth_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_permissions and returns the data updated in the database.
     * @param {auth_permissionUpdateManyAndReturnArgs} args - Arguments to update many Auth_permissions.
     * @example
     * // Update many Auth_permissions
     * const auth_permission = await prisma.auth_permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_permissions and only return the `id`
     * const auth_permissionWithIdOnly = await prisma.auth_permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_permissionUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_permission.
     * @param {auth_permissionUpsertArgs} args - Arguments to update or create a Auth_permission.
     * @example
     * // Update or create a Auth_permission
     * const auth_permission = await prisma.auth_permission.upsert({
     *   create: {
     *     // ... data to create a Auth_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_permission we want to update
     *   }
     * })
     */
    upsert<T extends auth_permissionUpsertArgs>(args: SelectSubset<T, auth_permissionUpsertArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionCountArgs} args - Arguments to filter Auth_permissions to count.
     * @example
     * // Count the number of Auth_permissions
     * const count = await prisma.auth_permission.count({
     *   where: {
     *     // ... the filter for the Auth_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_permissionCountArgs>(
      args?: Subset<T, auth_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_permissionAggregateArgs>(args: Subset<T, Auth_permissionAggregateArgs>): Prisma.PrismaPromise<GetAuth_permissionAggregateType<T>>

    /**
     * Group by Auth_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_permissionGroupByArgs['orderBy'] }
        : { orderBy?: auth_permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_permission model
   */
  readonly fields: auth_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_group_permissions<T extends auth_permission$auth_group_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, auth_permission$auth_group_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    django_content_type<T extends django_content_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, django_content_typeDefaultArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auth_user_user_permissions<T extends auth_permission$auth_user_user_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, auth_permission$auth_user_user_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_permission model
   */
  interface auth_permissionFieldRefs {
    readonly id: FieldRef<"auth_permission", 'Int'>
    readonly name: FieldRef<"auth_permission", 'String'>
    readonly content_type_id: FieldRef<"auth_permission", 'Int'>
    readonly codename: FieldRef<"auth_permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * auth_permission findUnique
   */
  export type auth_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where: auth_permissionWhereUniqueInput
  }

  /**
   * auth_permission findUniqueOrThrow
   */
  export type auth_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where: auth_permissionWhereUniqueInput
  }

  /**
   * auth_permission findFirst
   */
  export type auth_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: auth_permissionOrderByWithRelationInput | auth_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_permissions.
     */
    distinct?: Auth_permissionScalarFieldEnum | Auth_permissionScalarFieldEnum[]
  }

  /**
   * auth_permission findFirstOrThrow
   */
  export type auth_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: auth_permissionOrderByWithRelationInput | auth_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_permissions.
     */
    distinct?: Auth_permissionScalarFieldEnum | Auth_permissionScalarFieldEnum[]
  }

  /**
   * auth_permission findMany
   */
  export type auth_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter, which auth_permissions to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: auth_permissionOrderByWithRelationInput | auth_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    distinct?: Auth_permissionScalarFieldEnum | Auth_permissionScalarFieldEnum[]
  }

  /**
   * auth_permission create
   */
  export type auth_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_permission.
     */
    data: XOR<auth_permissionCreateInput, auth_permissionUncheckedCreateInput>
  }

  /**
   * auth_permission createMany
   */
  export type auth_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_permissions.
     */
    data: auth_permissionCreateManyInput | auth_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_permission createManyAndReturn
   */
  export type auth_permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * The data used to create many auth_permissions.
     */
    data: auth_permissionCreateManyInput | auth_permissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_permission update
   */
  export type auth_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_permission.
     */
    data: XOR<auth_permissionUpdateInput, auth_permissionUncheckedUpdateInput>
    /**
     * Choose, which auth_permission to update.
     */
    where: auth_permissionWhereUniqueInput
  }

  /**
   * auth_permission updateMany
   */
  export type auth_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_permissions.
     */
    data: XOR<auth_permissionUpdateManyMutationInput, auth_permissionUncheckedUpdateManyInput>
    /**
     * Filter which auth_permissions to update
     */
    where?: auth_permissionWhereInput
    /**
     * Limit how many auth_permissions to update.
     */
    limit?: number
  }

  /**
   * auth_permission updateManyAndReturn
   */
  export type auth_permissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * The data used to update auth_permissions.
     */
    data: XOR<auth_permissionUpdateManyMutationInput, auth_permissionUncheckedUpdateManyInput>
    /**
     * Filter which auth_permissions to update
     */
    where?: auth_permissionWhereInput
    /**
     * Limit how many auth_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_permission upsert
   */
  export type auth_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_permission to update in case it exists.
     */
    where: auth_permissionWhereUniqueInput
    /**
     * In case the auth_permission found by the `where` argument doesn't exist, create a new auth_permission with this data.
     */
    create: XOR<auth_permissionCreateInput, auth_permissionUncheckedCreateInput>
    /**
     * In case the auth_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_permissionUpdateInput, auth_permissionUncheckedUpdateInput>
  }

  /**
   * auth_permission delete
   */
  export type auth_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    /**
     * Filter which auth_permission to delete.
     */
    where: auth_permissionWhereUniqueInput
  }

  /**
   * auth_permission deleteMany
   */
  export type auth_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_permissions to delete
     */
    where?: auth_permissionWhereInput
    /**
     * Limit how many auth_permissions to delete.
     */
    limit?: number
  }

  /**
   * auth_permission.auth_group_permissions
   */
  export type auth_permission$auth_group_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_group_permissions
     */
    omit?: auth_group_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_group_permissionsInclude<ExtArgs> | null
    where?: auth_group_permissionsWhereInput
    orderBy?: auth_group_permissionsOrderByWithRelationInput | auth_group_permissionsOrderByWithRelationInput[]
    cursor?: auth_group_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_group_permissionsScalarFieldEnum | Auth_group_permissionsScalarFieldEnum[]
  }

  /**
   * auth_permission.auth_user_user_permissions
   */
  export type auth_permission$auth_user_user_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    where?: auth_user_user_permissionsWhereInput
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    cursor?: auth_user_user_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_user_user_permissionsScalarFieldEnum | Auth_user_user_permissionsScalarFieldEnum[]
  }

  /**
   * auth_permission without action
   */
  export type auth_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
  }


  /**
   * Model auth_user
   */

  export type AggregateAuth_user = {
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  export type Auth_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_userSumAggregateOutputType = {
    id: number | null
  }

  export type Auth_userMinAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userMaxAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userCountAggregateOutputType = {
    id: number
    password: number
    last_login: number
    is_superuser: number
    username: number
    first_name: number
    last_name: number
    email: number
    is_staff: number
    is_active: number
    date_joined: number
    _all: number
  }


  export type Auth_userAvgAggregateInputType = {
    id?: true
  }

  export type Auth_userSumAggregateInputType = {
    id?: true
  }

  export type Auth_userMinAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userMaxAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userCountAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
    _all?: true
  }

  export type Auth_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user to aggregate.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_users
    **/
    _count?: true | Auth_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_userMaxAggregateInputType
  }

  export type GetAuth_userAggregateType<T extends Auth_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user[P]>
      : GetScalarType<T[P], AggregateAuth_user[P]>
  }




  export type auth_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_userWhereInput
    orderBy?: auth_userOrderByWithAggregationInput | auth_userOrderByWithAggregationInput[]
    by: Auth_userScalarFieldEnum[] | Auth_userScalarFieldEnum
    having?: auth_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_userCountAggregateInputType | true
    _avg?: Auth_userAvgAggregateInputType
    _sum?: Auth_userSumAggregateInputType
    _min?: Auth_userMinAggregateInputType
    _max?: Auth_userMaxAggregateInputType
  }

  export type Auth_userGroupByOutputType = {
    id: number
    password: string
    last_login: Date | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  type GetAuth_userGroupByPayload<T extends auth_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
        }
      >
    >


  export type auth_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
    auth_user_groups?: boolean | auth_user$auth_user_groupsArgs<ExtArgs>
    auth_user_user_permissions?: boolean | auth_user$auth_user_user_permissionsArgs<ExtArgs>
    django_admin_log?: boolean | auth_user$django_admin_logArgs<ExtArgs>
    _count?: boolean | Auth_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectScalar = {
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }

  export type auth_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "last_login" | "is_superuser" | "username" | "first_name" | "last_name" | "email" | "is_staff" | "is_active" | "date_joined", ExtArgs["result"]["auth_user"]>
  export type auth_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user_groups?: boolean | auth_user$auth_user_groupsArgs<ExtArgs>
    auth_user_user_permissions?: boolean | auth_user$auth_user_user_permissionsArgs<ExtArgs>
    django_admin_log?: boolean | auth_user$django_admin_logArgs<ExtArgs>
    _count?: boolean | Auth_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type auth_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type auth_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $auth_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_user"
    objects: {
      auth_user_groups: Prisma.$auth_user_groupsPayload<ExtArgs>[]
      auth_user_user_permissions: Prisma.$auth_user_user_permissionsPayload<ExtArgs>[]
      django_admin_log: Prisma.$django_admin_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      password: string
      last_login: Date | null
      is_superuser: boolean
      username: string
      first_name: string
      last_name: string
      email: string
      is_staff: boolean
      is_active: boolean
      date_joined: Date
    }, ExtArgs["result"]["auth_user"]>
    composites: {}
  }

  type auth_userGetPayload<S extends boolean | null | undefined | auth_userDefaultArgs> = $Result.GetResult<Prisma.$auth_userPayload, S>

  type auth_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_userCountAggregateInputType | true
    }

  export interface auth_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_user'], meta: { name: 'auth_user' } }
    /**
     * Find zero or one Auth_user that matches the filter.
     * @param {auth_userFindUniqueArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_userFindUniqueArgs>(args: SelectSubset<T, auth_userFindUniqueArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_userFindUniqueOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_userFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_userFindFirstArgs>(args?: SelectSubset<T, auth_userFindFirstArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_userFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_users
     * const auth_users = await prisma.auth_user.findMany()
     * 
     * // Get first 10 Auth_users
     * const auth_users = await prisma.auth_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_userFindManyArgs>(args?: SelectSubset<T, auth_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_user.
     * @param {auth_userCreateArgs} args - Arguments to create a Auth_user.
     * @example
     * // Create one Auth_user
     * const Auth_user = await prisma.auth_user.create({
     *   data: {
     *     // ... data to create a Auth_user
     *   }
     * })
     * 
     */
    create<T extends auth_userCreateArgs>(args: SelectSubset<T, auth_userCreateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_users.
     * @param {auth_userCreateManyArgs} args - Arguments to create many Auth_users.
     * @example
     * // Create many Auth_users
     * const auth_user = await prisma.auth_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_userCreateManyArgs>(args?: SelectSubset<T, auth_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_users and returns the data saved in the database.
     * @param {auth_userCreateManyAndReturnArgs} args - Arguments to create many Auth_users.
     * @example
     * // Create many Auth_users
     * const auth_user = await prisma.auth_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_users and only return the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_userCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_user.
     * @param {auth_userDeleteArgs} args - Arguments to delete one Auth_user.
     * @example
     * // Delete one Auth_user
     * const Auth_user = await prisma.auth_user.delete({
     *   where: {
     *     // ... filter to delete one Auth_user
     *   }
     * })
     * 
     */
    delete<T extends auth_userDeleteArgs>(args: SelectSubset<T, auth_userDeleteArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_user.
     * @param {auth_userUpdateArgs} args - Arguments to update one Auth_user.
     * @example
     * // Update one Auth_user
     * const auth_user = await prisma.auth_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_userUpdateArgs>(args: SelectSubset<T, auth_userUpdateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_users.
     * @param {auth_userDeleteManyArgs} args - Arguments to filter Auth_users to delete.
     * @example
     * // Delete a few Auth_users
     * const { count } = await prisma.auth_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_userDeleteManyArgs>(args?: SelectSubset<T, auth_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_userUpdateManyArgs>(args: SelectSubset<T, auth_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users and returns the data updated in the database.
     * @param {auth_userUpdateManyAndReturnArgs} args - Arguments to update many Auth_users.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_users and only return the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_userUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_user.
     * @param {auth_userUpsertArgs} args - Arguments to update or create a Auth_user.
     * @example
     * // Update or create a Auth_user
     * const auth_user = await prisma.auth_user.upsert({
     *   create: {
     *     // ... data to create a Auth_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user we want to update
     *   }
     * })
     */
    upsert<T extends auth_userUpsertArgs>(args: SelectSubset<T, auth_userUpsertArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userCountArgs} args - Arguments to filter Auth_users to count.
     * @example
     * // Count the number of Auth_users
     * const count = await prisma.auth_user.count({
     *   where: {
     *     // ... the filter for the Auth_users we want to count
     *   }
     * })
    **/
    count<T extends auth_userCountArgs>(
      args?: Subset<T, auth_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_userAggregateArgs>(args: Subset<T, Auth_userAggregateArgs>): Prisma.PrismaPromise<GetAuth_userAggregateType<T>>

    /**
     * Group by Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_userGroupByArgs['orderBy'] }
        : { orderBy?: auth_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_user model
   */
  readonly fields: auth_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_user_groups<T extends auth_user$auth_user_groupsArgs<ExtArgs> = {}>(args?: Subset<T, auth_user$auth_user_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth_user_user_permissions<T extends auth_user$auth_user_user_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, auth_user$auth_user_user_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    django_admin_log<T extends auth_user$django_admin_logArgs<ExtArgs> = {}>(args?: Subset<T, auth_user$django_admin_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_user model
   */
  interface auth_userFieldRefs {
    readonly id: FieldRef<"auth_user", 'Int'>
    readonly password: FieldRef<"auth_user", 'String'>
    readonly last_login: FieldRef<"auth_user", 'DateTime'>
    readonly is_superuser: FieldRef<"auth_user", 'Boolean'>
    readonly username: FieldRef<"auth_user", 'String'>
    readonly first_name: FieldRef<"auth_user", 'String'>
    readonly last_name: FieldRef<"auth_user", 'String'>
    readonly email: FieldRef<"auth_user", 'String'>
    readonly is_staff: FieldRef<"auth_user", 'Boolean'>
    readonly is_active: FieldRef<"auth_user", 'Boolean'>
    readonly date_joined: FieldRef<"auth_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_user findUnique
   */
  export type auth_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findUniqueOrThrow
   */
  export type auth_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findFirst
   */
  export type auth_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findFirstOrThrow
   */
  export type auth_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findMany
   */
  export type auth_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_users to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user create
   */
  export type auth_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_user.
     */
    data: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
  }

  /**
   * auth_user createMany
   */
  export type auth_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_users.
     */
    data: auth_userCreateManyInput | auth_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_user createManyAndReturn
   */
  export type auth_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data used to create many auth_users.
     */
    data: auth_userCreateManyInput | auth_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_user update
   */
  export type auth_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_user.
     */
    data: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
    /**
     * Choose, which auth_user to update.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user updateMany
   */
  export type auth_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to update.
     */
    limit?: number
  }

  /**
   * auth_user updateManyAndReturn
   */
  export type auth_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to update.
     */
    limit?: number
  }

  /**
   * auth_user upsert
   */
  export type auth_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_user to update in case it exists.
     */
    where: auth_userWhereUniqueInput
    /**
     * In case the auth_user found by the `where` argument doesn't exist, create a new auth_user with this data.
     */
    create: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
    /**
     * In case the auth_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
  }

  /**
   * auth_user delete
   */
  export type auth_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter which auth_user to delete.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user deleteMany
   */
  export type auth_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_users to delete
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to delete.
     */
    limit?: number
  }

  /**
   * auth_user.auth_user_groups
   */
  export type auth_user$auth_user_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    where?: auth_user_groupsWhereInput
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    cursor?: auth_user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_user_groupsScalarFieldEnum | Auth_user_groupsScalarFieldEnum[]
  }

  /**
   * auth_user.auth_user_user_permissions
   */
  export type auth_user$auth_user_user_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    where?: auth_user_user_permissionsWhereInput
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    cursor?: auth_user_user_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_user_user_permissionsScalarFieldEnum | Auth_user_user_permissionsScalarFieldEnum[]
  }

  /**
   * auth_user.django_admin_log
   */
  export type auth_user$django_admin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    where?: django_admin_logWhereInput
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    cursor?: django_admin_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Django_admin_logScalarFieldEnum | Django_admin_logScalarFieldEnum[]
  }

  /**
   * auth_user without action
   */
  export type auth_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
  }


  /**
   * Model auth_user_groups
   */

  export type AggregateAuth_user_groups = {
    _count: Auth_user_groupsCountAggregateOutputType | null
    _avg: Auth_user_groupsAvgAggregateOutputType | null
    _sum: Auth_user_groupsSumAggregateOutputType | null
    _min: Auth_user_groupsMinAggregateOutputType | null
    _max: Auth_user_groupsMaxAggregateOutputType | null
  }

  export type Auth_user_groupsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsSumAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsMinAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsMaxAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsCountAggregateOutputType = {
    id: number
    user_id: number
    group_id: number
    _all: number
  }


  export type Auth_user_groupsAvgAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsSumAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsMinAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsMaxAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsCountAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    _all?: true
  }

  export type Auth_user_groupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user_groups to aggregate.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_user_groups
    **/
    _count?: true | Auth_user_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_user_groupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_user_groupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_user_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_user_groupsMaxAggregateInputType
  }

  export type GetAuth_user_groupsAggregateType<T extends Auth_user_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user_groups[P]>
      : GetScalarType<T[P], AggregateAuth_user_groups[P]>
  }




  export type auth_user_groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_groupsWhereInput
    orderBy?: auth_user_groupsOrderByWithAggregationInput | auth_user_groupsOrderByWithAggregationInput[]
    by: Auth_user_groupsScalarFieldEnum[] | Auth_user_groupsScalarFieldEnum
    having?: auth_user_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_user_groupsCountAggregateInputType | true
    _avg?: Auth_user_groupsAvgAggregateInputType
    _sum?: Auth_user_groupsSumAggregateInputType
    _min?: Auth_user_groupsMinAggregateInputType
    _max?: Auth_user_groupsMaxAggregateInputType
  }

  export type Auth_user_groupsGroupByOutputType = {
    id: bigint
    user_id: number
    group_id: number
    _count: Auth_user_groupsCountAggregateOutputType | null
    _avg: Auth_user_groupsAvgAggregateOutputType | null
    _sum: Auth_user_groupsSumAggregateOutputType | null
    _min: Auth_user_groupsMinAggregateOutputType | null
    _max: Auth_user_groupsMaxAggregateOutputType | null
  }

  type GetAuth_user_groupsGroupByPayload<T extends auth_user_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_user_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_user_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]>
        }
      >
    >


  export type auth_user_groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_groups"]>

  export type auth_user_groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_groups"]>

  export type auth_user_groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_groups"]>

  export type auth_user_groupsSelectScalar = {
    id?: boolean
    user_id?: boolean
    group_id?: boolean
  }

  export type auth_user_groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "group_id", ExtArgs["result"]["auth_user_groups"]>
  export type auth_user_groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type auth_user_groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type auth_user_groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_group?: boolean | auth_groupDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }

  export type $auth_user_groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_user_groups"
    objects: {
      auth_group: Prisma.$auth_groupPayload<ExtArgs>
      auth_user: Prisma.$auth_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: number
      group_id: number
    }, ExtArgs["result"]["auth_user_groups"]>
    composites: {}
  }

  type auth_user_groupsGetPayload<S extends boolean | null | undefined | auth_user_groupsDefaultArgs> = $Result.GetResult<Prisma.$auth_user_groupsPayload, S>

  type auth_user_groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_user_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_user_groupsCountAggregateInputType | true
    }

  export interface auth_user_groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_user_groups'], meta: { name: 'auth_user_groups' } }
    /**
     * Find zero or one Auth_user_groups that matches the filter.
     * @param {auth_user_groupsFindUniqueArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_user_groupsFindUniqueArgs>(args: SelectSubset<T, auth_user_groupsFindUniqueArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_user_groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_user_groupsFindUniqueOrThrowArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_user_groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_user_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindFirstArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_user_groupsFindFirstArgs>(args?: SelectSubset<T, auth_user_groupsFindFirstArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user_groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindFirstOrThrowArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_user_groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_user_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_user_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findMany()
     * 
     * // Get first 10 Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_user_groupsWithIdOnly = await prisma.auth_user_groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_user_groupsFindManyArgs>(args?: SelectSubset<T, auth_user_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_user_groups.
     * @param {auth_user_groupsCreateArgs} args - Arguments to create a Auth_user_groups.
     * @example
     * // Create one Auth_user_groups
     * const Auth_user_groups = await prisma.auth_user_groups.create({
     *   data: {
     *     // ... data to create a Auth_user_groups
     *   }
     * })
     * 
     */
    create<T extends auth_user_groupsCreateArgs>(args: SelectSubset<T, auth_user_groupsCreateArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_user_groups.
     * @param {auth_user_groupsCreateManyArgs} args - Arguments to create many Auth_user_groups.
     * @example
     * // Create many Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_user_groupsCreateManyArgs>(args?: SelectSubset<T, auth_user_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_user_groups and returns the data saved in the database.
     * @param {auth_user_groupsCreateManyAndReturnArgs} args - Arguments to create many Auth_user_groups.
     * @example
     * // Create many Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_user_groups and only return the `id`
     * const auth_user_groupsWithIdOnly = await prisma.auth_user_groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_user_groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_user_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_user_groups.
     * @param {auth_user_groupsDeleteArgs} args - Arguments to delete one Auth_user_groups.
     * @example
     * // Delete one Auth_user_groups
     * const Auth_user_groups = await prisma.auth_user_groups.delete({
     *   where: {
     *     // ... filter to delete one Auth_user_groups
     *   }
     * })
     * 
     */
    delete<T extends auth_user_groupsDeleteArgs>(args: SelectSubset<T, auth_user_groupsDeleteArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_user_groups.
     * @param {auth_user_groupsUpdateArgs} args - Arguments to update one Auth_user_groups.
     * @example
     * // Update one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_user_groupsUpdateArgs>(args: SelectSubset<T, auth_user_groupsUpdateArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_user_groups.
     * @param {auth_user_groupsDeleteManyArgs} args - Arguments to filter Auth_user_groups to delete.
     * @example
     * // Delete a few Auth_user_groups
     * const { count } = await prisma.auth_user_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_user_groupsDeleteManyArgs>(args?: SelectSubset<T, auth_user_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_user_groupsUpdateManyArgs>(args: SelectSubset<T, auth_user_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_groups and returns the data updated in the database.
     * @param {auth_user_groupsUpdateManyAndReturnArgs} args - Arguments to update many Auth_user_groups.
     * @example
     * // Update many Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_user_groups and only return the `id`
     * const auth_user_groupsWithIdOnly = await prisma.auth_user_groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_user_groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_user_groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_user_groups.
     * @param {auth_user_groupsUpsertArgs} args - Arguments to update or create a Auth_user_groups.
     * @example
     * // Update or create a Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.upsert({
     *   create: {
     *     // ... data to create a Auth_user_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user_groups we want to update
     *   }
     * })
     */
    upsert<T extends auth_user_groupsUpsertArgs>(args: SelectSubset<T, auth_user_groupsUpsertArgs<ExtArgs>>): Prisma__auth_user_groupsClient<$Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsCountArgs} args - Arguments to filter Auth_user_groups to count.
     * @example
     * // Count the number of Auth_user_groups
     * const count = await prisma.auth_user_groups.count({
     *   where: {
     *     // ... the filter for the Auth_user_groups we want to count
     *   }
     * })
    **/
    count<T extends auth_user_groupsCountArgs>(
      args?: Subset<T, auth_user_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_user_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_user_groupsAggregateArgs>(args: Subset<T, Auth_user_groupsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_groupsAggregateType<T>>

    /**
     * Group by Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_user_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_user_groupsGroupByArgs['orderBy'] }
        : { orderBy?: auth_user_groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_user_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_user_groups model
   */
  readonly fields: auth_user_groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_user_groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_group<T extends auth_groupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_groupDefaultArgs<ExtArgs>>): Prisma__auth_groupClient<$Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auth_user<T extends auth_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_userDefaultArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_user_groups model
   */
  interface auth_user_groupsFieldRefs {
    readonly id: FieldRef<"auth_user_groups", 'BigInt'>
    readonly user_id: FieldRef<"auth_user_groups", 'Int'>
    readonly group_id: FieldRef<"auth_user_groups", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * auth_user_groups findUnique
   */
  export type auth_user_groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where: auth_user_groupsWhereUniqueInput
  }

  /**
   * auth_user_groups findUniqueOrThrow
   */
  export type auth_user_groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where: auth_user_groupsWhereUniqueInput
  }

  /**
   * auth_user_groups findFirst
   */
  export type auth_user_groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_groups.
     */
    distinct?: Auth_user_groupsScalarFieldEnum | Auth_user_groupsScalarFieldEnum[]
  }

  /**
   * auth_user_groups findFirstOrThrow
   */
  export type auth_user_groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_groups.
     */
    distinct?: Auth_user_groupsScalarFieldEnum | Auth_user_groupsScalarFieldEnum[]
  }

  /**
   * auth_user_groups findMany
   */
  export type auth_user_groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: auth_user_groupsOrderByWithRelationInput | auth_user_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    distinct?: Auth_user_groupsScalarFieldEnum | Auth_user_groupsScalarFieldEnum[]
  }

  /**
   * auth_user_groups create
   */
  export type auth_user_groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_user_groups.
     */
    data: XOR<auth_user_groupsCreateInput, auth_user_groupsUncheckedCreateInput>
  }

  /**
   * auth_user_groups createMany
   */
  export type auth_user_groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_user_groups.
     */
    data: auth_user_groupsCreateManyInput | auth_user_groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_user_groups createManyAndReturn
   */
  export type auth_user_groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * The data used to create many auth_user_groups.
     */
    data: auth_user_groupsCreateManyInput | auth_user_groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_user_groups update
   */
  export type auth_user_groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_user_groups.
     */
    data: XOR<auth_user_groupsUpdateInput, auth_user_groupsUncheckedUpdateInput>
    /**
     * Choose, which auth_user_groups to update.
     */
    where: auth_user_groupsWhereUniqueInput
  }

  /**
   * auth_user_groups updateMany
   */
  export type auth_user_groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_user_groups.
     */
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_groups to update
     */
    where?: auth_user_groupsWhereInput
    /**
     * Limit how many auth_user_groups to update.
     */
    limit?: number
  }

  /**
   * auth_user_groups updateManyAndReturn
   */
  export type auth_user_groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * The data used to update auth_user_groups.
     */
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_groups to update
     */
    where?: auth_user_groupsWhereInput
    /**
     * Limit how many auth_user_groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_user_groups upsert
   */
  export type auth_user_groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_user_groups to update in case it exists.
     */
    where: auth_user_groupsWhereUniqueInput
    /**
     * In case the auth_user_groups found by the `where` argument doesn't exist, create a new auth_user_groups with this data.
     */
    create: XOR<auth_user_groupsCreateInput, auth_user_groupsUncheckedCreateInput>
    /**
     * In case the auth_user_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_user_groupsUpdateInput, auth_user_groupsUncheckedUpdateInput>
  }

  /**
   * auth_user_groups delete
   */
  export type auth_user_groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
    /**
     * Filter which auth_user_groups to delete.
     */
    where: auth_user_groupsWhereUniqueInput
  }

  /**
   * auth_user_groups deleteMany
   */
  export type auth_user_groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user_groups to delete
     */
    where?: auth_user_groupsWhereInput
    /**
     * Limit how many auth_user_groups to delete.
     */
    limit?: number
  }

  /**
   * auth_user_groups without action
   */
  export type auth_user_groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_groups
     */
    omit?: auth_user_groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_groupsInclude<ExtArgs> | null
  }


  /**
   * Model auth_user_user_permissions
   */

  export type AggregateAuth_user_user_permissions = {
    _count: Auth_user_user_permissionsCountAggregateOutputType | null
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null
    _min: Auth_user_user_permissionsMinAggregateOutputType | null
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null
  }

  export type Auth_user_user_permissionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsSumAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsMinAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsMaxAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsCountAggregateOutputType = {
    id: number
    user_id: number
    permission_id: number
    _all: number
  }


  export type Auth_user_user_permissionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsSumAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsMinAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsCountAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
    _all?: true
  }

  export type Auth_user_user_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user_user_permissions to aggregate.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_user_user_permissions
    **/
    _count?: true | Auth_user_user_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_user_user_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_user_user_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_user_user_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_user_user_permissionsMaxAggregateInputType
  }

  export type GetAuth_user_user_permissionsAggregateType<T extends Auth_user_user_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user_user_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user_user_permissions[P]>
      : GetScalarType<T[P], AggregateAuth_user_user_permissions[P]>
  }




  export type auth_user_user_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_user_user_permissionsWhereInput
    orderBy?: auth_user_user_permissionsOrderByWithAggregationInput | auth_user_user_permissionsOrderByWithAggregationInput[]
    by: Auth_user_user_permissionsScalarFieldEnum[] | Auth_user_user_permissionsScalarFieldEnum
    having?: auth_user_user_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_user_user_permissionsCountAggregateInputType | true
    _avg?: Auth_user_user_permissionsAvgAggregateInputType
    _sum?: Auth_user_user_permissionsSumAggregateInputType
    _min?: Auth_user_user_permissionsMinAggregateInputType
    _max?: Auth_user_user_permissionsMaxAggregateInputType
  }

  export type Auth_user_user_permissionsGroupByOutputType = {
    id: bigint
    user_id: number
    permission_id: number
    _count: Auth_user_user_permissionsCountAggregateOutputType | null
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null
    _min: Auth_user_user_permissionsMinAggregateOutputType | null
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null
  }

  type GetAuth_user_user_permissionsGroupByPayload<T extends auth_user_user_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_user_user_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_user_user_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type auth_user_user_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_user_permissions"]>

  export type auth_user_user_permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_user_permissions"]>

  export type auth_user_user_permissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user_user_permissions"]>

  export type auth_user_user_permissionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    permission_id?: boolean
  }

  export type auth_user_user_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "permission_id", ExtArgs["result"]["auth_user_user_permissions"]>
  export type auth_user_user_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type auth_user_user_permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type auth_user_user_permissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | auth_permissionDefaultArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }

  export type $auth_user_user_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_user_user_permissions"
    objects: {
      auth_permission: Prisma.$auth_permissionPayload<ExtArgs>
      auth_user: Prisma.$auth_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: number
      permission_id: number
    }, ExtArgs["result"]["auth_user_user_permissions"]>
    composites: {}
  }

  type auth_user_user_permissionsGetPayload<S extends boolean | null | undefined | auth_user_user_permissionsDefaultArgs> = $Result.GetResult<Prisma.$auth_user_user_permissionsPayload, S>

  type auth_user_user_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_user_user_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_user_user_permissionsCountAggregateInputType | true
    }

  export interface auth_user_user_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_user_user_permissions'], meta: { name: 'auth_user_user_permissions' } }
    /**
     * Find zero or one Auth_user_user_permissions that matches the filter.
     * @param {auth_user_user_permissionsFindUniqueArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_user_user_permissionsFindUniqueArgs>(args: SelectSubset<T, auth_user_user_permissionsFindUniqueArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_user_user_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_user_user_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_user_user_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindFirstArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_user_user_permissionsFindFirstArgs>(args?: SelectSubset<T, auth_user_user_permissionsFindFirstArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user_user_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindFirstOrThrowArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_user_user_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_user_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany()
     * 
     * // Get first 10 Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_user_user_permissionsWithIdOnly = await prisma.auth_user_user_permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_user_user_permissionsFindManyArgs>(args?: SelectSubset<T, auth_user_user_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_user_user_permissions.
     * @param {auth_user_user_permissionsCreateArgs} args - Arguments to create a Auth_user_user_permissions.
     * @example
     * // Create one Auth_user_user_permissions
     * const Auth_user_user_permissions = await prisma.auth_user_user_permissions.create({
     *   data: {
     *     // ... data to create a Auth_user_user_permissions
     *   }
     * })
     * 
     */
    create<T extends auth_user_user_permissionsCreateArgs>(args: SelectSubset<T, auth_user_user_permissionsCreateArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_user_user_permissions.
     * @param {auth_user_user_permissionsCreateManyArgs} args - Arguments to create many Auth_user_user_permissions.
     * @example
     * // Create many Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_user_user_permissionsCreateManyArgs>(args?: SelectSubset<T, auth_user_user_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_user_user_permissions and returns the data saved in the database.
     * @param {auth_user_user_permissionsCreateManyAndReturnArgs} args - Arguments to create many Auth_user_user_permissions.
     * @example
     * // Create many Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_user_user_permissions and only return the `id`
     * const auth_user_user_permissionsWithIdOnly = await prisma.auth_user_user_permissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_user_user_permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_user_user_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_user_user_permissions.
     * @param {auth_user_user_permissionsDeleteArgs} args - Arguments to delete one Auth_user_user_permissions.
     * @example
     * // Delete one Auth_user_user_permissions
     * const Auth_user_user_permissions = await prisma.auth_user_user_permissions.delete({
     *   where: {
     *     // ... filter to delete one Auth_user_user_permissions
     *   }
     * })
     * 
     */
    delete<T extends auth_user_user_permissionsDeleteArgs>(args: SelectSubset<T, auth_user_user_permissionsDeleteArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_user_user_permissions.
     * @param {auth_user_user_permissionsUpdateArgs} args - Arguments to update one Auth_user_user_permissions.
     * @example
     * // Update one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_user_user_permissionsUpdateArgs>(args: SelectSubset<T, auth_user_user_permissionsUpdateArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_user_user_permissions.
     * @param {auth_user_user_permissionsDeleteManyArgs} args - Arguments to filter Auth_user_user_permissions to delete.
     * @example
     * // Delete a few Auth_user_user_permissions
     * const { count } = await prisma.auth_user_user_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_user_user_permissionsDeleteManyArgs>(args?: SelectSubset<T, auth_user_user_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_user_user_permissionsUpdateManyArgs>(args: SelectSubset<T, auth_user_user_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_user_permissions and returns the data updated in the database.
     * @param {auth_user_user_permissionsUpdateManyAndReturnArgs} args - Arguments to update many Auth_user_user_permissions.
     * @example
     * // Update many Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_user_user_permissions and only return the `id`
     * const auth_user_user_permissionsWithIdOnly = await prisma.auth_user_user_permissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_user_user_permissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_user_user_permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_user_user_permissions.
     * @param {auth_user_user_permissionsUpsertArgs} args - Arguments to update or create a Auth_user_user_permissions.
     * @example
     * // Update or create a Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.upsert({
     *   create: {
     *     // ... data to create a Auth_user_user_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user_user_permissions we want to update
     *   }
     * })
     */
    upsert<T extends auth_user_user_permissionsUpsertArgs>(args: SelectSubset<T, auth_user_user_permissionsUpsertArgs<ExtArgs>>): Prisma__auth_user_user_permissionsClient<$Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsCountArgs} args - Arguments to filter Auth_user_user_permissions to count.
     * @example
     * // Count the number of Auth_user_user_permissions
     * const count = await prisma.auth_user_user_permissions.count({
     *   where: {
     *     // ... the filter for the Auth_user_user_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_user_user_permissionsCountArgs>(
      args?: Subset<T, auth_user_user_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_user_user_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_user_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_user_user_permissionsAggregateArgs>(args: Subset<T, Auth_user_user_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_user_permissionsAggregateType<T>>

    /**
     * Group by Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_user_user_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_user_user_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: auth_user_user_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_user_user_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_user_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_user_user_permissions model
   */
  readonly fields: auth_user_user_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user_user_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_user_user_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_permission<T extends auth_permissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_permissionDefaultArgs<ExtArgs>>): Prisma__auth_permissionClient<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auth_user<T extends auth_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_userDefaultArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_user_user_permissions model
   */
  interface auth_user_user_permissionsFieldRefs {
    readonly id: FieldRef<"auth_user_user_permissions", 'BigInt'>
    readonly user_id: FieldRef<"auth_user_user_permissions", 'Int'>
    readonly permission_id: FieldRef<"auth_user_user_permissions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * auth_user_user_permissions findUnique
   */
  export type auth_user_user_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }

  /**
   * auth_user_user_permissions findUniqueOrThrow
   */
  export type auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }

  /**
   * auth_user_user_permissions findFirst
   */
  export type auth_user_user_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_user_permissions.
     */
    distinct?: Auth_user_user_permissionsScalarFieldEnum | Auth_user_user_permissionsScalarFieldEnum[]
  }

  /**
   * auth_user_user_permissions findFirstOrThrow
   */
  export type auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_user_permissions.
     */
    distinct?: Auth_user_user_permissionsScalarFieldEnum | Auth_user_user_permissionsScalarFieldEnum[]
  }

  /**
   * auth_user_user_permissions findMany
   */
  export type auth_user_user_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: auth_user_user_permissionsOrderByWithRelationInput | auth_user_user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    distinct?: Auth_user_user_permissionsScalarFieldEnum | Auth_user_user_permissionsScalarFieldEnum[]
  }

  /**
   * auth_user_user_permissions create
   */
  export type auth_user_user_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsCreateInput, auth_user_user_permissionsUncheckedCreateInput>
  }

  /**
   * auth_user_user_permissions createMany
   */
  export type auth_user_user_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_user_user_permissions.
     */
    data: auth_user_user_permissionsCreateManyInput | auth_user_user_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_user_user_permissions createManyAndReturn
   */
  export type auth_user_user_permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * The data used to create many auth_user_user_permissions.
     */
    data: auth_user_user_permissionsCreateManyInput | auth_user_user_permissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_user_user_permissions update
   */
  export type auth_user_user_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsUpdateInput, auth_user_user_permissionsUncheckedUpdateInput>
    /**
     * Choose, which auth_user_user_permissions to update.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }

  /**
   * auth_user_user_permissions updateMany
   */
  export type auth_user_user_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_user_permissions to update
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * Limit how many auth_user_user_permissions to update.
     */
    limit?: number
  }

  /**
   * auth_user_user_permissions updateManyAndReturn
   */
  export type auth_user_user_permissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * The data used to update auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_user_permissions to update
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * Limit how many auth_user_user_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_user_user_permissions upsert
   */
  export type auth_user_user_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_user_user_permissions to update in case it exists.
     */
    where: auth_user_user_permissionsWhereUniqueInput
    /**
     * In case the auth_user_user_permissions found by the `where` argument doesn't exist, create a new auth_user_user_permissions with this data.
     */
    create: XOR<auth_user_user_permissionsCreateInput, auth_user_user_permissionsUncheckedCreateInput>
    /**
     * In case the auth_user_user_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_user_user_permissionsUpdateInput, auth_user_user_permissionsUncheckedUpdateInput>
  }

  /**
   * auth_user_user_permissions delete
   */
  export type auth_user_user_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
    /**
     * Filter which auth_user_user_permissions to delete.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }

  /**
   * auth_user_user_permissions deleteMany
   */
  export type auth_user_user_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user_user_permissions to delete
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * Limit how many auth_user_user_permissions to delete.
     */
    limit?: number
  }

  /**
   * auth_user_user_permissions without action
   */
  export type auth_user_user_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user_user_permissions
     */
    omit?: auth_user_user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_user_user_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: bigint | null
  }

  export type CustomersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    address: string | null
    registration_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    address: string | null
    registration_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    registration_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    registration_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    registration_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    registration_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: bigint
    name: string
    email: string
    address: string
    registration_date: Date
    created_at: Date
    updated_at: Date
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    registration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    registration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    registration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    registration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "registration_date" | "created_at" | "updated_at", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      address: string
      registration_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'BigInt'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly registration_date: FieldRef<"customers", 'DateTime'>
    readonly created_at: FieldRef<"customers", 'DateTime'>
    readonly updated_at: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.orders
   */
  export type customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model django_admin_log
   */

  export type AggregateDjango_admin_log = {
    _count: Django_admin_logCountAggregateOutputType | null
    _avg: Django_admin_logAvgAggregateOutputType | null
    _sum: Django_admin_logSumAggregateOutputType | null
    _min: Django_admin_logMinAggregateOutputType | null
    _max: Django_admin_logMaxAggregateOutputType | null
  }

  export type Django_admin_logAvgAggregateOutputType = {
    id: number | null
    action_flag: number | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logSumAggregateOutputType = {
    id: number | null
    action_flag: number | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logMinAggregateOutputType = {
    id: number | null
    action_time: Date | null
    object_id: string | null
    object_repr: string | null
    action_flag: number | null
    change_message: string | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logMaxAggregateOutputType = {
    id: number | null
    action_time: Date | null
    object_id: string | null
    object_repr: string | null
    action_flag: number | null
    change_message: string | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logCountAggregateOutputType = {
    id: number
    action_time: number
    object_id: number
    object_repr: number
    action_flag: number
    change_message: number
    content_type_id: number
    user_id: number
    _all: number
  }


  export type Django_admin_logAvgAggregateInputType = {
    id?: true
    action_flag?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logSumAggregateInputType = {
    id?: true
    action_flag?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logMinAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logMaxAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logCountAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
    _all?: true
  }

  export type Django_admin_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_admin_log to aggregate.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_admin_logs
    **/
    _count?: true | Django_admin_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_admin_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_admin_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_admin_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_admin_logMaxAggregateInputType
  }

  export type GetDjango_admin_logAggregateType<T extends Django_admin_logAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_admin_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_admin_log[P]>
      : GetScalarType<T[P], AggregateDjango_admin_log[P]>
  }




  export type django_admin_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_admin_logWhereInput
    orderBy?: django_admin_logOrderByWithAggregationInput | django_admin_logOrderByWithAggregationInput[]
    by: Django_admin_logScalarFieldEnum[] | Django_admin_logScalarFieldEnum
    having?: django_admin_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_admin_logCountAggregateInputType | true
    _avg?: Django_admin_logAvgAggregateInputType
    _sum?: Django_admin_logSumAggregateInputType
    _min?: Django_admin_logMinAggregateInputType
    _max?: Django_admin_logMaxAggregateInputType
  }

  export type Django_admin_logGroupByOutputType = {
    id: number
    action_time: Date
    object_id: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id: number | null
    user_id: number
    _count: Django_admin_logCountAggregateOutputType | null
    _avg: Django_admin_logAvgAggregateOutputType | null
    _sum: Django_admin_logSumAggregateOutputType | null
    _min: Django_admin_logMinAggregateOutputType | null
    _max: Django_admin_logMaxAggregateOutputType | null
  }

  type GetDjango_admin_logGroupByPayload<T extends django_admin_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Django_admin_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_admin_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_admin_logGroupByOutputType[P]>
            : GetScalarType<T[P], Django_admin_logGroupByOutputType[P]>
        }
      >
    >


  export type django_admin_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_time?: boolean
    object_id?: boolean
    object_repr?: boolean
    action_flag?: boolean
    change_message?: boolean
    content_type_id?: boolean
    user_id?: boolean
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["django_admin_log"]>

  export type django_admin_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_time?: boolean
    object_id?: boolean
    object_repr?: boolean
    action_flag?: boolean
    change_message?: boolean
    content_type_id?: boolean
    user_id?: boolean
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["django_admin_log"]>

  export type django_admin_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_time?: boolean
    object_id?: boolean
    object_repr?: boolean
    action_flag?: boolean
    change_message?: boolean
    content_type_id?: boolean
    user_id?: boolean
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["django_admin_log"]>

  export type django_admin_logSelectScalar = {
    id?: boolean
    action_time?: boolean
    object_id?: boolean
    object_repr?: boolean
    action_flag?: boolean
    change_message?: boolean
    content_type_id?: boolean
    user_id?: boolean
  }

  export type django_admin_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action_time" | "object_id" | "object_repr" | "action_flag" | "change_message" | "content_type_id" | "user_id", ExtArgs["result"]["django_admin_log"]>
  export type django_admin_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type django_admin_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type django_admin_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    django_content_type?: boolean | django_admin_log$django_content_typeArgs<ExtArgs>
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }

  export type $django_admin_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "django_admin_log"
    objects: {
      django_content_type: Prisma.$django_content_typePayload<ExtArgs> | null
      auth_user: Prisma.$auth_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action_time: Date
      object_id: string | null
      object_repr: string
      action_flag: number
      change_message: string
      content_type_id: number | null
      user_id: number
    }, ExtArgs["result"]["django_admin_log"]>
    composites: {}
  }

  type django_admin_logGetPayload<S extends boolean | null | undefined | django_admin_logDefaultArgs> = $Result.GetResult<Prisma.$django_admin_logPayload, S>

  type django_admin_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<django_admin_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Django_admin_logCountAggregateInputType | true
    }

  export interface django_admin_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['django_admin_log'], meta: { name: 'django_admin_log' } }
    /**
     * Find zero or one Django_admin_log that matches the filter.
     * @param {django_admin_logFindUniqueArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends django_admin_logFindUniqueArgs>(args: SelectSubset<T, django_admin_logFindUniqueArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Django_admin_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {django_admin_logFindUniqueOrThrowArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends django_admin_logFindUniqueOrThrowArgs>(args: SelectSubset<T, django_admin_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_admin_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindFirstArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends django_admin_logFindFirstArgs>(args?: SelectSubset<T, django_admin_logFindFirstArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_admin_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindFirstOrThrowArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends django_admin_logFindFirstOrThrowArgs>(args?: SelectSubset<T, django_admin_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Django_admin_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_admin_logs
     * const django_admin_logs = await prisma.django_admin_log.findMany()
     * 
     * // Get first 10 Django_admin_logs
     * const django_admin_logs = await prisma.django_admin_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_admin_logWithIdOnly = await prisma.django_admin_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends django_admin_logFindManyArgs>(args?: SelectSubset<T, django_admin_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Django_admin_log.
     * @param {django_admin_logCreateArgs} args - Arguments to create a Django_admin_log.
     * @example
     * // Create one Django_admin_log
     * const Django_admin_log = await prisma.django_admin_log.create({
     *   data: {
     *     // ... data to create a Django_admin_log
     *   }
     * })
     * 
     */
    create<T extends django_admin_logCreateArgs>(args: SelectSubset<T, django_admin_logCreateArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Django_admin_logs.
     * @param {django_admin_logCreateManyArgs} args - Arguments to create many Django_admin_logs.
     * @example
     * // Create many Django_admin_logs
     * const django_admin_log = await prisma.django_admin_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends django_admin_logCreateManyArgs>(args?: SelectSubset<T, django_admin_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Django_admin_logs and returns the data saved in the database.
     * @param {django_admin_logCreateManyAndReturnArgs} args - Arguments to create many Django_admin_logs.
     * @example
     * // Create many Django_admin_logs
     * const django_admin_log = await prisma.django_admin_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Django_admin_logs and only return the `id`
     * const django_admin_logWithIdOnly = await prisma.django_admin_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends django_admin_logCreateManyAndReturnArgs>(args?: SelectSubset<T, django_admin_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Django_admin_log.
     * @param {django_admin_logDeleteArgs} args - Arguments to delete one Django_admin_log.
     * @example
     * // Delete one Django_admin_log
     * const Django_admin_log = await prisma.django_admin_log.delete({
     *   where: {
     *     // ... filter to delete one Django_admin_log
     *   }
     * })
     * 
     */
    delete<T extends django_admin_logDeleteArgs>(args: SelectSubset<T, django_admin_logDeleteArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Django_admin_log.
     * @param {django_admin_logUpdateArgs} args - Arguments to update one Django_admin_log.
     * @example
     * // Update one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends django_admin_logUpdateArgs>(args: SelectSubset<T, django_admin_logUpdateArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Django_admin_logs.
     * @param {django_admin_logDeleteManyArgs} args - Arguments to filter Django_admin_logs to delete.
     * @example
     * // Delete a few Django_admin_logs
     * const { count } = await prisma.django_admin_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends django_admin_logDeleteManyArgs>(args?: SelectSubset<T, django_admin_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_admin_logs
     * const django_admin_log = await prisma.django_admin_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends django_admin_logUpdateManyArgs>(args: SelectSubset<T, django_admin_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_admin_logs and returns the data updated in the database.
     * @param {django_admin_logUpdateManyAndReturnArgs} args - Arguments to update many Django_admin_logs.
     * @example
     * // Update many Django_admin_logs
     * const django_admin_log = await prisma.django_admin_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Django_admin_logs and only return the `id`
     * const django_admin_logWithIdOnly = await prisma.django_admin_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends django_admin_logUpdateManyAndReturnArgs>(args: SelectSubset<T, django_admin_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Django_admin_log.
     * @param {django_admin_logUpsertArgs} args - Arguments to update or create a Django_admin_log.
     * @example
     * // Update or create a Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.upsert({
     *   create: {
     *     // ... data to create a Django_admin_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_admin_log we want to update
     *   }
     * })
     */
    upsert<T extends django_admin_logUpsertArgs>(args: SelectSubset<T, django_admin_logUpsertArgs<ExtArgs>>): Prisma__django_admin_logClient<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Django_admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logCountArgs} args - Arguments to filter Django_admin_logs to count.
     * @example
     * // Count the number of Django_admin_logs
     * const count = await prisma.django_admin_log.count({
     *   where: {
     *     // ... the filter for the Django_admin_logs we want to count
     *   }
     * })
    **/
    count<T extends django_admin_logCountArgs>(
      args?: Subset<T, django_admin_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_admin_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_admin_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Django_admin_logAggregateArgs>(args: Subset<T, Django_admin_logAggregateArgs>): Prisma.PrismaPromise<GetDjango_admin_logAggregateType<T>>

    /**
     * Group by Django_admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends django_admin_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: django_admin_logGroupByArgs['orderBy'] }
        : { orderBy?: django_admin_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, django_admin_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_admin_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the django_admin_log model
   */
  readonly fields: django_admin_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for django_admin_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__django_admin_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    django_content_type<T extends django_admin_log$django_content_typeArgs<ExtArgs> = {}>(args?: Subset<T, django_admin_log$django_content_typeArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auth_user<T extends auth_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_userDefaultArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the django_admin_log model
   */
  interface django_admin_logFieldRefs {
    readonly id: FieldRef<"django_admin_log", 'Int'>
    readonly action_time: FieldRef<"django_admin_log", 'DateTime'>
    readonly object_id: FieldRef<"django_admin_log", 'String'>
    readonly object_repr: FieldRef<"django_admin_log", 'String'>
    readonly action_flag: FieldRef<"django_admin_log", 'Int'>
    readonly change_message: FieldRef<"django_admin_log", 'String'>
    readonly content_type_id: FieldRef<"django_admin_log", 'Int'>
    readonly user_id: FieldRef<"django_admin_log", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * django_admin_log findUnique
   */
  export type django_admin_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where: django_admin_logWhereUniqueInput
  }

  /**
   * django_admin_log findUniqueOrThrow
   */
  export type django_admin_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where: django_admin_logWhereUniqueInput
  }

  /**
   * django_admin_log findFirst
   */
  export type django_admin_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_admin_logs.
     */
    distinct?: Django_admin_logScalarFieldEnum | Django_admin_logScalarFieldEnum[]
  }

  /**
   * django_admin_log findFirstOrThrow
   */
  export type django_admin_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_admin_logs.
     */
    distinct?: Django_admin_logScalarFieldEnum | Django_admin_logScalarFieldEnum[]
  }

  /**
   * django_admin_log findMany
   */
  export type django_admin_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter, which django_admin_logs to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    distinct?: Django_admin_logScalarFieldEnum | Django_admin_logScalarFieldEnum[]
  }

  /**
   * django_admin_log create
   */
  export type django_admin_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * The data needed to create a django_admin_log.
     */
    data: XOR<django_admin_logCreateInput, django_admin_logUncheckedCreateInput>
  }

  /**
   * django_admin_log createMany
   */
  export type django_admin_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many django_admin_logs.
     */
    data: django_admin_logCreateManyInput | django_admin_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_admin_log createManyAndReturn
   */
  export type django_admin_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * The data used to create many django_admin_logs.
     */
    data: django_admin_logCreateManyInput | django_admin_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * django_admin_log update
   */
  export type django_admin_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * The data needed to update a django_admin_log.
     */
    data: XOR<django_admin_logUpdateInput, django_admin_logUncheckedUpdateInput>
    /**
     * Choose, which django_admin_log to update.
     */
    where: django_admin_logWhereUniqueInput
  }

  /**
   * django_admin_log updateMany
   */
  export type django_admin_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update django_admin_logs.
     */
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyInput>
    /**
     * Filter which django_admin_logs to update
     */
    where?: django_admin_logWhereInput
    /**
     * Limit how many django_admin_logs to update.
     */
    limit?: number
  }

  /**
   * django_admin_log updateManyAndReturn
   */
  export type django_admin_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * The data used to update django_admin_logs.
     */
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyInput>
    /**
     * Filter which django_admin_logs to update
     */
    where?: django_admin_logWhereInput
    /**
     * Limit how many django_admin_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * django_admin_log upsert
   */
  export type django_admin_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * The filter to search for the django_admin_log to update in case it exists.
     */
    where: django_admin_logWhereUniqueInput
    /**
     * In case the django_admin_log found by the `where` argument doesn't exist, create a new django_admin_log with this data.
     */
    create: XOR<django_admin_logCreateInput, django_admin_logUncheckedCreateInput>
    /**
     * In case the django_admin_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_admin_logUpdateInput, django_admin_logUncheckedUpdateInput>
  }

  /**
   * django_admin_log delete
   */
  export type django_admin_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    /**
     * Filter which django_admin_log to delete.
     */
    where: django_admin_logWhereUniqueInput
  }

  /**
   * django_admin_log deleteMany
   */
  export type django_admin_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_admin_logs to delete
     */
    where?: django_admin_logWhereInput
    /**
     * Limit how many django_admin_logs to delete.
     */
    limit?: number
  }

  /**
   * django_admin_log.django_content_type
   */
  export type django_admin_log$django_content_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    where?: django_content_typeWhereInput
  }

  /**
   * django_admin_log without action
   */
  export type django_admin_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
  }


  /**
   * Model django_content_type
   */

  export type AggregateDjango_content_type = {
    _count: Django_content_typeCountAggregateOutputType | null
    _avg: Django_content_typeAvgAggregateOutputType | null
    _sum: Django_content_typeSumAggregateOutputType | null
    _min: Django_content_typeMinAggregateOutputType | null
    _max: Django_content_typeMaxAggregateOutputType | null
  }

  export type Django_content_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Django_content_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Django_content_typeMinAggregateOutputType = {
    id: number | null
    app_label: string | null
    model: string | null
  }

  export type Django_content_typeMaxAggregateOutputType = {
    id: number | null
    app_label: string | null
    model: string | null
  }

  export type Django_content_typeCountAggregateOutputType = {
    id: number
    app_label: number
    model: number
    _all: number
  }


  export type Django_content_typeAvgAggregateInputType = {
    id?: true
  }

  export type Django_content_typeSumAggregateInputType = {
    id?: true
  }

  export type Django_content_typeMinAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
  }

  export type Django_content_typeMaxAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
  }

  export type Django_content_typeCountAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
    _all?: true
  }

  export type Django_content_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_content_type to aggregate.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: django_content_typeOrderByWithRelationInput | django_content_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_content_types
    **/
    _count?: true | Django_content_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_content_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_content_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_content_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_content_typeMaxAggregateInputType
  }

  export type GetDjango_content_typeAggregateType<T extends Django_content_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_content_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_content_type[P]>
      : GetScalarType<T[P], AggregateDjango_content_type[P]>
  }




  export type django_content_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_content_typeWhereInput
    orderBy?: django_content_typeOrderByWithAggregationInput | django_content_typeOrderByWithAggregationInput[]
    by: Django_content_typeScalarFieldEnum[] | Django_content_typeScalarFieldEnum
    having?: django_content_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_content_typeCountAggregateInputType | true
    _avg?: Django_content_typeAvgAggregateInputType
    _sum?: Django_content_typeSumAggregateInputType
    _min?: Django_content_typeMinAggregateInputType
    _max?: Django_content_typeMaxAggregateInputType
  }

  export type Django_content_typeGroupByOutputType = {
    id: number
    app_label: string
    model: string
    _count: Django_content_typeCountAggregateOutputType | null
    _avg: Django_content_typeAvgAggregateOutputType | null
    _sum: Django_content_typeSumAggregateOutputType | null
    _min: Django_content_typeMinAggregateOutputType | null
    _max: Django_content_typeMaxAggregateOutputType | null
  }

  type GetDjango_content_typeGroupByPayload<T extends django_content_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Django_content_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_content_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_content_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Django_content_typeGroupByOutputType[P]>
        }
      >
    >


  export type django_content_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_label?: boolean
    model?: boolean
    auth_permission?: boolean | django_content_type$auth_permissionArgs<ExtArgs>
    django_admin_log?: boolean | django_content_type$django_admin_logArgs<ExtArgs>
    _count?: boolean | Django_content_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["django_content_type"]>

  export type django_content_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_label?: boolean
    model?: boolean
  }, ExtArgs["result"]["django_content_type"]>

  export type django_content_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_label?: boolean
    model?: boolean
  }, ExtArgs["result"]["django_content_type"]>

  export type django_content_typeSelectScalar = {
    id?: boolean
    app_label?: boolean
    model?: boolean
  }

  export type django_content_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app_label" | "model", ExtArgs["result"]["django_content_type"]>
  export type django_content_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_permission?: boolean | django_content_type$auth_permissionArgs<ExtArgs>
    django_admin_log?: boolean | django_content_type$django_admin_logArgs<ExtArgs>
    _count?: boolean | Django_content_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type django_content_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type django_content_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $django_content_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "django_content_type"
    objects: {
      auth_permission: Prisma.$auth_permissionPayload<ExtArgs>[]
      django_admin_log: Prisma.$django_admin_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      app_label: string
      model: string
    }, ExtArgs["result"]["django_content_type"]>
    composites: {}
  }

  type django_content_typeGetPayload<S extends boolean | null | undefined | django_content_typeDefaultArgs> = $Result.GetResult<Prisma.$django_content_typePayload, S>

  type django_content_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<django_content_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Django_content_typeCountAggregateInputType | true
    }

  export interface django_content_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['django_content_type'], meta: { name: 'django_content_type' } }
    /**
     * Find zero or one Django_content_type that matches the filter.
     * @param {django_content_typeFindUniqueArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends django_content_typeFindUniqueArgs>(args: SelectSubset<T, django_content_typeFindUniqueArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Django_content_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {django_content_typeFindUniqueOrThrowArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends django_content_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, django_content_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_content_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindFirstArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends django_content_typeFindFirstArgs>(args?: SelectSubset<T, django_content_typeFindFirstArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_content_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindFirstOrThrowArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends django_content_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, django_content_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Django_content_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_content_types
     * const django_content_types = await prisma.django_content_type.findMany()
     * 
     * // Get first 10 Django_content_types
     * const django_content_types = await prisma.django_content_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_content_typeWithIdOnly = await prisma.django_content_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends django_content_typeFindManyArgs>(args?: SelectSubset<T, django_content_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Django_content_type.
     * @param {django_content_typeCreateArgs} args - Arguments to create a Django_content_type.
     * @example
     * // Create one Django_content_type
     * const Django_content_type = await prisma.django_content_type.create({
     *   data: {
     *     // ... data to create a Django_content_type
     *   }
     * })
     * 
     */
    create<T extends django_content_typeCreateArgs>(args: SelectSubset<T, django_content_typeCreateArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Django_content_types.
     * @param {django_content_typeCreateManyArgs} args - Arguments to create many Django_content_types.
     * @example
     * // Create many Django_content_types
     * const django_content_type = await prisma.django_content_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends django_content_typeCreateManyArgs>(args?: SelectSubset<T, django_content_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Django_content_types and returns the data saved in the database.
     * @param {django_content_typeCreateManyAndReturnArgs} args - Arguments to create many Django_content_types.
     * @example
     * // Create many Django_content_types
     * const django_content_type = await prisma.django_content_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Django_content_types and only return the `id`
     * const django_content_typeWithIdOnly = await prisma.django_content_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends django_content_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, django_content_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Django_content_type.
     * @param {django_content_typeDeleteArgs} args - Arguments to delete one Django_content_type.
     * @example
     * // Delete one Django_content_type
     * const Django_content_type = await prisma.django_content_type.delete({
     *   where: {
     *     // ... filter to delete one Django_content_type
     *   }
     * })
     * 
     */
    delete<T extends django_content_typeDeleteArgs>(args: SelectSubset<T, django_content_typeDeleteArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Django_content_type.
     * @param {django_content_typeUpdateArgs} args - Arguments to update one Django_content_type.
     * @example
     * // Update one Django_content_type
     * const django_content_type = await prisma.django_content_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends django_content_typeUpdateArgs>(args: SelectSubset<T, django_content_typeUpdateArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Django_content_types.
     * @param {django_content_typeDeleteManyArgs} args - Arguments to filter Django_content_types to delete.
     * @example
     * // Delete a few Django_content_types
     * const { count } = await prisma.django_content_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends django_content_typeDeleteManyArgs>(args?: SelectSubset<T, django_content_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_content_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_content_types
     * const django_content_type = await prisma.django_content_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends django_content_typeUpdateManyArgs>(args: SelectSubset<T, django_content_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_content_types and returns the data updated in the database.
     * @param {django_content_typeUpdateManyAndReturnArgs} args - Arguments to update many Django_content_types.
     * @example
     * // Update many Django_content_types
     * const django_content_type = await prisma.django_content_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Django_content_types and only return the `id`
     * const django_content_typeWithIdOnly = await prisma.django_content_type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends django_content_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, django_content_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Django_content_type.
     * @param {django_content_typeUpsertArgs} args - Arguments to update or create a Django_content_type.
     * @example
     * // Update or create a Django_content_type
     * const django_content_type = await prisma.django_content_type.upsert({
     *   create: {
     *     // ... data to create a Django_content_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_content_type we want to update
     *   }
     * })
     */
    upsert<T extends django_content_typeUpsertArgs>(args: SelectSubset<T, django_content_typeUpsertArgs<ExtArgs>>): Prisma__django_content_typeClient<$Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Django_content_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeCountArgs} args - Arguments to filter Django_content_types to count.
     * @example
     * // Count the number of Django_content_types
     * const count = await prisma.django_content_type.count({
     *   where: {
     *     // ... the filter for the Django_content_types we want to count
     *   }
     * })
    **/
    count<T extends django_content_typeCountArgs>(
      args?: Subset<T, django_content_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_content_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_content_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_content_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Django_content_typeAggregateArgs>(args: Subset<T, Django_content_typeAggregateArgs>): Prisma.PrismaPromise<GetDjango_content_typeAggregateType<T>>

    /**
     * Group by Django_content_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends django_content_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: django_content_typeGroupByArgs['orderBy'] }
        : { orderBy?: django_content_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, django_content_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_content_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the django_content_type model
   */
  readonly fields: django_content_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for django_content_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__django_content_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_permission<T extends django_content_type$auth_permissionArgs<ExtArgs> = {}>(args?: Subset<T, django_content_type$auth_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    django_admin_log<T extends django_content_type$django_admin_logArgs<ExtArgs> = {}>(args?: Subset<T, django_content_type$django_admin_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the django_content_type model
   */
  interface django_content_typeFieldRefs {
    readonly id: FieldRef<"django_content_type", 'Int'>
    readonly app_label: FieldRef<"django_content_type", 'String'>
    readonly model: FieldRef<"django_content_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * django_content_type findUnique
   */
  export type django_content_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where: django_content_typeWhereUniqueInput
  }

  /**
   * django_content_type findUniqueOrThrow
   */
  export type django_content_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where: django_content_typeWhereUniqueInput
  }

  /**
   * django_content_type findFirst
   */
  export type django_content_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: django_content_typeOrderByWithRelationInput | django_content_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_content_types.
     */
    distinct?: Django_content_typeScalarFieldEnum | Django_content_typeScalarFieldEnum[]
  }

  /**
   * django_content_type findFirstOrThrow
   */
  export type django_content_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: django_content_typeOrderByWithRelationInput | django_content_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_content_types.
     */
    distinct?: Django_content_typeScalarFieldEnum | Django_content_typeScalarFieldEnum[]
  }

  /**
   * django_content_type findMany
   */
  export type django_content_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter, which django_content_types to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: django_content_typeOrderByWithRelationInput | django_content_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    distinct?: Django_content_typeScalarFieldEnum | Django_content_typeScalarFieldEnum[]
  }

  /**
   * django_content_type create
   */
  export type django_content_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a django_content_type.
     */
    data: XOR<django_content_typeCreateInput, django_content_typeUncheckedCreateInput>
  }

  /**
   * django_content_type createMany
   */
  export type django_content_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many django_content_types.
     */
    data: django_content_typeCreateManyInput | django_content_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_content_type createManyAndReturn
   */
  export type django_content_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * The data used to create many django_content_types.
     */
    data: django_content_typeCreateManyInput | django_content_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_content_type update
   */
  export type django_content_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a django_content_type.
     */
    data: XOR<django_content_typeUpdateInput, django_content_typeUncheckedUpdateInput>
    /**
     * Choose, which django_content_type to update.
     */
    where: django_content_typeWhereUniqueInput
  }

  /**
   * django_content_type updateMany
   */
  export type django_content_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update django_content_types.
     */
    data: XOR<django_content_typeUpdateManyMutationInput, django_content_typeUncheckedUpdateManyInput>
    /**
     * Filter which django_content_types to update
     */
    where?: django_content_typeWhereInput
    /**
     * Limit how many django_content_types to update.
     */
    limit?: number
  }

  /**
   * django_content_type updateManyAndReturn
   */
  export type django_content_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * The data used to update django_content_types.
     */
    data: XOR<django_content_typeUpdateManyMutationInput, django_content_typeUncheckedUpdateManyInput>
    /**
     * Filter which django_content_types to update
     */
    where?: django_content_typeWhereInput
    /**
     * Limit how many django_content_types to update.
     */
    limit?: number
  }

  /**
   * django_content_type upsert
   */
  export type django_content_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the django_content_type to update in case it exists.
     */
    where: django_content_typeWhereUniqueInput
    /**
     * In case the django_content_type found by the `where` argument doesn't exist, create a new django_content_type with this data.
     */
    create: XOR<django_content_typeCreateInput, django_content_typeUncheckedCreateInput>
    /**
     * In case the django_content_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_content_typeUpdateInput, django_content_typeUncheckedUpdateInput>
  }

  /**
   * django_content_type delete
   */
  export type django_content_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
    /**
     * Filter which django_content_type to delete.
     */
    where: django_content_typeWhereUniqueInput
  }

  /**
   * django_content_type deleteMany
   */
  export type django_content_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_content_types to delete
     */
    where?: django_content_typeWhereInput
    /**
     * Limit how many django_content_types to delete.
     */
    limit?: number
  }

  /**
   * django_content_type.auth_permission
   */
  export type django_content_type$auth_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_permission
     */
    omit?: auth_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_permissionInclude<ExtArgs> | null
    where?: auth_permissionWhereInput
    orderBy?: auth_permissionOrderByWithRelationInput | auth_permissionOrderByWithRelationInput[]
    cursor?: auth_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_permissionScalarFieldEnum | Auth_permissionScalarFieldEnum[]
  }

  /**
   * django_content_type.django_admin_log
   */
  export type django_content_type$django_admin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_admin_log
     */
    omit?: django_admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_admin_logInclude<ExtArgs> | null
    where?: django_admin_logWhereInput
    orderBy?: django_admin_logOrderByWithRelationInput | django_admin_logOrderByWithRelationInput[]
    cursor?: django_admin_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Django_admin_logScalarFieldEnum | Django_admin_logScalarFieldEnum[]
  }

  /**
   * django_content_type without action
   */
  export type django_content_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_content_type
     */
    omit?: django_content_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: django_content_typeInclude<ExtArgs> | null
  }


  /**
   * Model django_migrations
   */

  export type AggregateDjango_migrations = {
    _count: Django_migrationsCountAggregateOutputType | null
    _avg: Django_migrationsAvgAggregateOutputType | null
    _sum: Django_migrationsSumAggregateOutputType | null
    _min: Django_migrationsMinAggregateOutputType | null
    _max: Django_migrationsMaxAggregateOutputType | null
  }

  export type Django_migrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Django_migrationsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Django_migrationsMinAggregateOutputType = {
    id: bigint | null
    app: string | null
    name: string | null
    applied: Date | null
  }

  export type Django_migrationsMaxAggregateOutputType = {
    id: bigint | null
    app: string | null
    name: string | null
    applied: Date | null
  }

  export type Django_migrationsCountAggregateOutputType = {
    id: number
    app: number
    name: number
    applied: number
    _all: number
  }


  export type Django_migrationsAvgAggregateInputType = {
    id?: true
  }

  export type Django_migrationsSumAggregateInputType = {
    id?: true
  }

  export type Django_migrationsMinAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
  }

  export type Django_migrationsMaxAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
  }

  export type Django_migrationsCountAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
    _all?: true
  }

  export type Django_migrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_migrations to aggregate.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: django_migrationsOrderByWithRelationInput | django_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_migrations
    **/
    _count?: true | Django_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_migrationsMaxAggregateInputType
  }

  export type GetDjango_migrationsAggregateType<T extends Django_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_migrations[P]>
      : GetScalarType<T[P], AggregateDjango_migrations[P]>
  }




  export type django_migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_migrationsWhereInput
    orderBy?: django_migrationsOrderByWithAggregationInput | django_migrationsOrderByWithAggregationInput[]
    by: Django_migrationsScalarFieldEnum[] | Django_migrationsScalarFieldEnum
    having?: django_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_migrationsCountAggregateInputType | true
    _avg?: Django_migrationsAvgAggregateInputType
    _sum?: Django_migrationsSumAggregateInputType
    _min?: Django_migrationsMinAggregateInputType
    _max?: Django_migrationsMaxAggregateInputType
  }

  export type Django_migrationsGroupByOutputType = {
    id: bigint
    app: string
    name: string
    applied: Date
    _count: Django_migrationsCountAggregateOutputType | null
    _avg: Django_migrationsAvgAggregateOutputType | null
    _sum: Django_migrationsSumAggregateOutputType | null
    _min: Django_migrationsMinAggregateOutputType | null
    _max: Django_migrationsMaxAggregateOutputType | null
  }

  type GetDjango_migrationsGroupByPayload<T extends django_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Django_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Django_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type django_migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app?: boolean
    name?: boolean
    applied?: boolean
  }, ExtArgs["result"]["django_migrations"]>

  export type django_migrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app?: boolean
    name?: boolean
    applied?: boolean
  }, ExtArgs["result"]["django_migrations"]>

  export type django_migrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app?: boolean
    name?: boolean
    applied?: boolean
  }, ExtArgs["result"]["django_migrations"]>

  export type django_migrationsSelectScalar = {
    id?: boolean
    app?: boolean
    name?: boolean
    applied?: boolean
  }

  export type django_migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app" | "name" | "applied", ExtArgs["result"]["django_migrations"]>

  export type $django_migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "django_migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      app: string
      name: string
      applied: Date
    }, ExtArgs["result"]["django_migrations"]>
    composites: {}
  }

  type django_migrationsGetPayload<S extends boolean | null | undefined | django_migrationsDefaultArgs> = $Result.GetResult<Prisma.$django_migrationsPayload, S>

  type django_migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<django_migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Django_migrationsCountAggregateInputType | true
    }

  export interface django_migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['django_migrations'], meta: { name: 'django_migrations' } }
    /**
     * Find zero or one Django_migrations that matches the filter.
     * @param {django_migrationsFindUniqueArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends django_migrationsFindUniqueArgs>(args: SelectSubset<T, django_migrationsFindUniqueArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Django_migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {django_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends django_migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, django_migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindFirstArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends django_migrationsFindFirstArgs>(args?: SelectSubset<T, django_migrationsFindFirstArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindFirstOrThrowArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends django_migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, django_migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Django_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_migrations
     * const django_migrations = await prisma.django_migrations.findMany()
     * 
     * // Get first 10 Django_migrations
     * const django_migrations = await prisma.django_migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_migrationsWithIdOnly = await prisma.django_migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends django_migrationsFindManyArgs>(args?: SelectSubset<T, django_migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Django_migrations.
     * @param {django_migrationsCreateArgs} args - Arguments to create a Django_migrations.
     * @example
     * // Create one Django_migrations
     * const Django_migrations = await prisma.django_migrations.create({
     *   data: {
     *     // ... data to create a Django_migrations
     *   }
     * })
     * 
     */
    create<T extends django_migrationsCreateArgs>(args: SelectSubset<T, django_migrationsCreateArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Django_migrations.
     * @param {django_migrationsCreateManyArgs} args - Arguments to create many Django_migrations.
     * @example
     * // Create many Django_migrations
     * const django_migrations = await prisma.django_migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends django_migrationsCreateManyArgs>(args?: SelectSubset<T, django_migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Django_migrations and returns the data saved in the database.
     * @param {django_migrationsCreateManyAndReturnArgs} args - Arguments to create many Django_migrations.
     * @example
     * // Create many Django_migrations
     * const django_migrations = await prisma.django_migrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Django_migrations and only return the `id`
     * const django_migrationsWithIdOnly = await prisma.django_migrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends django_migrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, django_migrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Django_migrations.
     * @param {django_migrationsDeleteArgs} args - Arguments to delete one Django_migrations.
     * @example
     * // Delete one Django_migrations
     * const Django_migrations = await prisma.django_migrations.delete({
     *   where: {
     *     // ... filter to delete one Django_migrations
     *   }
     * })
     * 
     */
    delete<T extends django_migrationsDeleteArgs>(args: SelectSubset<T, django_migrationsDeleteArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Django_migrations.
     * @param {django_migrationsUpdateArgs} args - Arguments to update one Django_migrations.
     * @example
     * // Update one Django_migrations
     * const django_migrations = await prisma.django_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends django_migrationsUpdateArgs>(args: SelectSubset<T, django_migrationsUpdateArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Django_migrations.
     * @param {django_migrationsDeleteManyArgs} args - Arguments to filter Django_migrations to delete.
     * @example
     * // Delete a few Django_migrations
     * const { count } = await prisma.django_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends django_migrationsDeleteManyArgs>(args?: SelectSubset<T, django_migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_migrations
     * const django_migrations = await prisma.django_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends django_migrationsUpdateManyArgs>(args: SelectSubset<T, django_migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_migrations and returns the data updated in the database.
     * @param {django_migrationsUpdateManyAndReturnArgs} args - Arguments to update many Django_migrations.
     * @example
     * // Update many Django_migrations
     * const django_migrations = await prisma.django_migrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Django_migrations and only return the `id`
     * const django_migrationsWithIdOnly = await prisma.django_migrations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends django_migrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, django_migrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Django_migrations.
     * @param {django_migrationsUpsertArgs} args - Arguments to update or create a Django_migrations.
     * @example
     * // Update or create a Django_migrations
     * const django_migrations = await prisma.django_migrations.upsert({
     *   create: {
     *     // ... data to create a Django_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_migrations we want to update
     *   }
     * })
     */
    upsert<T extends django_migrationsUpsertArgs>(args: SelectSubset<T, django_migrationsUpsertArgs<ExtArgs>>): Prisma__django_migrationsClient<$Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsCountArgs} args - Arguments to filter Django_migrations to count.
     * @example
     * // Count the number of Django_migrations
     * const count = await prisma.django_migrations.count({
     *   where: {
     *     // ... the filter for the Django_migrations we want to count
     *   }
     * })
    **/
    count<T extends django_migrationsCountArgs>(
      args?: Subset<T, django_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Django_migrationsAggregateArgs>(args: Subset<T, Django_migrationsAggregateArgs>): Prisma.PrismaPromise<GetDjango_migrationsAggregateType<T>>

    /**
     * Group by Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends django_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: django_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: django_migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, django_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the django_migrations model
   */
  readonly fields: django_migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for django_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__django_migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the django_migrations model
   */
  interface django_migrationsFieldRefs {
    readonly id: FieldRef<"django_migrations", 'BigInt'>
    readonly app: FieldRef<"django_migrations", 'String'>
    readonly name: FieldRef<"django_migrations", 'String'>
    readonly applied: FieldRef<"django_migrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * django_migrations findUnique
   */
  export type django_migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where: django_migrationsWhereUniqueInput
  }

  /**
   * django_migrations findUniqueOrThrow
   */
  export type django_migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where: django_migrationsWhereUniqueInput
  }

  /**
   * django_migrations findFirst
   */
  export type django_migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: django_migrationsOrderByWithRelationInput | django_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_migrations.
     */
    distinct?: Django_migrationsScalarFieldEnum | Django_migrationsScalarFieldEnum[]
  }

  /**
   * django_migrations findFirstOrThrow
   */
  export type django_migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: django_migrationsOrderByWithRelationInput | django_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_migrations.
     */
    distinct?: Django_migrationsScalarFieldEnum | Django_migrationsScalarFieldEnum[]
  }

  /**
   * django_migrations findMany
   */
  export type django_migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: django_migrationsOrderByWithRelationInput | django_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    distinct?: Django_migrationsScalarFieldEnum | Django_migrationsScalarFieldEnum[]
  }

  /**
   * django_migrations create
   */
  export type django_migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a django_migrations.
     */
    data: XOR<django_migrationsCreateInput, django_migrationsUncheckedCreateInput>
  }

  /**
   * django_migrations createMany
   */
  export type django_migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many django_migrations.
     */
    data: django_migrationsCreateManyInput | django_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_migrations createManyAndReturn
   */
  export type django_migrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * The data used to create many django_migrations.
     */
    data: django_migrationsCreateManyInput | django_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_migrations update
   */
  export type django_migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a django_migrations.
     */
    data: XOR<django_migrationsUpdateInput, django_migrationsUncheckedUpdateInput>
    /**
     * Choose, which django_migrations to update.
     */
    where: django_migrationsWhereUniqueInput
  }

  /**
   * django_migrations updateMany
   */
  export type django_migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update django_migrations.
     */
    data: XOR<django_migrationsUpdateManyMutationInput, django_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which django_migrations to update
     */
    where?: django_migrationsWhereInput
    /**
     * Limit how many django_migrations to update.
     */
    limit?: number
  }

  /**
   * django_migrations updateManyAndReturn
   */
  export type django_migrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * The data used to update django_migrations.
     */
    data: XOR<django_migrationsUpdateManyMutationInput, django_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which django_migrations to update
     */
    where?: django_migrationsWhereInput
    /**
     * Limit how many django_migrations to update.
     */
    limit?: number
  }

  /**
   * django_migrations upsert
   */
  export type django_migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the django_migrations to update in case it exists.
     */
    where: django_migrationsWhereUniqueInput
    /**
     * In case the django_migrations found by the `where` argument doesn't exist, create a new django_migrations with this data.
     */
    create: XOR<django_migrationsCreateInput, django_migrationsUncheckedCreateInput>
    /**
     * In case the django_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_migrationsUpdateInput, django_migrationsUncheckedUpdateInput>
  }

  /**
   * django_migrations delete
   */
  export type django_migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
    /**
     * Filter which django_migrations to delete.
     */
    where: django_migrationsWhereUniqueInput
  }

  /**
   * django_migrations deleteMany
   */
  export type django_migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_migrations to delete
     */
    where?: django_migrationsWhereInput
    /**
     * Limit how many django_migrations to delete.
     */
    limit?: number
  }

  /**
   * django_migrations without action
   */
  export type django_migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_migrations
     */
    omit?: django_migrationsOmit<ExtArgs> | null
  }


  /**
   * Model django_session
   */

  export type AggregateDjango_session = {
    _count: Django_sessionCountAggregateOutputType | null
    _min: Django_sessionMinAggregateOutputType | null
    _max: Django_sessionMaxAggregateOutputType | null
  }

  export type Django_sessionMinAggregateOutputType = {
    session_key: string | null
    session_data: string | null
    expire_date: Date | null
  }

  export type Django_sessionMaxAggregateOutputType = {
    session_key: string | null
    session_data: string | null
    expire_date: Date | null
  }

  export type Django_sessionCountAggregateOutputType = {
    session_key: number
    session_data: number
    expire_date: number
    _all: number
  }


  export type Django_sessionMinAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
  }

  export type Django_sessionMaxAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
  }

  export type Django_sessionCountAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
    _all?: true
  }

  export type Django_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_session to aggregate.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: django_sessionOrderByWithRelationInput | django_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_sessions
    **/
    _count?: true | Django_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_sessionMaxAggregateInputType
  }

  export type GetDjango_sessionAggregateType<T extends Django_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_session[P]>
      : GetScalarType<T[P], AggregateDjango_session[P]>
  }




  export type django_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: django_sessionWhereInput
    orderBy?: django_sessionOrderByWithAggregationInput | django_sessionOrderByWithAggregationInput[]
    by: Django_sessionScalarFieldEnum[] | Django_sessionScalarFieldEnum
    having?: django_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_sessionCountAggregateInputType | true
    _min?: Django_sessionMinAggregateInputType
    _max?: Django_sessionMaxAggregateInputType
  }

  export type Django_sessionGroupByOutputType = {
    session_key: string
    session_data: string
    expire_date: Date
    _count: Django_sessionCountAggregateOutputType | null
    _min: Django_sessionMinAggregateOutputType | null
    _max: Django_sessionMaxAggregateOutputType | null
  }

  type GetDjango_sessionGroupByPayload<T extends django_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Django_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Django_sessionGroupByOutputType[P]>
        }
      >
    >


  export type django_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_key?: boolean
    session_data?: boolean
    expire_date?: boolean
  }, ExtArgs["result"]["django_session"]>

  export type django_sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_key?: boolean
    session_data?: boolean
    expire_date?: boolean
  }, ExtArgs["result"]["django_session"]>

  export type django_sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_key?: boolean
    session_data?: boolean
    expire_date?: boolean
  }, ExtArgs["result"]["django_session"]>

  export type django_sessionSelectScalar = {
    session_key?: boolean
    session_data?: boolean
    expire_date?: boolean
  }

  export type django_sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_key" | "session_data" | "expire_date", ExtArgs["result"]["django_session"]>

  export type $django_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "django_session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      session_key: string
      session_data: string
      expire_date: Date
    }, ExtArgs["result"]["django_session"]>
    composites: {}
  }

  type django_sessionGetPayload<S extends boolean | null | undefined | django_sessionDefaultArgs> = $Result.GetResult<Prisma.$django_sessionPayload, S>

  type django_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<django_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Django_sessionCountAggregateInputType | true
    }

  export interface django_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['django_session'], meta: { name: 'django_session' } }
    /**
     * Find zero or one Django_session that matches the filter.
     * @param {django_sessionFindUniqueArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends django_sessionFindUniqueArgs>(args: SelectSubset<T, django_sessionFindUniqueArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Django_session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {django_sessionFindUniqueOrThrowArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends django_sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, django_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindFirstArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends django_sessionFindFirstArgs>(args?: SelectSubset<T, django_sessionFindFirstArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Django_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindFirstOrThrowArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends django_sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, django_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Django_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_sessions
     * const django_sessions = await prisma.django_session.findMany()
     * 
     * // Get first 10 Django_sessions
     * const django_sessions = await prisma.django_session.findMany({ take: 10 })
     * 
     * // Only select the `session_key`
     * const django_sessionWithSession_keyOnly = await prisma.django_session.findMany({ select: { session_key: true } })
     * 
     */
    findMany<T extends django_sessionFindManyArgs>(args?: SelectSubset<T, django_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Django_session.
     * @param {django_sessionCreateArgs} args - Arguments to create a Django_session.
     * @example
     * // Create one Django_session
     * const Django_session = await prisma.django_session.create({
     *   data: {
     *     // ... data to create a Django_session
     *   }
     * })
     * 
     */
    create<T extends django_sessionCreateArgs>(args: SelectSubset<T, django_sessionCreateArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Django_sessions.
     * @param {django_sessionCreateManyArgs} args - Arguments to create many Django_sessions.
     * @example
     * // Create many Django_sessions
     * const django_session = await prisma.django_session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends django_sessionCreateManyArgs>(args?: SelectSubset<T, django_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Django_sessions and returns the data saved in the database.
     * @param {django_sessionCreateManyAndReturnArgs} args - Arguments to create many Django_sessions.
     * @example
     * // Create many Django_sessions
     * const django_session = await prisma.django_session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Django_sessions and only return the `session_key`
     * const django_sessionWithSession_keyOnly = await prisma.django_session.createManyAndReturn({
     *   select: { session_key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends django_sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, django_sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Django_session.
     * @param {django_sessionDeleteArgs} args - Arguments to delete one Django_session.
     * @example
     * // Delete one Django_session
     * const Django_session = await prisma.django_session.delete({
     *   where: {
     *     // ... filter to delete one Django_session
     *   }
     * })
     * 
     */
    delete<T extends django_sessionDeleteArgs>(args: SelectSubset<T, django_sessionDeleteArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Django_session.
     * @param {django_sessionUpdateArgs} args - Arguments to update one Django_session.
     * @example
     * // Update one Django_session
     * const django_session = await prisma.django_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends django_sessionUpdateArgs>(args: SelectSubset<T, django_sessionUpdateArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Django_sessions.
     * @param {django_sessionDeleteManyArgs} args - Arguments to filter Django_sessions to delete.
     * @example
     * // Delete a few Django_sessions
     * const { count } = await prisma.django_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends django_sessionDeleteManyArgs>(args?: SelectSubset<T, django_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_sessions
     * const django_session = await prisma.django_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends django_sessionUpdateManyArgs>(args: SelectSubset<T, django_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_sessions and returns the data updated in the database.
     * @param {django_sessionUpdateManyAndReturnArgs} args - Arguments to update many Django_sessions.
     * @example
     * // Update many Django_sessions
     * const django_session = await prisma.django_session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Django_sessions and only return the `session_key`
     * const django_sessionWithSession_keyOnly = await prisma.django_session.updateManyAndReturn({
     *   select: { session_key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends django_sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, django_sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Django_session.
     * @param {django_sessionUpsertArgs} args - Arguments to update or create a Django_session.
     * @example
     * // Update or create a Django_session
     * const django_session = await prisma.django_session.upsert({
     *   create: {
     *     // ... data to create a Django_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_session we want to update
     *   }
     * })
     */
    upsert<T extends django_sessionUpsertArgs>(args: SelectSubset<T, django_sessionUpsertArgs<ExtArgs>>): Prisma__django_sessionClient<$Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Django_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionCountArgs} args - Arguments to filter Django_sessions to count.
     * @example
     * // Count the number of Django_sessions
     * const count = await prisma.django_session.count({
     *   where: {
     *     // ... the filter for the Django_sessions we want to count
     *   }
     * })
    **/
    count<T extends django_sessionCountArgs>(
      args?: Subset<T, django_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Django_sessionAggregateArgs>(args: Subset<T, Django_sessionAggregateArgs>): Prisma.PrismaPromise<GetDjango_sessionAggregateType<T>>

    /**
     * Group by Django_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends django_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: django_sessionGroupByArgs['orderBy'] }
        : { orderBy?: django_sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, django_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the django_session model
   */
  readonly fields: django_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for django_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__django_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the django_session model
   */
  interface django_sessionFieldRefs {
    readonly session_key: FieldRef<"django_session", 'String'>
    readonly session_data: FieldRef<"django_session", 'String'>
    readonly expire_date: FieldRef<"django_session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * django_session findUnique
   */
  export type django_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter, which django_session to fetch.
     */
    where: django_sessionWhereUniqueInput
  }

  /**
   * django_session findUniqueOrThrow
   */
  export type django_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter, which django_session to fetch.
     */
    where: django_sessionWhereUniqueInput
  }

  /**
   * django_session findFirst
   */
  export type django_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter, which django_session to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: django_sessionOrderByWithRelationInput | django_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_sessions.
     */
    distinct?: Django_sessionScalarFieldEnum | Django_sessionScalarFieldEnum[]
  }

  /**
   * django_session findFirstOrThrow
   */
  export type django_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter, which django_session to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: django_sessionOrderByWithRelationInput | django_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_sessions.
     */
    distinct?: Django_sessionScalarFieldEnum | Django_sessionScalarFieldEnum[]
  }

  /**
   * django_session findMany
   */
  export type django_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter, which django_sessions to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: django_sessionOrderByWithRelationInput | django_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    distinct?: Django_sessionScalarFieldEnum | Django_sessionScalarFieldEnum[]
  }

  /**
   * django_session create
   */
  export type django_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * The data needed to create a django_session.
     */
    data: XOR<django_sessionCreateInput, django_sessionUncheckedCreateInput>
  }

  /**
   * django_session createMany
   */
  export type django_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many django_sessions.
     */
    data: django_sessionCreateManyInput | django_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_session createManyAndReturn
   */
  export type django_sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * The data used to create many django_sessions.
     */
    data: django_sessionCreateManyInput | django_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * django_session update
   */
  export type django_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * The data needed to update a django_session.
     */
    data: XOR<django_sessionUpdateInput, django_sessionUncheckedUpdateInput>
    /**
     * Choose, which django_session to update.
     */
    where: django_sessionWhereUniqueInput
  }

  /**
   * django_session updateMany
   */
  export type django_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update django_sessions.
     */
    data: XOR<django_sessionUpdateManyMutationInput, django_sessionUncheckedUpdateManyInput>
    /**
     * Filter which django_sessions to update
     */
    where?: django_sessionWhereInput
    /**
     * Limit how many django_sessions to update.
     */
    limit?: number
  }

  /**
   * django_session updateManyAndReturn
   */
  export type django_sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * The data used to update django_sessions.
     */
    data: XOR<django_sessionUpdateManyMutationInput, django_sessionUncheckedUpdateManyInput>
    /**
     * Filter which django_sessions to update
     */
    where?: django_sessionWhereInput
    /**
     * Limit how many django_sessions to update.
     */
    limit?: number
  }

  /**
   * django_session upsert
   */
  export type django_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * The filter to search for the django_session to update in case it exists.
     */
    where: django_sessionWhereUniqueInput
    /**
     * In case the django_session found by the `where` argument doesn't exist, create a new django_session with this data.
     */
    create: XOR<django_sessionCreateInput, django_sessionUncheckedCreateInput>
    /**
     * In case the django_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_sessionUpdateInput, django_sessionUncheckedUpdateInput>
  }

  /**
   * django_session delete
   */
  export type django_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
    /**
     * Filter which django_session to delete.
     */
    where: django_sessionWhereUniqueInput
  }

  /**
   * django_session deleteMany
   */
  export type django_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which django_sessions to delete
     */
    where?: django_sessionWhereInput
    /**
     * Limit how many django_sessions to delete.
     */
    limit?: number
  }

  /**
   * django_session without action
   */
  export type django_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the django_session
     */
    omit?: django_sessionOmit<ExtArgs> | null
  }


  /**
   * Model order_details
   */

  export type AggregateOrder_details = {
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  export type Order_detailsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    unit_price: number | null
    order_id: number | null
    product_id: number | null
  }

  export type Order_detailsSumAggregateOutputType = {
    id: bigint | null
    quantity: number | null
    unit_price: number | null
    order_id: bigint | null
    product_id: bigint | null
  }

  export type Order_detailsMinAggregateOutputType = {
    id: bigint | null
    quantity: number | null
    unit_price: number | null
    created_at: Date | null
    updated_at: Date | null
    order_id: bigint | null
    product_id: bigint | null
  }

  export type Order_detailsMaxAggregateOutputType = {
    id: bigint | null
    quantity: number | null
    unit_price: number | null
    created_at: Date | null
    updated_at: Date | null
    order_id: bigint | null
    product_id: bigint | null
  }

  export type Order_detailsCountAggregateOutputType = {
    id: number
    quantity: number
    unit_price: number
    created_at: number
    updated_at: number
    order_id: number
    product_id: number
    _all: number
  }


  export type Order_detailsAvgAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    order_id?: true
    product_id?: true
  }

  export type Order_detailsSumAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    order_id?: true
    product_id?: true
  }

  export type Order_detailsMinAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
  }

  export type Order_detailsMaxAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
  }

  export type Order_detailsCountAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
    _all?: true
  }

  export type Order_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to aggregate.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_details
    **/
    _count?: true | Order_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_detailsMaxAggregateInputType
  }

  export type GetOrder_detailsAggregateType<T extends Order_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_details[P]>
      : GetScalarType<T[P], AggregateOrder_details[P]>
  }




  export type order_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithAggregationInput | order_detailsOrderByWithAggregationInput[]
    by: Order_detailsScalarFieldEnum[] | Order_detailsScalarFieldEnum
    having?: order_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_detailsCountAggregateInputType | true
    _avg?: Order_detailsAvgAggregateInputType
    _sum?: Order_detailsSumAggregateInputType
    _min?: Order_detailsMinAggregateInputType
    _max?: Order_detailsMaxAggregateInputType
  }

  export type Order_detailsGroupByOutputType = {
    id: bigint
    quantity: number
    unit_price: number
    created_at: Date
    updated_at: Date
    order_id: bigint
    product_id: bigint
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  type GetOrder_detailsGroupByPayload<T extends order_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
        }
      >
    >


  export type order_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unit_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unit_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unit_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectScalar = {
    id?: boolean
    quantity?: boolean
    unit_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
  }

  export type order_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "unit_price" | "created_at" | "updated_at" | "order_id" | "product_id", ExtArgs["result"]["order_details"]>
  export type order_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_details"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      quantity: number
      unit_price: number
      created_at: Date
      updated_at: Date
      order_id: bigint
      product_id: bigint
    }, ExtArgs["result"]["order_details"]>
    composites: {}
  }

  type order_detailsGetPayload<S extends boolean | null | undefined | order_detailsDefaultArgs> = $Result.GetResult<Prisma.$order_detailsPayload, S>

  type order_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_detailsCountAggregateInputType | true
    }

  export interface order_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_details'], meta: { name: 'order_details' } }
    /**
     * Find zero or one Order_details that matches the filter.
     * @param {order_detailsFindUniqueArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_detailsFindUniqueArgs>(args: SelectSubset<T, order_detailsFindUniqueArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_detailsFindUniqueOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_detailsFindFirstArgs>(args?: SelectSubset<T, order_detailsFindFirstArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_details.findMany()
     * 
     * // Get first 10 Order_details
     * const order_details = await prisma.order_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_detailsWithIdOnly = await prisma.order_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_detailsFindManyArgs>(args?: SelectSubset<T, order_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_details.
     * @param {order_detailsCreateArgs} args - Arguments to create a Order_details.
     * @example
     * // Create one Order_details
     * const Order_details = await prisma.order_details.create({
     *   data: {
     *     // ... data to create a Order_details
     *   }
     * })
     * 
     */
    create<T extends order_detailsCreateArgs>(args: SelectSubset<T, order_detailsCreateArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_details.
     * @param {order_detailsCreateManyArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_detailsCreateManyArgs>(args?: SelectSubset<T, order_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_details and returns the data saved in the database.
     * @param {order_detailsCreateManyAndReturnArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_details and only return the `id`
     * const order_detailsWithIdOnly = await prisma.order_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_details.
     * @param {order_detailsDeleteArgs} args - Arguments to delete one Order_details.
     * @example
     * // Delete one Order_details
     * const Order_details = await prisma.order_details.delete({
     *   where: {
     *     // ... filter to delete one Order_details
     *   }
     * })
     * 
     */
    delete<T extends order_detailsDeleteArgs>(args: SelectSubset<T, order_detailsDeleteArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_details.
     * @param {order_detailsUpdateArgs} args - Arguments to update one Order_details.
     * @example
     * // Update one Order_details
     * const order_details = await prisma.order_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_detailsUpdateArgs>(args: SelectSubset<T, order_detailsUpdateArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_details.
     * @param {order_detailsDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_detailsDeleteManyArgs>(args?: SelectSubset<T, order_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_detailsUpdateManyArgs>(args: SelectSubset<T, order_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details and returns the data updated in the database.
     * @param {order_detailsUpdateManyAndReturnArgs} args - Arguments to update many Order_details.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_details and only return the `id`
     * const order_detailsWithIdOnly = await prisma.order_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_details.
     * @param {order_detailsUpsertArgs} args - Arguments to update or create a Order_details.
     * @example
     * // Update or create a Order_details
     * const order_details = await prisma.order_details.upsert({
     *   create: {
     *     // ... data to create a Order_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_details we want to update
     *   }
     * })
     */
    upsert<T extends order_detailsUpsertArgs>(args: SelectSubset<T, order_detailsUpsertArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_details.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
    **/
    count<T extends order_detailsCountArgs>(
      args?: Subset<T, order_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_detailsAggregateArgs>(args: Subset<T, Order_detailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_detailsAggregateType<T>>

    /**
     * Group by Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_detailsGroupByArgs['orderBy'] }
        : { orderBy?: order_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_details model
   */
  readonly fields: order_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_details model
   */
  interface order_detailsFieldRefs {
    readonly id: FieldRef<"order_details", 'BigInt'>
    readonly quantity: FieldRef<"order_details", 'Int'>
    readonly unit_price: FieldRef<"order_details", 'Float'>
    readonly created_at: FieldRef<"order_details", 'DateTime'>
    readonly updated_at: FieldRef<"order_details", 'DateTime'>
    readonly order_id: FieldRef<"order_details", 'BigInt'>
    readonly product_id: FieldRef<"order_details", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * order_details findUnique
   */
  export type order_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details findUniqueOrThrow
   */
  export type order_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details findFirst
   */
  export type order_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details findFirstOrThrow
   */
  export type order_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details findMany
   */
  export type order_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details create
   */
  export type order_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_details.
     */
    data: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
  }

  /**
   * order_details createMany
   */
  export type order_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_details createManyAndReturn
   */
  export type order_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_details update
   */
  export type order_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_details.
     */
    data: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
    /**
     * Choose, which order_details to update.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details updateMany
   */
  export type order_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to update.
     */
    limit?: number
  }

  /**
   * order_details updateManyAndReturn
   */
  export type order_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_details upsert
   */
  export type order_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_details to update in case it exists.
     */
    where: order_detailsWhereUniqueInput
    /**
     * In case the order_details found by the `where` argument doesn't exist, create a new order_details with this data.
     */
    create: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
    /**
     * In case the order_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
  }

  /**
   * order_details delete
   */
  export type order_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter which order_details to delete.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details deleteMany
   */
  export type order_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to delete
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to delete.
     */
    limit?: number
  }

  /**
   * order_details without action
   */
  export type order_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: bigint | null
    customer_id: bigint | null
  }

  export type OrdersMinAggregateOutputType = {
    id: bigint | null
    registration_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    customer_id: bigint | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: bigint | null
    registration_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    customer_id: bigint | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    registration_date: number
    status: number
    created_at: number
    updated_at: number
    customer_id: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    customer_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    customer_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    registration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    registration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    registration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: bigint
    registration_date: Date
    status: string
    created_at: Date
    updated_at: Date
    customer_id: bigint
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
    order_details?: boolean | orders$order_detailsArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    registration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registration_date" | "status" | "created_at" | "updated_at" | "customer_id", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | orders$order_detailsArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_details: Prisma.$order_detailsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      registration_date: Date
      status: string
      created_at: Date
      updated_at: Date
      customer_id: bigint
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_details<T extends orders$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'BigInt'>
    readonly registration_date: FieldRef<"orders", 'DateTime'>
    readonly status: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly updated_at: FieldRef<"orders", 'DateTime'>
    readonly customer_id: FieldRef<"orders", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_details
   */
  export type orders$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    cursor?: order_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: bigint | null
    price: number | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    price: number | null
    stock: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    price: number | null
    stock: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: bigint
    name: string
    price: number
    stock: number
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_details?: boolean | products$order_detailsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "stock" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | products$order_detailsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_details: Prisma.$order_detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      price: number
      stock: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_details<T extends products$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'BigInt'>
    readonly name: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Float'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_details
   */
  export type products$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    cursor?: order_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Auth_groupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Auth_groupScalarFieldEnum = (typeof Auth_groupScalarFieldEnum)[keyof typeof Auth_groupScalarFieldEnum]


  export const Auth_group_permissionsScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    permission_id: 'permission_id'
  };

  export type Auth_group_permissionsScalarFieldEnum = (typeof Auth_group_permissionsScalarFieldEnum)[keyof typeof Auth_group_permissionsScalarFieldEnum]


  export const Auth_permissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content_type_id: 'content_type_id',
    codename: 'codename'
  };

  export type Auth_permissionScalarFieldEnum = (typeof Auth_permissionScalarFieldEnum)[keyof typeof Auth_permissionScalarFieldEnum]


  export const Auth_userScalarFieldEnum: {
    id: 'id',
    password: 'password',
    last_login: 'last_login',
    is_superuser: 'is_superuser',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    is_staff: 'is_staff',
    is_active: 'is_active',
    date_joined: 'date_joined'
  };

  export type Auth_userScalarFieldEnum = (typeof Auth_userScalarFieldEnum)[keyof typeof Auth_userScalarFieldEnum]


  export const Auth_user_groupsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    group_id: 'group_id'
  };

  export type Auth_user_groupsScalarFieldEnum = (typeof Auth_user_groupsScalarFieldEnum)[keyof typeof Auth_user_groupsScalarFieldEnum]


  export const Auth_user_user_permissionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    permission_id: 'permission_id'
  };

  export type Auth_user_user_permissionsScalarFieldEnum = (typeof Auth_user_user_permissionsScalarFieldEnum)[keyof typeof Auth_user_user_permissionsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    registration_date: 'registration_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Django_admin_logScalarFieldEnum: {
    id: 'id',
    action_time: 'action_time',
    object_id: 'object_id',
    object_repr: 'object_repr',
    action_flag: 'action_flag',
    change_message: 'change_message',
    content_type_id: 'content_type_id',
    user_id: 'user_id'
  };

  export type Django_admin_logScalarFieldEnum = (typeof Django_admin_logScalarFieldEnum)[keyof typeof Django_admin_logScalarFieldEnum]


  export const Django_content_typeScalarFieldEnum: {
    id: 'id',
    app_label: 'app_label',
    model: 'model'
  };

  export type Django_content_typeScalarFieldEnum = (typeof Django_content_typeScalarFieldEnum)[keyof typeof Django_content_typeScalarFieldEnum]


  export const Django_migrationsScalarFieldEnum: {
    id: 'id',
    app: 'app',
    name: 'name',
    applied: 'applied'
  };

  export type Django_migrationsScalarFieldEnum = (typeof Django_migrationsScalarFieldEnum)[keyof typeof Django_migrationsScalarFieldEnum]


  export const Django_sessionScalarFieldEnum: {
    session_key: 'session_key',
    session_data: 'session_data',
    expire_date: 'expire_date'
  };

  export type Django_sessionScalarFieldEnum = (typeof Django_sessionScalarFieldEnum)[keyof typeof Django_sessionScalarFieldEnum]


  export const Order_detailsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    order_id: 'order_id',
    product_id: 'product_id'
  };

  export type Order_detailsScalarFieldEnum = (typeof Order_detailsScalarFieldEnum)[keyof typeof Order_detailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    registration_date: 'registration_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    customer_id: 'customer_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type auth_groupWhereInput = {
    AND?: auth_groupWhereInput | auth_groupWhereInput[]
    OR?: auth_groupWhereInput[]
    NOT?: auth_groupWhereInput | auth_groupWhereInput[]
    id?: IntFilter<"auth_group"> | number
    name?: StringFilter<"auth_group"> | string
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    auth_user_groups?: Auth_user_groupsListRelationFilter
  }

  export type auth_groupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    auth_group_permissions?: auth_group_permissionsOrderByRelationAggregateInput
    auth_user_groups?: auth_user_groupsOrderByRelationAggregateInput
  }

  export type auth_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: auth_groupWhereInput | auth_groupWhereInput[]
    OR?: auth_groupWhereInput[]
    NOT?: auth_groupWhereInput | auth_groupWhereInput[]
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    auth_user_groups?: Auth_user_groupsListRelationFilter
  }, "id" | "name">

  export type auth_groupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: auth_groupCountOrderByAggregateInput
    _avg?: auth_groupAvgOrderByAggregateInput
    _max?: auth_groupMaxOrderByAggregateInput
    _min?: auth_groupMinOrderByAggregateInput
    _sum?: auth_groupSumOrderByAggregateInput
  }

  export type auth_groupScalarWhereWithAggregatesInput = {
    AND?: auth_groupScalarWhereWithAggregatesInput | auth_groupScalarWhereWithAggregatesInput[]
    OR?: auth_groupScalarWhereWithAggregatesInput[]
    NOT?: auth_groupScalarWhereWithAggregatesInput | auth_groupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_group"> | number
    name?: StringWithAggregatesFilter<"auth_group"> | string
  }

  export type auth_group_permissionsWhereInput = {
    AND?: auth_group_permissionsWhereInput | auth_group_permissionsWhereInput[]
    OR?: auth_group_permissionsWhereInput[]
    NOT?: auth_group_permissionsWhereInput | auth_group_permissionsWhereInput[]
    id?: BigIntFilter<"auth_group_permissions"> | bigint | number
    group_id?: IntFilter<"auth_group_permissions"> | number
    permission_id?: IntFilter<"auth_group_permissions"> | number
    auth_permission?: XOR<Auth_permissionScalarRelationFilter, auth_permissionWhereInput>
    auth_group?: XOR<Auth_groupScalarRelationFilter, auth_groupWhereInput>
  }

  export type auth_group_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
    auth_permission?: auth_permissionOrderByWithRelationInput
    auth_group?: auth_groupOrderByWithRelationInput
  }

  export type auth_group_permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    group_id_permission_id?: auth_group_permissionsGroup_idPermission_idCompoundUniqueInput
    AND?: auth_group_permissionsWhereInput | auth_group_permissionsWhereInput[]
    OR?: auth_group_permissionsWhereInput[]
    NOT?: auth_group_permissionsWhereInput | auth_group_permissionsWhereInput[]
    group_id?: IntFilter<"auth_group_permissions"> | number
    permission_id?: IntFilter<"auth_group_permissions"> | number
    auth_permission?: XOR<Auth_permissionScalarRelationFilter, auth_permissionWhereInput>
    auth_group?: XOR<Auth_groupScalarRelationFilter, auth_groupWhereInput>
  }, "id" | "group_id_permission_id">

  export type auth_group_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
    _count?: auth_group_permissionsCountOrderByAggregateInput
    _avg?: auth_group_permissionsAvgOrderByAggregateInput
    _max?: auth_group_permissionsMaxOrderByAggregateInput
    _min?: auth_group_permissionsMinOrderByAggregateInput
    _sum?: auth_group_permissionsSumOrderByAggregateInput
  }

  export type auth_group_permissionsScalarWhereWithAggregatesInput = {
    AND?: auth_group_permissionsScalarWhereWithAggregatesInput | auth_group_permissionsScalarWhereWithAggregatesInput[]
    OR?: auth_group_permissionsScalarWhereWithAggregatesInput[]
    NOT?: auth_group_permissionsScalarWhereWithAggregatesInput | auth_group_permissionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"auth_group_permissions"> | bigint | number
    group_id?: IntWithAggregatesFilter<"auth_group_permissions"> | number
    permission_id?: IntWithAggregatesFilter<"auth_group_permissions"> | number
  }

  export type auth_permissionWhereInput = {
    AND?: auth_permissionWhereInput | auth_permissionWhereInput[]
    OR?: auth_permissionWhereInput[]
    NOT?: auth_permissionWhereInput | auth_permissionWhereInput[]
    id?: IntFilter<"auth_permission"> | number
    name?: StringFilter<"auth_permission"> | string
    content_type_id?: IntFilter<"auth_permission"> | number
    codename?: StringFilter<"auth_permission"> | string
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    django_content_type?: XOR<Django_content_typeScalarRelationFilter, django_content_typeWhereInput>
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
  }

  export type auth_permissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
    auth_group_permissions?: auth_group_permissionsOrderByRelationAggregateInput
    django_content_type?: django_content_typeOrderByWithRelationInput
    auth_user_user_permissions?: auth_user_user_permissionsOrderByRelationAggregateInput
  }

  export type auth_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    content_type_id_codename?: auth_permissionContent_type_idCodenameCompoundUniqueInput
    AND?: auth_permissionWhereInput | auth_permissionWhereInput[]
    OR?: auth_permissionWhereInput[]
    NOT?: auth_permissionWhereInput | auth_permissionWhereInput[]
    name?: StringFilter<"auth_permission"> | string
    content_type_id?: IntFilter<"auth_permission"> | number
    codename?: StringFilter<"auth_permission"> | string
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    django_content_type?: XOR<Django_content_typeScalarRelationFilter, django_content_typeWhereInput>
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
  }, "id" | "content_type_id_codename">

  export type auth_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
    _count?: auth_permissionCountOrderByAggregateInput
    _avg?: auth_permissionAvgOrderByAggregateInput
    _max?: auth_permissionMaxOrderByAggregateInput
    _min?: auth_permissionMinOrderByAggregateInput
    _sum?: auth_permissionSumOrderByAggregateInput
  }

  export type auth_permissionScalarWhereWithAggregatesInput = {
    AND?: auth_permissionScalarWhereWithAggregatesInput | auth_permissionScalarWhereWithAggregatesInput[]
    OR?: auth_permissionScalarWhereWithAggregatesInput[]
    NOT?: auth_permissionScalarWhereWithAggregatesInput | auth_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_permission"> | number
    name?: StringWithAggregatesFilter<"auth_permission"> | string
    content_type_id?: IntWithAggregatesFilter<"auth_permission"> | number
    codename?: StringWithAggregatesFilter<"auth_permission"> | string
  }

  export type auth_userWhereInput = {
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    id?: IntFilter<"auth_user"> | number
    password?: StringFilter<"auth_user"> | string
    last_login?: DateTimeNullableFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolFilter<"auth_user"> | boolean
    username?: StringFilter<"auth_user"> | string
    first_name?: StringFilter<"auth_user"> | string
    last_name?: StringFilter<"auth_user"> | string
    email?: StringFilter<"auth_user"> | string
    is_staff?: BoolFilter<"auth_user"> | boolean
    is_active?: BoolFilter<"auth_user"> | boolean
    date_joined?: DateTimeFilter<"auth_user"> | Date | string
    auth_user_groups?: Auth_user_groupsListRelationFilter
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }

  export type auth_userOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
    auth_user_groups?: auth_user_groupsOrderByRelationAggregateInput
    auth_user_user_permissions?: auth_user_user_permissionsOrderByRelationAggregateInput
    django_admin_log?: django_admin_logOrderByRelationAggregateInput
  }

  export type auth_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    password?: StringFilter<"auth_user"> | string
    last_login?: DateTimeNullableFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolFilter<"auth_user"> | boolean
    first_name?: StringFilter<"auth_user"> | string
    last_name?: StringFilter<"auth_user"> | string
    email?: StringFilter<"auth_user"> | string
    is_staff?: BoolFilter<"auth_user"> | boolean
    is_active?: BoolFilter<"auth_user"> | boolean
    date_joined?: DateTimeFilter<"auth_user"> | Date | string
    auth_user_groups?: Auth_user_groupsListRelationFilter
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }, "id" | "username">

  export type auth_userOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
    _count?: auth_userCountOrderByAggregateInput
    _avg?: auth_userAvgOrderByAggregateInput
    _max?: auth_userMaxOrderByAggregateInput
    _min?: auth_userMinOrderByAggregateInput
    _sum?: auth_userSumOrderByAggregateInput
  }

  export type auth_userScalarWhereWithAggregatesInput = {
    AND?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    OR?: auth_userScalarWhereWithAggregatesInput[]
    NOT?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_user"> | number
    password?: StringWithAggregatesFilter<"auth_user"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolWithAggregatesFilter<"auth_user"> | boolean
    username?: StringWithAggregatesFilter<"auth_user"> | string
    first_name?: StringWithAggregatesFilter<"auth_user"> | string
    last_name?: StringWithAggregatesFilter<"auth_user"> | string
    email?: StringWithAggregatesFilter<"auth_user"> | string
    is_staff?: BoolWithAggregatesFilter<"auth_user"> | boolean
    is_active?: BoolWithAggregatesFilter<"auth_user"> | boolean
    date_joined?: DateTimeWithAggregatesFilter<"auth_user"> | Date | string
  }

  export type auth_user_groupsWhereInput = {
    AND?: auth_user_groupsWhereInput | auth_user_groupsWhereInput[]
    OR?: auth_user_groupsWhereInput[]
    NOT?: auth_user_groupsWhereInput | auth_user_groupsWhereInput[]
    id?: BigIntFilter<"auth_user_groups"> | bigint | number
    user_id?: IntFilter<"auth_user_groups"> | number
    group_id?: IntFilter<"auth_user_groups"> | number
    auth_group?: XOR<Auth_groupScalarRelationFilter, auth_groupWhereInput>
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }

  export type auth_user_groupsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    auth_group?: auth_groupOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type auth_user_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_group_id?: auth_user_groupsUser_idGroup_idCompoundUniqueInput
    AND?: auth_user_groupsWhereInput | auth_user_groupsWhereInput[]
    OR?: auth_user_groupsWhereInput[]
    NOT?: auth_user_groupsWhereInput | auth_user_groupsWhereInput[]
    user_id?: IntFilter<"auth_user_groups"> | number
    group_id?: IntFilter<"auth_user_groups"> | number
    auth_group?: XOR<Auth_groupScalarRelationFilter, auth_groupWhereInput>
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }, "id" | "user_id_group_id">

  export type auth_user_groupsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    _count?: auth_user_groupsCountOrderByAggregateInput
    _avg?: auth_user_groupsAvgOrderByAggregateInput
    _max?: auth_user_groupsMaxOrderByAggregateInput
    _min?: auth_user_groupsMinOrderByAggregateInput
    _sum?: auth_user_groupsSumOrderByAggregateInput
  }

  export type auth_user_groupsScalarWhereWithAggregatesInput = {
    AND?: auth_user_groupsScalarWhereWithAggregatesInput | auth_user_groupsScalarWhereWithAggregatesInput[]
    OR?: auth_user_groupsScalarWhereWithAggregatesInput[]
    NOT?: auth_user_groupsScalarWhereWithAggregatesInput | auth_user_groupsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"auth_user_groups"> | bigint | number
    user_id?: IntWithAggregatesFilter<"auth_user_groups"> | number
    group_id?: IntWithAggregatesFilter<"auth_user_groups"> | number
  }

  export type auth_user_user_permissionsWhereInput = {
    AND?: auth_user_user_permissionsWhereInput | auth_user_user_permissionsWhereInput[]
    OR?: auth_user_user_permissionsWhereInput[]
    NOT?: auth_user_user_permissionsWhereInput | auth_user_user_permissionsWhereInput[]
    id?: BigIntFilter<"auth_user_user_permissions"> | bigint | number
    user_id?: IntFilter<"auth_user_user_permissions"> | number
    permission_id?: IntFilter<"auth_user_user_permissions"> | number
    auth_permission?: XOR<Auth_permissionScalarRelationFilter, auth_permissionWhereInput>
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }

  export type auth_user_user_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
    auth_permission?: auth_permissionOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type auth_user_user_permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_permission_id?: auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput
    AND?: auth_user_user_permissionsWhereInput | auth_user_user_permissionsWhereInput[]
    OR?: auth_user_user_permissionsWhereInput[]
    NOT?: auth_user_user_permissionsWhereInput | auth_user_user_permissionsWhereInput[]
    user_id?: IntFilter<"auth_user_user_permissions"> | number
    permission_id?: IntFilter<"auth_user_user_permissions"> | number
    auth_permission?: XOR<Auth_permissionScalarRelationFilter, auth_permissionWhereInput>
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }, "id" | "user_id_permission_id">

  export type auth_user_user_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
    _count?: auth_user_user_permissionsCountOrderByAggregateInput
    _avg?: auth_user_user_permissionsAvgOrderByAggregateInput
    _max?: auth_user_user_permissionsMaxOrderByAggregateInput
    _min?: auth_user_user_permissionsMinOrderByAggregateInput
    _sum?: auth_user_user_permissionsSumOrderByAggregateInput
  }

  export type auth_user_user_permissionsScalarWhereWithAggregatesInput = {
    AND?: auth_user_user_permissionsScalarWhereWithAggregatesInput | auth_user_user_permissionsScalarWhereWithAggregatesInput[]
    OR?: auth_user_user_permissionsScalarWhereWithAggregatesInput[]
    NOT?: auth_user_user_permissionsScalarWhereWithAggregatesInput | auth_user_user_permissionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"auth_user_user_permissions"> | bigint | number
    user_id?: IntWithAggregatesFilter<"auth_user_user_permissions"> | number
    permission_id?: IntWithAggregatesFilter<"auth_user_user_permissions"> | number
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: BigIntFilter<"customers"> | bigint | number
    name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    address?: StringFilter<"customers"> | string
    registration_date?: DateTimeFilter<"customers"> | Date | string
    created_at?: DateTimeFilter<"customers"> | Date | string
    updated_at?: DateTimeFilter<"customers"> | Date | string
    orders?: OrdersListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    registration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    address?: StringFilter<"customers"> | string
    registration_date?: DateTimeFilter<"customers"> | Date | string
    created_at?: DateTimeFilter<"customers"> | Date | string
    updated_at?: DateTimeFilter<"customers"> | Date | string
    orders?: OrdersListRelationFilter
  }, "id">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    registration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"customers"> | bigint | number
    name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringWithAggregatesFilter<"customers"> | string
    address?: StringWithAggregatesFilter<"customers"> | string
    registration_date?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"customers"> | Date | string
  }

  export type django_admin_logWhereInput = {
    AND?: django_admin_logWhereInput | django_admin_logWhereInput[]
    OR?: django_admin_logWhereInput[]
    NOT?: django_admin_logWhereInput | django_admin_logWhereInput[]
    id?: IntFilter<"django_admin_log"> | number
    action_time?: DateTimeFilter<"django_admin_log"> | Date | string
    object_id?: StringNullableFilter<"django_admin_log"> | string | null
    object_repr?: StringFilter<"django_admin_log"> | string
    action_flag?: IntFilter<"django_admin_log"> | number
    change_message?: StringFilter<"django_admin_log"> | string
    content_type_id?: IntNullableFilter<"django_admin_log"> | number | null
    user_id?: IntFilter<"django_admin_log"> | number
    django_content_type?: XOR<Django_content_typeNullableScalarRelationFilter, django_content_typeWhereInput> | null
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }

  export type django_admin_logOrderByWithRelationInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrderInput | SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    django_content_type?: django_content_typeOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type django_admin_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: django_admin_logWhereInput | django_admin_logWhereInput[]
    OR?: django_admin_logWhereInput[]
    NOT?: django_admin_logWhereInput | django_admin_logWhereInput[]
    action_time?: DateTimeFilter<"django_admin_log"> | Date | string
    object_id?: StringNullableFilter<"django_admin_log"> | string | null
    object_repr?: StringFilter<"django_admin_log"> | string
    action_flag?: IntFilter<"django_admin_log"> | number
    change_message?: StringFilter<"django_admin_log"> | string
    content_type_id?: IntNullableFilter<"django_admin_log"> | number | null
    user_id?: IntFilter<"django_admin_log"> | number
    django_content_type?: XOR<Django_content_typeNullableScalarRelationFilter, django_content_typeWhereInput> | null
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }, "id">

  export type django_admin_logOrderByWithAggregationInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrderInput | SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: django_admin_logCountOrderByAggregateInput
    _avg?: django_admin_logAvgOrderByAggregateInput
    _max?: django_admin_logMaxOrderByAggregateInput
    _min?: django_admin_logMinOrderByAggregateInput
    _sum?: django_admin_logSumOrderByAggregateInput
  }

  export type django_admin_logScalarWhereWithAggregatesInput = {
    AND?: django_admin_logScalarWhereWithAggregatesInput | django_admin_logScalarWhereWithAggregatesInput[]
    OR?: django_admin_logScalarWhereWithAggregatesInput[]
    NOT?: django_admin_logScalarWhereWithAggregatesInput | django_admin_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"django_admin_log"> | number
    action_time?: DateTimeWithAggregatesFilter<"django_admin_log"> | Date | string
    object_id?: StringNullableWithAggregatesFilter<"django_admin_log"> | string | null
    object_repr?: StringWithAggregatesFilter<"django_admin_log"> | string
    action_flag?: IntWithAggregatesFilter<"django_admin_log"> | number
    change_message?: StringWithAggregatesFilter<"django_admin_log"> | string
    content_type_id?: IntNullableWithAggregatesFilter<"django_admin_log"> | number | null
    user_id?: IntWithAggregatesFilter<"django_admin_log"> | number
  }

  export type django_content_typeWhereInput = {
    AND?: django_content_typeWhereInput | django_content_typeWhereInput[]
    OR?: django_content_typeWhereInput[]
    NOT?: django_content_typeWhereInput | django_content_typeWhereInput[]
    id?: IntFilter<"django_content_type"> | number
    app_label?: StringFilter<"django_content_type"> | string
    model?: StringFilter<"django_content_type"> | string
    auth_permission?: Auth_permissionListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }

  export type django_content_typeOrderByWithRelationInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
    auth_permission?: auth_permissionOrderByRelationAggregateInput
    django_admin_log?: django_admin_logOrderByRelationAggregateInput
  }

  export type django_content_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    app_label_model?: django_content_typeApp_labelModelCompoundUniqueInput
    AND?: django_content_typeWhereInput | django_content_typeWhereInput[]
    OR?: django_content_typeWhereInput[]
    NOT?: django_content_typeWhereInput | django_content_typeWhereInput[]
    app_label?: StringFilter<"django_content_type"> | string
    model?: StringFilter<"django_content_type"> | string
    auth_permission?: Auth_permissionListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }, "id" | "app_label_model">

  export type django_content_typeOrderByWithAggregationInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
    _count?: django_content_typeCountOrderByAggregateInput
    _avg?: django_content_typeAvgOrderByAggregateInput
    _max?: django_content_typeMaxOrderByAggregateInput
    _min?: django_content_typeMinOrderByAggregateInput
    _sum?: django_content_typeSumOrderByAggregateInput
  }

  export type django_content_typeScalarWhereWithAggregatesInput = {
    AND?: django_content_typeScalarWhereWithAggregatesInput | django_content_typeScalarWhereWithAggregatesInput[]
    OR?: django_content_typeScalarWhereWithAggregatesInput[]
    NOT?: django_content_typeScalarWhereWithAggregatesInput | django_content_typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"django_content_type"> | number
    app_label?: StringWithAggregatesFilter<"django_content_type"> | string
    model?: StringWithAggregatesFilter<"django_content_type"> | string
  }

  export type django_migrationsWhereInput = {
    AND?: django_migrationsWhereInput | django_migrationsWhereInput[]
    OR?: django_migrationsWhereInput[]
    NOT?: django_migrationsWhereInput | django_migrationsWhereInput[]
    id?: BigIntFilter<"django_migrations"> | bigint | number
    app?: StringFilter<"django_migrations"> | string
    name?: StringFilter<"django_migrations"> | string
    applied?: DateTimeFilter<"django_migrations"> | Date | string
  }

  export type django_migrationsOrderByWithRelationInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: django_migrationsWhereInput | django_migrationsWhereInput[]
    OR?: django_migrationsWhereInput[]
    NOT?: django_migrationsWhereInput | django_migrationsWhereInput[]
    app?: StringFilter<"django_migrations"> | string
    name?: StringFilter<"django_migrations"> | string
    applied?: DateTimeFilter<"django_migrations"> | Date | string
  }, "id">

  export type django_migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
    _count?: django_migrationsCountOrderByAggregateInput
    _avg?: django_migrationsAvgOrderByAggregateInput
    _max?: django_migrationsMaxOrderByAggregateInput
    _min?: django_migrationsMinOrderByAggregateInput
    _sum?: django_migrationsSumOrderByAggregateInput
  }

  export type django_migrationsScalarWhereWithAggregatesInput = {
    AND?: django_migrationsScalarWhereWithAggregatesInput | django_migrationsScalarWhereWithAggregatesInput[]
    OR?: django_migrationsScalarWhereWithAggregatesInput[]
    NOT?: django_migrationsScalarWhereWithAggregatesInput | django_migrationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"django_migrations"> | bigint | number
    app?: StringWithAggregatesFilter<"django_migrations"> | string
    name?: StringWithAggregatesFilter<"django_migrations"> | string
    applied?: DateTimeWithAggregatesFilter<"django_migrations"> | Date | string
  }

  export type django_sessionWhereInput = {
    AND?: django_sessionWhereInput | django_sessionWhereInput[]
    OR?: django_sessionWhereInput[]
    NOT?: django_sessionWhereInput | django_sessionWhereInput[]
    session_key?: StringFilter<"django_session"> | string
    session_data?: StringFilter<"django_session"> | string
    expire_date?: DateTimeFilter<"django_session"> | Date | string
  }

  export type django_sessionOrderByWithRelationInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionWhereUniqueInput = Prisma.AtLeast<{
    session_key?: string
    AND?: django_sessionWhereInput | django_sessionWhereInput[]
    OR?: django_sessionWhereInput[]
    NOT?: django_sessionWhereInput | django_sessionWhereInput[]
    session_data?: StringFilter<"django_session"> | string
    expire_date?: DateTimeFilter<"django_session"> | Date | string
  }, "session_key">

  export type django_sessionOrderByWithAggregationInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
    _count?: django_sessionCountOrderByAggregateInput
    _max?: django_sessionMaxOrderByAggregateInput
    _min?: django_sessionMinOrderByAggregateInput
  }

  export type django_sessionScalarWhereWithAggregatesInput = {
    AND?: django_sessionScalarWhereWithAggregatesInput | django_sessionScalarWhereWithAggregatesInput[]
    OR?: django_sessionScalarWhereWithAggregatesInput[]
    NOT?: django_sessionScalarWhereWithAggregatesInput | django_sessionScalarWhereWithAggregatesInput[]
    session_key?: StringWithAggregatesFilter<"django_session"> | string
    session_data?: StringWithAggregatesFilter<"django_session"> | string
    expire_date?: DateTimeWithAggregatesFilter<"django_session"> | Date | string
  }

  export type order_detailsWhereInput = {
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    id?: BigIntFilter<"order_details"> | bigint | number
    quantity?: IntFilter<"order_details"> | number
    unit_price?: FloatFilter<"order_details"> | number
    created_at?: DateTimeFilter<"order_details"> | Date | string
    updated_at?: DateTimeFilter<"order_details"> | Date | string
    order_id?: BigIntFilter<"order_details"> | bigint | number
    product_id?: BigIntFilter<"order_details"> | bigint | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_detailsOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    quantity?: IntFilter<"order_details"> | number
    unit_price?: FloatFilter<"order_details"> | number
    created_at?: DateTimeFilter<"order_details"> | Date | string
    updated_at?: DateTimeFilter<"order_details"> | Date | string
    order_id?: BigIntFilter<"order_details"> | bigint | number
    product_id?: BigIntFilter<"order_details"> | bigint | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type order_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    _count?: order_detailsCountOrderByAggregateInput
    _avg?: order_detailsAvgOrderByAggregateInput
    _max?: order_detailsMaxOrderByAggregateInput
    _min?: order_detailsMinOrderByAggregateInput
    _sum?: order_detailsSumOrderByAggregateInput
  }

  export type order_detailsScalarWhereWithAggregatesInput = {
    AND?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    OR?: order_detailsScalarWhereWithAggregatesInput[]
    NOT?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"order_details"> | bigint | number
    quantity?: IntWithAggregatesFilter<"order_details"> | number
    unit_price?: FloatWithAggregatesFilter<"order_details"> | number
    created_at?: DateTimeWithAggregatesFilter<"order_details"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"order_details"> | Date | string
    order_id?: BigIntWithAggregatesFilter<"order_details"> | bigint | number
    product_id?: BigIntWithAggregatesFilter<"order_details"> | bigint | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: BigIntFilter<"orders"> | bigint | number
    registration_date?: DateTimeFilter<"orders"> | Date | string
    status?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
    customer_id?: BigIntFilter<"orders"> | bigint | number
    order_details?: Order_detailsListRelationFilter
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    registration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
    order_details?: order_detailsOrderByRelationAggregateInput
    customers?: customersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    registration_date?: DateTimeFilter<"orders"> | Date | string
    status?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
    customer_id?: BigIntFilter<"orders"> | bigint | number
    order_details?: Order_detailsListRelationFilter
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    registration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    registration_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    status?: StringWithAggregatesFilter<"orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    customer_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: BigIntFilter<"products"> | bigint | number
    name?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    stock?: IntFilter<"products"> | number
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    order_details?: Order_detailsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_details?: order_detailsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    stock?: IntFilter<"products"> | number
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    order_details?: Order_detailsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"products"> | bigint | number
    name?: StringWithAggregatesFilter<"products"> | string
    price?: FloatWithAggregatesFilter<"products"> | number
    stock?: IntWithAggregatesFilter<"products"> | number
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type auth_groupCreateInput = {
    name: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_groupInput
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateInput = {
    id?: number
    name: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupCreateManyInput = {
    id?: number
    name: string
  }

  export type auth_groupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type auth_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type auth_group_permissionsCreateInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput
    auth_group: auth_groupCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateInput = {
    id?: bigint | number
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsCreateManyInput = {
    id?: bigint | number
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_group_permissionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_permissionCreateInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionCreateManyInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
  }

  export type auth_permissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type auth_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type auth_userCreateInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userCreateManyInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
  }

  export type auth_userUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_user_groupsCreateInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_user_groupsInput
    auth_user: auth_userCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateInput = {
    id?: bigint | number
    user_id: number
    group_id: number
  }

  export type auth_user_groupsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsCreateManyInput = {
    id?: bigint | number
    user_id: number
    group_id: number
  }

  export type auth_user_groupsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_user_groupsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsCreateInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput
    auth_user: auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateInput = {
    id?: bigint | number
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsCreateManyInput = {
    id?: bigint | number
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_user_user_permissionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type customersCreateInput = {
    id?: bigint | number
    name: string
    email: string
    address: string
    registration_date: Date | string
    created_at: Date | string
    updated_at: Date | string
    orders?: ordersCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    address: string
    registration_date: Date | string
    created_at: Date | string
    updated_at: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    address: string
    registration_date: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type customersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_admin_logCreateInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    django_content_type?: django_content_typeCreateNestedOneWithoutDjango_admin_logInput
    auth_user: auth_userCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
    user_id: number
  }

  export type django_admin_logUpdateInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneWithoutDjango_admin_logNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logCreateManyInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
    user_id: number
  }

  export type django_admin_logUpdateManyMutationInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
  }

  export type django_admin_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_content_typeCreateInput = {
    app_label: string
    model: string
    auth_permission?: auth_permissionCreateNestedManyWithoutDjango_content_typeInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateInput = {
    id?: number
    app_label: string
    model: string
    auth_permission?: auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUpdateInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUpdateManyWithoutDjango_content_typeNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeCreateManyInput = {
    id?: number
    app_label: string
    model: string
  }

  export type django_content_typeUpdateManyMutationInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type django_content_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type django_migrationsCreateInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUncheckedCreateInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsCreateManyInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionCreateInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUncheckedCreateInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUpdateInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionUncheckedUpdateInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionCreateManyInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUpdateManyMutationInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionUncheckedUpdateManyInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailsCreateInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    orders: ordersCreateNestedOneWithoutOrder_detailsInput
    products: productsCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    order_id: bigint | number
    product_id: bigint | number
  }

  export type order_detailsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutOrder_detailsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type order_detailsCreateManyInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    order_id: bigint | number
    product_id: bigint | number
  }

  export type order_detailsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ordersCreateInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    order_details?: order_detailsCreateNestedManyWithoutOrdersInput
    customers: customersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    customer_id: bigint | number
    order_details?: order_detailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: order_detailsUpdateManyWithoutOrdersNestedInput
    customers?: customersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_details?: order_detailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    customer_id: bigint | number
  }

  export type ordersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type productsCreateInput = {
    id?: bigint | number
    name: string
    price: number
    stock: number
    created_at: Date | string
    updated_at: Date | string
    order_details?: order_detailsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    price: number
    stock: number
    created_at: Date | string
    updated_at: Date | string
    order_details?: order_detailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: order_detailsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: order_detailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: bigint | number
    name: string
    price: number
    stock: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type productsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Auth_group_permissionsListRelationFilter = {
    every?: auth_group_permissionsWhereInput
    some?: auth_group_permissionsWhereInput
    none?: auth_group_permissionsWhereInput
  }

  export type Auth_user_groupsListRelationFilter = {
    every?: auth_user_groupsWhereInput
    some?: auth_user_groupsWhereInput
    none?: auth_user_groupsWhereInput
  }

  export type auth_group_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_user_groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_groupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type Auth_permissionScalarRelationFilter = {
    is?: auth_permissionWhereInput
    isNot?: auth_permissionWhereInput
  }

  export type Auth_groupScalarRelationFilter = {
    is?: auth_groupWhereInput
    isNot?: auth_groupWhereInput
  }

  export type auth_group_permissionsGroup_idPermission_idCompoundUniqueInput = {
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Django_content_typeScalarRelationFilter = {
    is?: django_content_typeWhereInput
    isNot?: django_content_typeWhereInput
  }

  export type Auth_user_user_permissionsListRelationFilter = {
    every?: auth_user_user_permissionsWhereInput
    some?: auth_user_user_permissionsWhereInput
    none?: auth_user_user_permissionsWhereInput
  }

  export type auth_user_user_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_permissionContent_type_idCodenameCompoundUniqueInput = {
    content_type_id: number
    codename: string
  }

  export type auth_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    content_type_id?: SortOrder
  }

  export type auth_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    content_type_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Django_admin_logListRelationFilter = {
    every?: django_admin_logWhereInput
    some?: django_admin_logWhereInput
    none?: django_admin_logWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type django_admin_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_userCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_userMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Auth_userScalarRelationFilter = {
    is?: auth_userWhereInput
    isNot?: auth_userWhereInput
  }

  export type auth_user_groupsUser_idGroup_idCompoundUniqueInput = {
    user_id: number
    group_id: number
  }

  export type auth_user_groupsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput = {
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    registration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    registration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    registration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Django_content_typeNullableScalarRelationFilter = {
    is?: django_content_typeWhereInput | null
    isNot?: django_content_typeWhereInput | null
  }

  export type django_admin_logCountOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logAvgOrderByAggregateInput = {
    id?: SortOrder
    action_flag?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logMaxOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logMinOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logSumOrderByAggregateInput = {
    id?: SortOrder
    action_flag?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Auth_permissionListRelationFilter = {
    every?: auth_permissionWhereInput
    some?: auth_permissionWhereInput
    none?: auth_permissionWhereInput
  }

  export type auth_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type django_content_typeApp_labelModelCompoundUniqueInput = {
    app_label: string
    model: string
  }

  export type django_content_typeCountOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_content_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeMinOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_sessionCountOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionMaxOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionMinOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type order_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Order_detailsListRelationFilter = {
    every?: order_detailsWhereInput
    some?: order_detailsWhereInput
    none?: order_detailsWhereInput
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type order_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    registration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    registration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    registration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type auth_group_permissionsCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | auth_group_permissionsCreateWithoutAuth_groupInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[]
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
  }

  export type auth_user_groupsCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | auth_user_groupsCreateWithoutAuth_groupInput[] | auth_user_groupsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_groupInput | auth_user_groupsCreateOrConnectWithoutAuth_groupInput[]
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
  }

  export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | auth_group_permissionsCreateWithoutAuth_groupInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[]
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
  }

  export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | auth_user_groupsCreateWithoutAuth_groupInput[] | auth_user_groupsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_groupInput | auth_user_groupsCreateOrConnectWithoutAuth_groupInput[]
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | auth_group_permissionsCreateWithoutAuth_groupInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[]
    upsert?: auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput | auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput[]
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    set?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    disconnect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    delete?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    update?: auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput | auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput[]
    updateMany?: auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput | auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput[]
    deleteMany?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
  }

  export type auth_user_groupsUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | auth_user_groupsCreateWithoutAuth_groupInput[] | auth_user_groupsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_groupInput | auth_user_groupsCreateOrConnectWithoutAuth_groupInput[]
    upsert?: auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput | auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput[]
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    set?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    disconnect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    delete?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    update?: auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput | auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput[]
    updateMany?: auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput | auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput[]
    deleteMany?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | auth_group_permissionsCreateWithoutAuth_groupInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[]
    upsert?: auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput | auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput[]
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    set?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    disconnect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    delete?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    update?: auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput | auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput[]
    updateMany?: auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput | auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput[]
    deleteMany?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | auth_user_groupsCreateWithoutAuth_groupInput[] | auth_user_groupsUncheckedCreateWithoutAuth_groupInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_groupInput | auth_user_groupsCreateOrConnectWithoutAuth_groupInput[]
    upsert?: auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput | auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput[]
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    set?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    disconnect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    delete?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    update?: auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput | auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput[]
    updateMany?: auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput | auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput[]
    deleteMany?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
  }

  export type auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput
    connect?: auth_permissionWhereUniqueInput
  }

  export type auth_groupCreateNestedOneWithoutAuth_group_permissionsInput = {
    create?: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_group_permissionsInput
    connect?: auth_groupWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput
    upsert?: auth_permissionUpsertWithoutAuth_group_permissionsInput
    connect?: auth_permissionWhereUniqueInput
    update?: XOR<XOR<auth_permissionUpdateToOneWithWhereWithoutAuth_group_permissionsInput, auth_permissionUpdateWithoutAuth_group_permissionsInput>, auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput = {
    create?: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_group_permissionsInput
    upsert?: auth_groupUpsertWithoutAuth_group_permissionsInput
    connect?: auth_groupWhereUniqueInput
    update?: XOR<XOR<auth_groupUpdateToOneWithWhereWithoutAuth_group_permissionsInput, auth_groupUpdateWithoutAuth_group_permissionsInput>, auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_group_permissionsCreateWithoutAuth_permissionInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
  }

  export type django_content_typeCreateNestedOneWithoutAuth_permissionInput = {
    create?: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutAuth_permissionInput
    connect?: django_content_typeWhereUniqueInput
  }

  export type auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
  }

  export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_group_permissionsCreateWithoutAuth_permissionInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
  }

  export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
  }

  export type auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_group_permissionsCreateWithoutAuth_permissionInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    upsert?: auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[]
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    set?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    disconnect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    delete?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    update?: auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[]
    updateMany?: auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[]
    deleteMany?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
  }

  export type django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput = {
    create?: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutAuth_permissionInput
    upsert?: django_content_typeUpsertWithoutAuth_permissionInput
    connect?: django_content_typeWhereUniqueInput
    update?: XOR<XOR<django_content_typeUpdateToOneWithWhereWithoutAuth_permissionInput, django_content_typeUpdateWithoutAuth_permissionInput>, django_content_typeUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    upsert?: auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    set?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    disconnect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    delete?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    update?: auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[]
    updateMany?: auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[]
    deleteMany?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_group_permissionsCreateWithoutAuth_permissionInput[] | auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    upsert?: auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[]
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    set?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    disconnect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    delete?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    connect?: auth_group_permissionsWhereUniqueInput | auth_group_permissionsWhereUniqueInput[]
    update?: auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[]
    updateMany?: auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[]
    deleteMany?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[]
    upsert?: auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    set?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    disconnect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    delete?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    update?: auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[]
    updateMany?: auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[]
    deleteMany?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
  }

  export type auth_user_groupsCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput> | auth_user_groupsCreateWithoutAuth_userInput[] | auth_user_groupsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_userInput | auth_user_groupsCreateOrConnectWithoutAuth_userInput[]
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
  }

  export type auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | auth_user_user_permissionsCreateWithoutAuth_userInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
  }

  export type django_admin_logCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput> | django_admin_logCreateWithoutAuth_userInput[] | django_admin_logUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutAuth_userInput | django_admin_logCreateOrConnectWithoutAuth_userInput[]
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
  }

  export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput> | auth_user_groupsCreateWithoutAuth_userInput[] | auth_user_groupsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_userInput | auth_user_groupsCreateOrConnectWithoutAuth_userInput[]
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
  }

  export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | auth_user_user_permissionsCreateWithoutAuth_userInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
  }

  export type django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput> | django_admin_logCreateWithoutAuth_userInput[] | django_admin_logUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutAuth_userInput | django_admin_logCreateOrConnectWithoutAuth_userInput[]
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type auth_user_groupsUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput> | auth_user_groupsCreateWithoutAuth_userInput[] | auth_user_groupsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_userInput | auth_user_groupsCreateOrConnectWithoutAuth_userInput[]
    upsert?: auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput | auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    set?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    disconnect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    delete?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    update?: auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput | auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput | auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
  }

  export type auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | auth_user_user_permissionsCreateWithoutAuth_userInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[]
    upsert?: auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput | auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    set?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    disconnect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    delete?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    update?: auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput | auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput | auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
  }

  export type django_admin_logUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput> | django_admin_logCreateWithoutAuth_userInput[] | django_admin_logUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutAuth_userInput | django_admin_logCreateOrConnectWithoutAuth_userInput[]
    upsert?: django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput | django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    set?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    disconnect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    delete?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    update?: django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput | django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: django_admin_logUpdateManyWithWhereWithoutAuth_userInput | django_admin_logUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput> | auth_user_groupsCreateWithoutAuth_userInput[] | auth_user_groupsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_groupsCreateOrConnectWithoutAuth_userInput | auth_user_groupsCreateOrConnectWithoutAuth_userInput[]
    upsert?: auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput | auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    set?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    disconnect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    delete?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    connect?: auth_user_groupsWhereUniqueInput | auth_user_groupsWhereUniqueInput[]
    update?: auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput | auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput | auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | auth_user_user_permissionsCreateWithoutAuth_userInput[] | auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[]
    upsert?: auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput | auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    set?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    disconnect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    delete?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    connect?: auth_user_user_permissionsWhereUniqueInput | auth_user_user_permissionsWhereUniqueInput[]
    update?: auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput | auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput | auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
  }

  export type django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput> | django_admin_logCreateWithoutAuth_userInput[] | django_admin_logUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutAuth_userInput | django_admin_logCreateOrConnectWithoutAuth_userInput[]
    upsert?: django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput | django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    set?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    disconnect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    delete?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    update?: django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput | django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: django_admin_logUpdateManyWithWhereWithoutAuth_userInput | django_admin_logUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
  }

  export type auth_groupCreateNestedOneWithoutAuth_user_groupsInput = {
    create?: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_user_groupsInput
    connect?: auth_groupWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutAuth_user_groupsInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_groupsInput
    connect?: auth_userWhereUniqueInput
  }

  export type auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput = {
    create?: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_user_groupsInput
    upsert?: auth_groupUpsertWithoutAuth_user_groupsInput
    connect?: auth_groupWhereUniqueInput
    update?: XOR<XOR<auth_groupUpdateToOneWithWhereWithoutAuth_user_groupsInput, auth_groupUpdateWithoutAuth_user_groupsInput>, auth_groupUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_groupsInput
    upsert?: auth_userUpsertWithoutAuth_user_groupsInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<XOR<auth_userUpdateToOneWithWhereWithoutAuth_user_groupsInput, auth_userUpdateWithoutAuth_user_groupsInput>, auth_userUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput
    connect?: auth_permissionWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput
    connect?: auth_userWhereUniqueInput
  }

  export type auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput
    upsert?: auth_permissionUpsertWithoutAuth_user_user_permissionsInput
    connect?: auth_permissionWhereUniqueInput
    update?: XOR<XOR<auth_permissionUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput, auth_permissionUpdateWithoutAuth_user_user_permissionsInput>, auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput
    upsert?: auth_userUpsertWithoutAuth_user_user_permissionsInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<XOR<auth_userUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput, auth_userUpdateWithoutAuth_user_user_permissionsInput>, auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type django_content_typeCreateNestedOneWithoutDjango_admin_logInput = {
    create?: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutDjango_admin_logInput
    connect?: django_content_typeWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutDjango_admin_logInput = {
    create?: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutDjango_admin_logInput
    connect?: auth_userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type django_content_typeUpdateOneWithoutDjango_admin_logNestedInput = {
    create?: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutDjango_admin_logInput
    upsert?: django_content_typeUpsertWithoutDjango_admin_logInput
    disconnect?: django_content_typeWhereInput | boolean
    delete?: django_content_typeWhereInput | boolean
    connect?: django_content_typeWhereUniqueInput
    update?: XOR<XOR<django_content_typeUpdateToOneWithWhereWithoutDjango_admin_logInput, django_content_typeUpdateWithoutDjango_admin_logInput>, django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput = {
    create?: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutDjango_admin_logInput
    upsert?: auth_userUpsertWithoutDjango_admin_logInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<XOR<auth_userUpdateToOneWithWhereWithoutDjango_admin_logInput, auth_userUpdateWithoutDjango_admin_logInput>, auth_userUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auth_permissionCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | auth_permissionCreateWithoutDjango_content_typeInput[] | auth_permissionUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: auth_permissionCreateOrConnectWithoutDjango_content_typeInput | auth_permissionCreateOrConnectWithoutDjango_content_typeInput[]
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    connect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
  }

  export type django_admin_logCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | django_admin_logCreateWithoutDjango_content_typeInput[] | django_admin_logUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutDjango_content_typeInput | django_admin_logCreateOrConnectWithoutDjango_content_typeInput[]
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
  }

  export type auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | auth_permissionCreateWithoutDjango_content_typeInput[] | auth_permissionUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: auth_permissionCreateOrConnectWithoutDjango_content_typeInput | auth_permissionCreateOrConnectWithoutDjango_content_typeInput[]
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    connect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
  }

  export type django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | django_admin_logCreateWithoutDjango_content_typeInput[] | django_admin_logUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutDjango_content_typeInput | django_admin_logCreateOrConnectWithoutDjango_content_typeInput[]
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
  }

  export type auth_permissionUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | auth_permissionCreateWithoutDjango_content_typeInput[] | auth_permissionUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: auth_permissionCreateOrConnectWithoutDjango_content_typeInput | auth_permissionCreateOrConnectWithoutDjango_content_typeInput[]
    upsert?: auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput | auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput[]
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    set?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    disconnect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    delete?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    connect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    update?: auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput | auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput[]
    updateMany?: auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput | auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput[]
    deleteMany?: auth_permissionScalarWhereInput | auth_permissionScalarWhereInput[]
  }

  export type django_admin_logUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | django_admin_logCreateWithoutDjango_content_typeInput[] | django_admin_logUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutDjango_content_typeInput | django_admin_logCreateOrConnectWithoutDjango_content_typeInput[]
    upsert?: django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput | django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput[]
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    set?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    disconnect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    delete?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    update?: django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput | django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput[]
    updateMany?: django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput | django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput[]
    deleteMany?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
  }

  export type auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | auth_permissionCreateWithoutDjango_content_typeInput[] | auth_permissionUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: auth_permissionCreateOrConnectWithoutDjango_content_typeInput | auth_permissionCreateOrConnectWithoutDjango_content_typeInput[]
    upsert?: auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput | auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput[]
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    set?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    disconnect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    delete?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    connect?: auth_permissionWhereUniqueInput | auth_permissionWhereUniqueInput[]
    update?: auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput | auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput[]
    updateMany?: auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput | auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput[]
    deleteMany?: auth_permissionScalarWhereInput | auth_permissionScalarWhereInput[]
  }

  export type django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | django_admin_logCreateWithoutDjango_content_typeInput[] | django_admin_logUncheckedCreateWithoutDjango_content_typeInput[]
    connectOrCreate?: django_admin_logCreateOrConnectWithoutDjango_content_typeInput | django_admin_logCreateOrConnectWithoutDjango_content_typeInput[]
    upsert?: django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput | django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput[]
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    set?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    disconnect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    delete?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    connect?: django_admin_logWhereUniqueInput | django_admin_logWhereUniqueInput[]
    update?: django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput | django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput[]
    updateMany?: django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput | django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput[]
    deleteMany?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_detailsInput
    connect?: productsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneRequiredWithoutOrder_detailsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput
    upsert?: ordersUpsertWithoutOrder_detailsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_detailsInput, ordersUpdateWithoutOrder_detailsInput>, ordersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_detailsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_detailsInput
    upsert?: productsUpsertWithoutOrder_detailsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_detailsInput, productsUpdateWithoutOrder_detailsInput>, productsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type order_detailsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type customersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    connect?: customersWhereUniqueInput
  }

  export type order_detailsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type order_detailsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutOrdersInput | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutOrdersInput | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutOrdersInput | order_detailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type customersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    upsert?: customersUpsertWithoutOrdersInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutOrdersInput, customersUpdateWithoutOrdersInput>, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_detailsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutOrdersInput | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutOrdersInput | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutOrdersInput | order_detailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type order_detailsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type order_detailsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type order_detailsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutProductsInput | order_detailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutProductsInput | order_detailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutProductsInput | order_detailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type order_detailsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutProductsInput | order_detailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutProductsInput | order_detailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutProductsInput | order_detailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type auth_group_permissionsCreateWithoutAuth_groupInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_group_permissionsCreateOrConnectWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    create: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsCreateManyAuth_groupInputEnvelope = {
    data: auth_group_permissionsCreateManyAuth_groupInput | auth_group_permissionsCreateManyAuth_groupInput[]
    skipDuplicates?: boolean
  }

  export type auth_user_groupsCreateWithoutAuth_groupInput = {
    id?: bigint | number
    auth_user: auth_userCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_user_groupsCreateOrConnectWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    create: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_user_groupsCreateManyAuth_groupInputEnvelope = {
    data: auth_user_groupsCreateManyAuth_groupInput | auth_user_groupsCreateManyAuth_groupInput[]
    skipDuplicates?: boolean
  }

  export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    update: XOR<auth_group_permissionsUpdateWithoutAuth_groupInput, auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>
    create: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    data: XOR<auth_group_permissionsUpdateWithoutAuth_groupInput, auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: auth_group_permissionsScalarWhereInput
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupInput>
  }

  export type auth_group_permissionsScalarWhereInput = {
    AND?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
    OR?: auth_group_permissionsScalarWhereInput[]
    NOT?: auth_group_permissionsScalarWhereInput | auth_group_permissionsScalarWhereInput[]
    id?: BigIntFilter<"auth_group_permissions"> | bigint | number
    group_id?: IntFilter<"auth_group_permissions"> | number
    permission_id?: IntFilter<"auth_group_permissions"> | number
  }

  export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    update: XOR<auth_user_groupsUpdateWithoutAuth_groupInput, auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>
    create: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    data: XOR<auth_user_groupsUpdateWithoutAuth_groupInput, auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>
  }

  export type auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: auth_user_groupsScalarWhereInput
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyWithoutAuth_groupInput>
  }

  export type auth_user_groupsScalarWhereInput = {
    AND?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
    OR?: auth_user_groupsScalarWhereInput[]
    NOT?: auth_user_groupsScalarWhereInput | auth_user_groupsScalarWhereInput[]
    id?: BigIntFilter<"auth_user_groups"> | bigint | number
    user_id?: IntFilter<"auth_user_groups"> | number
    group_id?: IntFilter<"auth_user_groups"> | number
  }

  export type auth_permissionCreateWithoutAuth_group_permissionsInput = {
    name: string
    codename: string
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupCreateWithoutAuth_group_permissionsInput = {
    name: string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateWithoutAuth_group_permissionsInput = {
    id?: number
    name: string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupCreateOrConnectWithoutAuth_group_permissionsInput = {
    where: auth_groupWhereUniqueInput
    create: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_permissionUpsertWithoutAuth_group_permissionsInput = {
    update: XOR<auth_permissionUpdateWithoutAuth_group_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>
    create: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
    where?: auth_permissionWhereInput
  }

  export type auth_permissionUpdateToOneWithWhereWithoutAuth_group_permissionsInput = {
    where?: auth_permissionWhereInput
    data: XOR<auth_permissionUpdateWithoutAuth_group_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_permissionUpdateWithoutAuth_group_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_groupUpsertWithoutAuth_group_permissionsInput = {
    update: XOR<auth_groupUpdateWithoutAuth_group_permissionsInput, auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput>
    create: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
    where?: auth_groupWhereInput
  }

  export type auth_groupUpdateToOneWithWhereWithoutAuth_group_permissionsInput = {
    where?: auth_groupWhereInput
    data: XOR<auth_groupUpdateWithoutAuth_group_permissionsInput, auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupUpdateWithoutAuth_group_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_group_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    create: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: auth_group_permissionsCreateManyAuth_permissionInput | auth_group_permissionsCreateManyAuth_permissionInput[]
    skipDuplicates?: boolean
  }

  export type django_content_typeCreateWithoutAuth_permissionInput = {
    app_label: string
    model: string
    django_admin_log?: django_admin_logCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateWithoutAuth_permissionInput = {
    id?: number
    app_label: string
    model: string
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeCreateOrConnectWithoutAuth_permissionInput = {
    where: django_content_typeWhereUniqueInput
    create: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    auth_user: auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: auth_user_user_permissionsCreateManyAuth_permissionInput | auth_user_user_permissionsCreateManyAuth_permissionInput[]
    skipDuplicates?: boolean
  }

  export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    update: XOR<auth_group_permissionsUpdateWithoutAuth_permissionInput, auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    data: XOR<auth_group_permissionsUpdateWithoutAuth_permissionInput, auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: auth_group_permissionsScalarWhereInput
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionInput>
  }

  export type django_content_typeUpsertWithoutAuth_permissionInput = {
    update: XOR<django_content_typeUpdateWithoutAuth_permissionInput, django_content_typeUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
    where?: django_content_typeWhereInput
  }

  export type django_content_typeUpdateToOneWithWhereWithoutAuth_permissionInput = {
    where?: django_content_typeWhereInput
    data: XOR<django_content_typeUpdateWithoutAuth_permissionInput, django_content_typeUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type django_content_typeUpdateWithoutAuth_permissionInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    django_admin_log?: django_admin_logUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateWithoutAuth_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    update: XOR<auth_user_user_permissionsUpdateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    data: XOR<auth_user_user_permissionsUpdateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsScalarWhereInput
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsScalarWhereInput = {
    AND?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
    OR?: auth_user_user_permissionsScalarWhereInput[]
    NOT?: auth_user_user_permissionsScalarWhereInput | auth_user_user_permissionsScalarWhereInput[]
    id?: BigIntFilter<"auth_user_user_permissions"> | bigint | number
    user_id?: IntFilter<"auth_user_user_permissions"> | number
    permission_id?: IntFilter<"auth_user_user_permissions"> | number
  }

  export type auth_user_groupsCreateWithoutAuth_userInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_groupsCreateOrConnectWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    create: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_groupsCreateManyAuth_userInputEnvelope = {
    data: auth_user_groupsCreateManyAuth_userInput | auth_user_groupsCreateManyAuth_userInput[]
    skipDuplicates?: boolean
  }

  export type auth_user_user_permissionsCreateWithoutAuth_userInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsCreateManyAuth_userInputEnvelope = {
    data: auth_user_user_permissionsCreateManyAuth_userInput | auth_user_user_permissionsCreateManyAuth_userInput[]
    skipDuplicates?: boolean
  }

  export type django_admin_logCreateWithoutAuth_userInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    django_content_type?: django_content_typeCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateWithoutAuth_userInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
  }

  export type django_admin_logCreateOrConnectWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    create: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput>
  }

  export type django_admin_logCreateManyAuth_userInputEnvelope = {
    data: django_admin_logCreateManyAuth_userInput | django_admin_logCreateManyAuth_userInput[]
    skipDuplicates?: boolean
  }

  export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    update: XOR<auth_user_groupsUpdateWithoutAuth_userInput, auth_user_groupsUncheckedUpdateWithoutAuth_userInput>
    create: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    data: XOR<auth_user_groupsUpdateWithoutAuth_userInput, auth_user_groupsUncheckedUpdateWithoutAuth_userInput>
  }

  export type auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput = {
    where: auth_user_groupsScalarWhereInput
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    update: XOR<auth_user_user_permissionsUpdateWithoutAuth_userInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    data: XOR<auth_user_user_permissionsUpdateWithoutAuth_userInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput = {
    where: auth_user_user_permissionsScalarWhereInput
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userInput>
  }

  export type django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    update: XOR<django_admin_logUpdateWithoutAuth_userInput, django_admin_logUncheckedUpdateWithoutAuth_userInput>
    create: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput>
  }

  export type django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    data: XOR<django_admin_logUpdateWithoutAuth_userInput, django_admin_logUncheckedUpdateWithoutAuth_userInput>
  }

  export type django_admin_logUpdateManyWithWhereWithoutAuth_userInput = {
    where: django_admin_logScalarWhereInput
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyWithoutAuth_userInput>
  }

  export type django_admin_logScalarWhereInput = {
    AND?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
    OR?: django_admin_logScalarWhereInput[]
    NOT?: django_admin_logScalarWhereInput | django_admin_logScalarWhereInput[]
    id?: IntFilter<"django_admin_log"> | number
    action_time?: DateTimeFilter<"django_admin_log"> | Date | string
    object_id?: StringNullableFilter<"django_admin_log"> | string | null
    object_repr?: StringFilter<"django_admin_log"> | string
    action_flag?: IntFilter<"django_admin_log"> | number
    change_message?: StringFilter<"django_admin_log"> | string
    content_type_id?: IntNullableFilter<"django_admin_log"> | number | null
    user_id?: IntFilter<"django_admin_log"> | number
  }

  export type auth_groupCreateWithoutAuth_user_groupsInput = {
    name: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateWithoutAuth_user_groupsInput = {
    id?: number
    name: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupCreateOrConnectWithoutAuth_user_groupsInput = {
    where: auth_groupWhereUniqueInput
    create: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_userCreateWithoutAuth_user_groupsInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutAuth_user_groupsInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutAuth_user_groupsInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_groupUpsertWithoutAuth_user_groupsInput = {
    update: XOR<auth_groupUpdateWithoutAuth_user_groupsInput, auth_groupUncheckedUpdateWithoutAuth_user_groupsInput>
    create: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
    where?: auth_groupWhereInput
  }

  export type auth_groupUpdateToOneWithWhereWithoutAuth_user_groupsInput = {
    where?: auth_groupWhereInput
    data: XOR<auth_groupUpdateWithoutAuth_user_groupsInput, auth_groupUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_groupUpdateWithoutAuth_user_groupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateWithoutAuth_user_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_userUpsertWithoutAuth_user_groupsInput = {
    update: XOR<auth_userUpdateWithoutAuth_user_groupsInput, auth_userUncheckedUpdateWithoutAuth_user_groupsInput>
    create: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
    where?: auth_userWhereInput
  }

  export type auth_userUpdateToOneWithWhereWithoutAuth_user_groupsInput = {
    where?: auth_userWhereInput
    data: XOR<auth_userUpdateWithoutAuth_user_groupsInput, auth_userUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_userUpdateWithoutAuth_user_groupsInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutAuth_user_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_permissionCreateWithoutAuth_user_user_permissionsInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userCreateWithoutAuth_user_user_permissionsInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_permissionUpsertWithoutAuth_user_user_permissionsInput = {
    update: XOR<auth_permissionUpdateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>
    create: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
    where?: auth_permissionWhereInput
  }

  export type auth_permissionUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput = {
    where?: auth_permissionWhereInput
    data: XOR<auth_permissionUpdateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_permissionUpdateWithoutAuth_user_user_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_userUpsertWithoutAuth_user_user_permissionsInput = {
    update: XOR<auth_userUpdateWithoutAuth_user_user_permissionsInput, auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>
    create: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
    where?: auth_userWhereInput
  }

  export type auth_userUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput = {
    where?: auth_userWhereInput
    data: XOR<auth_userUpdateWithoutAuth_user_user_permissionsInput, auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userUpdateWithoutAuth_user_user_permissionsInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type ordersCreateWithoutCustomersInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    order_details?: order_detailsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomersInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    order_details?: order_detailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersCreateManyCustomersInputEnvelope = {
    data: ordersCreateManyCustomersInput | ordersCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: BigIntFilter<"orders"> | bigint | number
    registration_date?: DateTimeFilter<"orders"> | Date | string
    status?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    updated_at?: DateTimeFilter<"orders"> | Date | string
    customer_id?: BigIntFilter<"orders"> | bigint | number
  }

  export type django_content_typeCreateWithoutDjango_admin_logInput = {
    app_label: string
    model: string
    auth_permission?: auth_permissionCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number
    app_label: string
    model: string
    auth_permission?: auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeCreateOrConnectWithoutDjango_admin_logInput = {
    where: django_content_typeWhereUniqueInput
    create: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type auth_userCreateWithoutDjango_admin_logInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutDjango_admin_logInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type django_content_typeUpsertWithoutDjango_admin_logInput = {
    update: XOR<django_content_typeUpdateWithoutDjango_admin_logInput, django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>
    create: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
    where?: django_content_typeWhereInput
  }

  export type django_content_typeUpdateToOneWithWhereWithoutDjango_admin_logInput = {
    where?: django_content_typeWhereInput
    data: XOR<django_content_typeUpdateWithoutDjango_admin_logInput, django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type django_content_typeUpdateWithoutDjango_admin_logInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type auth_userUpsertWithoutDjango_admin_logInput = {
    update: XOR<auth_userUpdateWithoutDjango_admin_logInput, auth_userUncheckedUpdateWithoutDjango_admin_logInput>
    create: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
    where?: auth_userWhereInput
  }

  export type auth_userUpdateToOneWithWhereWithoutDjango_admin_logInput = {
    where?: auth_userWhereInput
    data: XOR<auth_userUpdateWithoutDjango_admin_logInput, auth_userUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type auth_userUpdateWithoutDjango_admin_logInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_permissionCreateWithoutDjango_content_typeInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type auth_permissionCreateManyDjango_content_typeInputEnvelope = {
    data: auth_permissionCreateManyDjango_content_typeInput | auth_permissionCreateManyDjango_content_typeInput[]
    skipDuplicates?: boolean
  }

  export type django_admin_logCreateWithoutDjango_content_typeInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    auth_user: auth_userCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    user_id: number
  }

  export type django_admin_logCreateOrConnectWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    create: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type django_admin_logCreateManyDjango_content_typeInputEnvelope = {
    data: django_admin_logCreateManyDjango_content_typeInput | django_admin_logCreateManyDjango_content_typeInput[]
    skipDuplicates?: boolean
  }

  export type auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    update: XOR<auth_permissionUpdateWithoutDjango_content_typeInput, auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>
    create: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    data: XOR<auth_permissionUpdateWithoutDjango_content_typeInput, auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>
  }

  export type auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: auth_permissionScalarWhereInput
    data: XOR<auth_permissionUpdateManyMutationInput, auth_permissionUncheckedUpdateManyWithoutDjango_content_typeInput>
  }

  export type auth_permissionScalarWhereInput = {
    AND?: auth_permissionScalarWhereInput | auth_permissionScalarWhereInput[]
    OR?: auth_permissionScalarWhereInput[]
    NOT?: auth_permissionScalarWhereInput | auth_permissionScalarWhereInput[]
    id?: IntFilter<"auth_permission"> | number
    name?: StringFilter<"auth_permission"> | string
    content_type_id?: IntFilter<"auth_permission"> | number
    codename?: StringFilter<"auth_permission"> | string
  }

  export type django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    update: XOR<django_admin_logUpdateWithoutDjango_content_typeInput, django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>
    create: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    data: XOR<django_admin_logUpdateWithoutDjango_content_typeInput, django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>
  }

  export type django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: django_admin_logScalarWhereInput
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyWithoutDjango_content_typeInput>
  }

  export type ordersCreateWithoutOrder_detailsInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    customers: customersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_detailsInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
    customer_id: bigint | number
  }

  export type ordersCreateOrConnectWithoutOrder_detailsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
  }

  export type productsCreateWithoutOrder_detailsInput = {
    id?: bigint | number
    name: string
    price: number
    stock: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type productsUncheckedCreateWithoutOrder_detailsInput = {
    id?: bigint | number
    name: string
    price: number
    stock: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type productsCreateOrConnectWithoutOrder_detailsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
  }

  export type ordersUpsertWithoutOrder_detailsInput = {
    update: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type ordersUpdateWithoutOrder_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: customersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type productsUpsertWithoutOrder_detailsInput = {
    update: XOR<productsUpdateWithoutOrder_detailsInput, productsUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_detailsInput, productsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type productsUpdateWithoutOrder_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateWithoutOrder_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailsCreateWithoutOrdersInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    products: productsCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    product_id: bigint | number
  }

  export type order_detailsCreateOrConnectWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsCreateManyOrdersInputEnvelope = {
    data: order_detailsCreateManyOrdersInput | order_detailsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutOrdersInput = {
    id?: bigint | number
    name: string
    email: string
    address: string
    registration_date: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type customersUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number
    name: string
    email: string
    address: string
    registration_date: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type customersCreateOrConnectWithoutOrdersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    update: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    data: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_detailsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_detailsScalarWhereInput
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_detailsScalarWhereInput = {
    AND?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
    OR?: order_detailsScalarWhereInput[]
    NOT?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
    id?: BigIntFilter<"order_details"> | bigint | number
    quantity?: IntFilter<"order_details"> | number
    unit_price?: FloatFilter<"order_details"> | number
    created_at?: DateTimeFilter<"order_details"> | Date | string
    updated_at?: DateTimeFilter<"order_details"> | Date | string
    order_id?: BigIntFilter<"order_details"> | bigint | number
    product_id?: BigIntFilter<"order_details"> | bigint | number
  }

  export type customersUpsertWithoutOrdersInput = {
    update: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type customersUpdateWithoutOrdersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateWithoutOrdersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailsCreateWithoutProductsInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    orders: ordersCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateWithoutProductsInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    order_id: bigint | number
  }

  export type order_detailsCreateOrConnectWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    create: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput>
  }

  export type order_detailsCreateManyProductsInputEnvelope = {
    data: order_detailsCreateManyProductsInput | order_detailsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_detailsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    update: XOR<order_detailsUpdateWithoutProductsInput, order_detailsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput>
  }

  export type order_detailsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    data: XOR<order_detailsUpdateWithoutProductsInput, order_detailsUncheckedUpdateWithoutProductsInput>
  }

  export type order_detailsUpdateManyWithWhereWithoutProductsInput = {
    where: order_detailsScalarWhereInput
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyWithoutProductsInput>
  }

  export type auth_group_permissionsCreateManyAuth_groupInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_user_groupsCreateManyAuth_groupInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_group_permissionsUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_user_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_group_permissionsUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsCreateManyAuth_userInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_user_permissionsCreateManyAuth_userInput = {
    id?: bigint | number
    permission_id: number
  }

  export type django_admin_logCreateManyAuth_userInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
  }

  export type auth_user_groupsUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logUpdateWithoutAuth_userInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateWithoutAuth_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type django_admin_logUncheckedUpdateManyWithoutAuth_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ordersCreateManyCustomersInput = {
    id?: bigint | number
    registration_date: Date | string
    status: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type ordersUpdateWithoutCustomersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: order_detailsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: order_detailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_permissionCreateManyDjango_content_typeInput = {
    id?: number
    name: string
    codename: string
  }

  export type django_admin_logCreateManyDjango_content_typeInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    user_id: number
  }

  export type auth_permissionUpdateWithoutDjango_content_typeInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateManyWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type django_admin_logUpdateWithoutDjango_content_typeInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    auth_user?: auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logUncheckedUpdateManyWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_detailsCreateManyOrdersInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    product_id: bigint | number
  }

  export type order_detailsUpdateWithoutOrdersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateWithoutOrdersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type order_detailsUncheckedUpdateManyWithoutOrdersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type order_detailsCreateManyProductsInput = {
    id?: bigint | number
    quantity: number
    unit_price: number
    created_at: Date | string
    updated_at: Date | string
    order_id: bigint | number
  }

  export type order_detailsUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type order_detailsUncheckedUpdateManyWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}