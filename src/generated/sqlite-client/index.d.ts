
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Payslip
 * 
 */
export type Payslip = $Result.DefaultSelection<Prisma.$PayslipPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model OnboardingStatus
 * 
 */
export type OnboardingStatus = $Result.DefaultSelection<Prisma.$OnboardingStatusPayload>
/**
 * Model StepProgress
 * 
 */
export type StepProgress = $Result.DefaultSelection<Prisma.$StepProgressPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Timesheet
 * 
 */
export type Timesheet = $Result.DefaultSelection<Prisma.$TimesheetPayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model AvailabilityRequest
 * 
 */
export type AvailabilityRequest = $Result.DefaultSelection<Prisma.$AvailabilityRequestPayload>
/**
 * Model AvailabilityDay
 * 
 */
export type AvailabilityDay = $Result.DefaultSelection<Prisma.$AvailabilityDayPayload>
/**
 * Model AvailabilityResponse
 * 
 */
export type AvailabilityResponse = $Result.DefaultSelection<Prisma.$AvailabilityResponsePayload>
/**
 * Model StaffPlanDay
 * 
 */
export type StaffPlanDay = $Result.DefaultSelection<Prisma.$StaffPlanDayPayload>
/**
 * Model StaffPlanRow
 * 
 */
export type StaffPlanRow = $Result.DefaultSelection<Prisma.$StaffPlanRowPayload>
/**
 * Model ShiftTemplate
 * 
 */
export type ShiftTemplate = $Result.DefaultSelection<Prisma.$ShiftTemplatePayload>
/**
 * Model ShiftTemplateRow
 * 
 */
export type ShiftTemplateRow = $Result.DefaultSelection<Prisma.$ShiftTemplateRowPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.payslip`: Exposes CRUD operations for the **Payslip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payslips
    * const payslips = await prisma.payslip.findMany()
    * ```
    */
  get payslip(): Prisma.PayslipDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.onboardingStatus`: Exposes CRUD operations for the **OnboardingStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnboardingStatuses
    * const onboardingStatuses = await prisma.onboardingStatus.findMany()
    * ```
    */
  get onboardingStatus(): Prisma.OnboardingStatusDelegate<ExtArgs>;

  /**
   * `prisma.stepProgress`: Exposes CRUD operations for the **StepProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepProgresses
    * const stepProgresses = await prisma.stepProgress.findMany()
    * ```
    */
  get stepProgress(): Prisma.StepProgressDelegate<ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs>;

  /**
   * `prisma.timesheet`: Exposes CRUD operations for the **Timesheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timesheets
    * const timesheets = await prisma.timesheet.findMany()
    * ```
    */
  get timesheet(): Prisma.TimesheetDelegate<ExtArgs>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs>;

  /**
   * `prisma.availabilityRequest`: Exposes CRUD operations for the **AvailabilityRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityRequests
    * const availabilityRequests = await prisma.availabilityRequest.findMany()
    * ```
    */
  get availabilityRequest(): Prisma.AvailabilityRequestDelegate<ExtArgs>;

  /**
   * `prisma.availabilityDay`: Exposes CRUD operations for the **AvailabilityDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityDays
    * const availabilityDays = await prisma.availabilityDay.findMany()
    * ```
    */
  get availabilityDay(): Prisma.AvailabilityDayDelegate<ExtArgs>;

  /**
   * `prisma.availabilityResponse`: Exposes CRUD operations for the **AvailabilityResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityResponses
    * const availabilityResponses = await prisma.availabilityResponse.findMany()
    * ```
    */
  get availabilityResponse(): Prisma.AvailabilityResponseDelegate<ExtArgs>;

  /**
   * `prisma.staffPlanDay`: Exposes CRUD operations for the **StaffPlanDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffPlanDays
    * const staffPlanDays = await prisma.staffPlanDay.findMany()
    * ```
    */
  get staffPlanDay(): Prisma.StaffPlanDayDelegate<ExtArgs>;

  /**
   * `prisma.staffPlanRow`: Exposes CRUD operations for the **StaffPlanRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffPlanRows
    * const staffPlanRows = await prisma.staffPlanRow.findMany()
    * ```
    */
  get staffPlanRow(): Prisma.StaffPlanRowDelegate<ExtArgs>;

  /**
   * `prisma.shiftTemplate`: Exposes CRUD operations for the **ShiftTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftTemplates
    * const shiftTemplates = await prisma.shiftTemplate.findMany()
    * ```
    */
  get shiftTemplate(): Prisma.ShiftTemplateDelegate<ExtArgs>;

  /**
   * `prisma.shiftTemplateRow`: Exposes CRUD operations for the **ShiftTemplateRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftTemplateRows
    * const shiftTemplateRows = await prisma.shiftTemplateRow.findMany()
    * ```
    */
  get shiftTemplateRow(): Prisma.ShiftTemplateRowDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Payslip: 'Payslip',
    VerificationToken: 'VerificationToken',
    OnboardingStatus: 'OnboardingStatus',
    StepProgress: 'StepProgress',
    Document: 'Document',
    Timesheet: 'Timesheet',
    Benefit: 'Benefit',
    AvailabilityRequest: 'AvailabilityRequest',
    AvailabilityDay: 'AvailabilityDay',
    AvailabilityResponse: 'AvailabilityResponse',
    StaffPlanDay: 'StaffPlanDay',
    StaffPlanRow: 'StaffPlanRow',
    ShiftTemplate: 'ShiftTemplate',
    ShiftTemplateRow: 'ShiftTemplateRow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "session" | "user" | "payslip" | "verificationToken" | "onboardingStatus" | "stepProgress" | "document" | "timesheet" | "benefit" | "availabilityRequest" | "availabilityDay" | "availabilityResponse" | "staffPlanDay" | "staffPlanRow" | "shiftTemplate" | "shiftTemplateRow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Payslip: {
        payload: Prisma.$PayslipPayload<ExtArgs>
        fields: Prisma.PayslipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayslipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayslipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findFirst: {
            args: Prisma.PayslipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayslipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findMany: {
            args: Prisma.PayslipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>[]
          }
          create: {
            args: Prisma.PayslipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          createMany: {
            args: Prisma.PayslipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayslipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>[]
          }
          delete: {
            args: Prisma.PayslipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          update: {
            args: Prisma.PayslipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          deleteMany: {
            args: Prisma.PayslipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayslipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayslipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          aggregate: {
            args: Prisma.PayslipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayslip>
          }
          groupBy: {
            args: Prisma.PayslipGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayslipGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayslipCountArgs<ExtArgs>
            result: $Utils.Optional<PayslipCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      OnboardingStatus: {
        payload: Prisma.$OnboardingStatusPayload<ExtArgs>
        fields: Prisma.OnboardingStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnboardingStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnboardingStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          findFirst: {
            args: Prisma.OnboardingStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnboardingStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          findMany: {
            args: Prisma.OnboardingStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>[]
          }
          create: {
            args: Prisma.OnboardingStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          createMany: {
            args: Prisma.OnboardingStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnboardingStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>[]
          }
          delete: {
            args: Prisma.OnboardingStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          update: {
            args: Prisma.OnboardingStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          deleteMany: {
            args: Prisma.OnboardingStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnboardingStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OnboardingStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingStatusPayload>
          }
          aggregate: {
            args: Prisma.OnboardingStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnboardingStatus>
          }
          groupBy: {
            args: Prisma.OnboardingStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnboardingStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnboardingStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OnboardingStatusCountAggregateOutputType> | number
          }
        }
      }
      StepProgress: {
        payload: Prisma.$StepProgressPayload<ExtArgs>
        fields: Prisma.StepProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          findFirst: {
            args: Prisma.StepProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          findMany: {
            args: Prisma.StepProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>[]
          }
          create: {
            args: Prisma.StepProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          createMany: {
            args: Prisma.StepProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>[]
          }
          delete: {
            args: Prisma.StepProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          update: {
            args: Prisma.StepProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          deleteMany: {
            args: Prisma.StepProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StepProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepProgressPayload>
          }
          aggregate: {
            args: Prisma.StepProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepProgress>
          }
          groupBy: {
            args: Prisma.StepProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepProgressCountArgs<ExtArgs>
            result: $Utils.Optional<StepProgressCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Timesheet: {
        payload: Prisma.$TimesheetPayload<ExtArgs>
        fields: Prisma.TimesheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findFirst: {
            args: Prisma.TimesheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findMany: {
            args: Prisma.TimesheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          create: {
            args: Prisma.TimesheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          createMany: {
            args: Prisma.TimesheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimesheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          delete: {
            args: Prisma.TimesheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          update: {
            args: Prisma.TimesheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          deleteMany: {
            args: Prisma.TimesheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimesheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimesheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          aggregate: {
            args: Prisma.TimesheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimesheet>
          }
          groupBy: {
            args: Prisma.TimesheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimesheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimesheetCountArgs<ExtArgs>
            result: $Utils.Optional<TimesheetCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityRequest: {
        payload: Prisma.$AvailabilityRequestPayload<ExtArgs>
        fields: Prisma.AvailabilityRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          findMany: {
            args: Prisma.AvailabilityRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>[]
          }
          create: {
            args: Prisma.AvailabilityRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          createMany: {
            args: Prisma.AvailabilityRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          update: {
            args: Prisma.AvailabilityRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRequestPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityRequest>
          }
          groupBy: {
            args: Prisma.AvailabilityRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityRequestCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityDay: {
        payload: Prisma.$AvailabilityDayPayload<ExtArgs>
        fields: Prisma.AvailabilityDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          findMany: {
            args: Prisma.AvailabilityDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>[]
          }
          create: {
            args: Prisma.AvailabilityDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          createMany: {
            args: Prisma.AvailabilityDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          update: {
            args: Prisma.AvailabilityDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityDayPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityDay>
          }
          groupBy: {
            args: Prisma.AvailabilityDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityDayCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityDayCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityResponse: {
        payload: Prisma.$AvailabilityResponsePayload<ExtArgs>
        fields: Prisma.AvailabilityResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          findFirst: {
            args: Prisma.AvailabilityResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          findMany: {
            args: Prisma.AvailabilityResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>[]
          }
          create: {
            args: Prisma.AvailabilityResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          createMany: {
            args: Prisma.AvailabilityResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>[]
          }
          delete: {
            args: Prisma.AvailabilityResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          update: {
            args: Prisma.AvailabilityResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityResponsePayload>
          }
          aggregate: {
            args: Prisma.AvailabilityResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityResponse>
          }
          groupBy: {
            args: Prisma.AvailabilityResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityResponseCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityResponseCountAggregateOutputType> | number
          }
        }
      }
      StaffPlanDay: {
        payload: Prisma.$StaffPlanDayPayload<ExtArgs>
        fields: Prisma.StaffPlanDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffPlanDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffPlanDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          findFirst: {
            args: Prisma.StaffPlanDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffPlanDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          findMany: {
            args: Prisma.StaffPlanDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>[]
          }
          create: {
            args: Prisma.StaffPlanDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          createMany: {
            args: Prisma.StaffPlanDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffPlanDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>[]
          }
          delete: {
            args: Prisma.StaffPlanDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          update: {
            args: Prisma.StaffPlanDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          deleteMany: {
            args: Prisma.StaffPlanDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffPlanDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffPlanDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanDayPayload>
          }
          aggregate: {
            args: Prisma.StaffPlanDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffPlanDay>
          }
          groupBy: {
            args: Prisma.StaffPlanDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffPlanDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffPlanDayCountArgs<ExtArgs>
            result: $Utils.Optional<StaffPlanDayCountAggregateOutputType> | number
          }
        }
      }
      StaffPlanRow: {
        payload: Prisma.$StaffPlanRowPayload<ExtArgs>
        fields: Prisma.StaffPlanRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffPlanRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffPlanRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          findFirst: {
            args: Prisma.StaffPlanRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffPlanRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          findMany: {
            args: Prisma.StaffPlanRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>[]
          }
          create: {
            args: Prisma.StaffPlanRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          createMany: {
            args: Prisma.StaffPlanRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffPlanRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>[]
          }
          delete: {
            args: Prisma.StaffPlanRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          update: {
            args: Prisma.StaffPlanRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          deleteMany: {
            args: Prisma.StaffPlanRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffPlanRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffPlanRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPlanRowPayload>
          }
          aggregate: {
            args: Prisma.StaffPlanRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffPlanRow>
          }
          groupBy: {
            args: Prisma.StaffPlanRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffPlanRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffPlanRowCountArgs<ExtArgs>
            result: $Utils.Optional<StaffPlanRowCountAggregateOutputType> | number
          }
        }
      }
      ShiftTemplate: {
        payload: Prisma.$ShiftTemplatePayload<ExtArgs>
        fields: Prisma.ShiftTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          findFirst: {
            args: Prisma.ShiftTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          findMany: {
            args: Prisma.ShiftTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[]
          }
          create: {
            args: Prisma.ShiftTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          createMany: {
            args: Prisma.ShiftTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[]
          }
          delete: {
            args: Prisma.ShiftTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          update: {
            args: Prisma.ShiftTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ShiftTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShiftTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          aggregate: {
            args: Prisma.ShiftTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftTemplate>
          }
          groupBy: {
            args: Prisma.ShiftTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateCountAggregateOutputType> | number
          }
        }
      }
      ShiftTemplateRow: {
        payload: Prisma.$ShiftTemplateRowPayload<ExtArgs>
        fields: Prisma.ShiftTemplateRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftTemplateRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftTemplateRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          findFirst: {
            args: Prisma.ShiftTemplateRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftTemplateRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          findMany: {
            args: Prisma.ShiftTemplateRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>[]
          }
          create: {
            args: Prisma.ShiftTemplateRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          createMany: {
            args: Prisma.ShiftTemplateRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftTemplateRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>[]
          }
          delete: {
            args: Prisma.ShiftTemplateRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          update: {
            args: Prisma.ShiftTemplateRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          deleteMany: {
            args: Prisma.ShiftTemplateRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftTemplateRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShiftTemplateRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRowPayload>
          }
          aggregate: {
            args: Prisma.ShiftTemplateRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftTemplateRow>
          }
          groupBy: {
            args: Prisma.ShiftTemplateRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftTemplateRowCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateRowCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    documents: number
    payslips: number
    sessions: number
    stepProgresses: number
    timesheets: number
    availabilityResponses: number
    staffPlanRows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    payslips?: boolean | UserCountOutputTypeCountPayslipsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    stepProgresses?: boolean | UserCountOutputTypeCountStepProgressesArgs
    timesheets?: boolean | UserCountOutputTypeCountTimesheetsArgs
    availabilityResponses?: boolean | UserCountOutputTypeCountAvailabilityResponsesArgs
    staffPlanRows?: boolean | UserCountOutputTypeCountStaffPlanRowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimesheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffPlanRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPlanRowWhereInput
  }


  /**
   * Count Type AvailabilityRequestCountOutputType
   */

  export type AvailabilityRequestCountOutputType = {
    days: number
  }

  export type AvailabilityRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | AvailabilityRequestCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * AvailabilityRequestCountOutputType without action
   */
  export type AvailabilityRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequestCountOutputType
     */
    select?: AvailabilityRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailabilityRequestCountOutputType without action
   */
  export type AvailabilityRequestCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityDayWhereInput
  }


  /**
   * Count Type AvailabilityDayCountOutputType
   */

  export type AvailabilityDayCountOutputType = {
    responses: number
  }

  export type AvailabilityDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | AvailabilityDayCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * AvailabilityDayCountOutputType without action
   */
  export type AvailabilityDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDayCountOutputType
     */
    select?: AvailabilityDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailabilityDayCountOutputType without action
   */
  export type AvailabilityDayCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityResponseWhereInput
  }


  /**
   * Count Type StaffPlanDayCountOutputType
   */

  export type StaffPlanDayCountOutputType = {
    rows: number
  }

  export type StaffPlanDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | StaffPlanDayCountOutputTypeCountRowsArgs
  }

  // Custom InputTypes
  /**
   * StaffPlanDayCountOutputType without action
   */
  export type StaffPlanDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDayCountOutputType
     */
    select?: StaffPlanDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffPlanDayCountOutputType without action
   */
  export type StaffPlanDayCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPlanRowWhereInput
  }


  /**
   * Count Type ShiftTemplateCountOutputType
   */

  export type ShiftTemplateCountOutputType = {
    rows: number
  }

  export type ShiftTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | ShiftTemplateCountOutputTypeCountRowsArgs
  }

  // Custom InputTypes
  /**
   * ShiftTemplateCountOutputType without action
   */
  export type ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateCountOutputType
     */
    select?: ShiftTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftTemplateCountOutputType without action
   */
  export type ShiftTemplateCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateRowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    hourlyWage: number | null
  }

  export type UserSumAggregateOutputType = {
    hourlyWage: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    jobRole: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    startDate: Date | null
    hourlyWage: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    jobRole: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    startDate: Date | null
    hourlyWage: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    jobRole: number
    isArchived: number
    createdAt: number
    updatedAt: number
    startDate: number
    hourlyWage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    hourlyWage?: true
  }

  export type UserSumAggregateInputType = {
    hourlyWage?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    jobRole?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    startDate?: true
    hourlyWage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    jobRole?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    startDate?: true
    hourlyWage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    jobRole?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    startDate?: true
    hourlyWage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string
    jobRole: string | null
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    startDate: Date | null
    hourlyWage: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    jobRole?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startDate?: boolean
    hourlyWage?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    onboardingStatus?: boolean | User$onboardingStatusArgs<ExtArgs>
    payslips?: boolean | User$payslipsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    stepProgresses?: boolean | User$stepProgressesArgs<ExtArgs>
    timesheets?: boolean | User$timesheetsArgs<ExtArgs>
    availabilityResponses?: boolean | User$availabilityResponsesArgs<ExtArgs>
    staffPlanRows?: boolean | User$staffPlanRowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    jobRole?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startDate?: boolean
    hourlyWage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    jobRole?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startDate?: boolean
    hourlyWage?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    onboardingStatus?: boolean | User$onboardingStatusArgs<ExtArgs>
    payslips?: boolean | User$payslipsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    stepProgresses?: boolean | User$stepProgressesArgs<ExtArgs>
    timesheets?: boolean | User$timesheetsArgs<ExtArgs>
    availabilityResponses?: boolean | User$availabilityResponsesArgs<ExtArgs>
    staffPlanRows?: boolean | User$staffPlanRowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      onboardingStatus: Prisma.$OnboardingStatusPayload<ExtArgs> | null
      payslips: Prisma.$PayslipPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      stepProgresses: Prisma.$StepProgressPayload<ExtArgs>[]
      timesheets: Prisma.$TimesheetPayload<ExtArgs>[]
      availabilityResponses: Prisma.$AvailabilityResponsePayload<ExtArgs>[]
      staffPlanRows: Prisma.$StaffPlanRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string
      jobRole: string | null
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
      startDate: Date | null
      hourlyWage: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany"> | Null>
    onboardingStatus<T extends User$onboardingStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$onboardingStatusArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    payslips<T extends User$payslipsArgs<ExtArgs> = {}>(args?: Subset<T, User$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    stepProgresses<T extends User$stepProgressesArgs<ExtArgs> = {}>(args?: Subset<T, User$stepProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findMany"> | Null>
    timesheets<T extends User$timesheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$timesheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany"> | Null>
    availabilityResponses<T extends User$availabilityResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findMany"> | Null>
    staffPlanRows<T extends User$staffPlanRowsArgs<ExtArgs> = {}>(args?: Subset<T, User$staffPlanRowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly jobRole: FieldRef<"User", 'String'>
    readonly isArchived: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly startDate: FieldRef<"User", 'DateTime'>
    readonly hourlyWage: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.onboardingStatus
   */
  export type User$onboardingStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    where?: OnboardingStatusWhereInput
  }

  /**
   * User.payslips
   */
  export type User$payslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    cursor?: PayslipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.stepProgresses
   */
  export type User$stepProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    where?: StepProgressWhereInput
    orderBy?: StepProgressOrderByWithRelationInput | StepProgressOrderByWithRelationInput[]
    cursor?: StepProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepProgressScalarFieldEnum | StepProgressScalarFieldEnum[]
  }

  /**
   * User.timesheets
   */
  export type User$timesheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    where?: TimesheetWhereInput
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    cursor?: TimesheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * User.availabilityResponses
   */
  export type User$availabilityResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    where?: AvailabilityResponseWhereInput
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    cursor?: AvailabilityResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityResponseScalarFieldEnum | AvailabilityResponseScalarFieldEnum[]
  }

  /**
   * User.staffPlanRows
   */
  export type User$staffPlanRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    where?: StaffPlanRowWhereInput
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    cursor?: StaffPlanRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffPlanRowScalarFieldEnum | StaffPlanRowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Payslip
   */

  export type AggregatePayslip = {
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  export type PayslipAvgAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type PayslipSumAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type PayslipMinAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    url: string | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type PayslipMaxAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    url: string | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type PayslipCountAggregateOutputType = {
    id: number
    month: number
    year: number
    url: number
    uploadedAt: number
    userId: number
    _all: number
  }


  export type PayslipAvgAggregateInputType = {
    month?: true
    year?: true
  }

  export type PayslipSumAggregateInputType = {
    month?: true
    year?: true
  }

  export type PayslipMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    url?: true
    uploadedAt?: true
    userId?: true
  }

  export type PayslipMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    url?: true
    uploadedAt?: true
    userId?: true
  }

  export type PayslipCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
    url?: true
    uploadedAt?: true
    userId?: true
    _all?: true
  }

  export type PayslipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslip to aggregate.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payslips
    **/
    _count?: true | PayslipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayslipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayslipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayslipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayslipMaxAggregateInputType
  }

  export type GetPayslipAggregateType<T extends PayslipAggregateArgs> = {
        [P in keyof T & keyof AggregatePayslip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayslip[P]>
      : GetScalarType<T[P], AggregatePayslip[P]>
  }




  export type PayslipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithAggregationInput | PayslipOrderByWithAggregationInput[]
    by: PayslipScalarFieldEnum[] | PayslipScalarFieldEnum
    having?: PayslipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayslipCountAggregateInputType | true
    _avg?: PayslipAvgAggregateInputType
    _sum?: PayslipSumAggregateInputType
    _min?: PayslipMinAggregateInputType
    _max?: PayslipMaxAggregateInputType
  }

  export type PayslipGroupByOutputType = {
    id: string
    month: number
    year: number
    url: string
    uploadedAt: Date
    userId: string
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  type GetPayslipGroupByPayload<T extends PayslipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayslipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayslipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayslipGroupByOutputType[P]>
            : GetScalarType<T[P], PayslipGroupByOutputType[P]>
        }
      >
    >


  export type PayslipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    url?: boolean
    uploadedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payslip"]>

  export type PayslipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    url?: boolean
    uploadedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payslip"]>

  export type PayslipSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    url?: boolean
    uploadedAt?: boolean
    userId?: boolean
  }

  export type PayslipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayslipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayslipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payslip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: number
      year: number
      url: string
      uploadedAt: Date
      userId: string
    }, ExtArgs["result"]["payslip"]>
    composites: {}
  }

  type PayslipGetPayload<S extends boolean | null | undefined | PayslipDefaultArgs> = $Result.GetResult<Prisma.$PayslipPayload, S>

  type PayslipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayslipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayslipCountAggregateInputType | true
    }

  export interface PayslipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payslip'], meta: { name: 'Payslip' } }
    /**
     * Find zero or one Payslip that matches the filter.
     * @param {PayslipFindUniqueArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayslipFindUniqueArgs>(args: SelectSubset<T, PayslipFindUniqueArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payslip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PayslipFindUniqueOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayslipFindUniqueOrThrowArgs>(args: SelectSubset<T, PayslipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payslip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayslipFindFirstArgs>(args?: SelectSubset<T, PayslipFindFirstArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payslip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayslipFindFirstOrThrowArgs>(args?: SelectSubset<T, PayslipFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payslips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payslips
     * const payslips = await prisma.payslip.findMany()
     * 
     * // Get first 10 Payslips
     * const payslips = await prisma.payslip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payslipWithIdOnly = await prisma.payslip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayslipFindManyArgs>(args?: SelectSubset<T, PayslipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payslip.
     * @param {PayslipCreateArgs} args - Arguments to create a Payslip.
     * @example
     * // Create one Payslip
     * const Payslip = await prisma.payslip.create({
     *   data: {
     *     // ... data to create a Payslip
     *   }
     * })
     * 
     */
    create<T extends PayslipCreateArgs>(args: SelectSubset<T, PayslipCreateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payslips.
     * @param {PayslipCreateManyArgs} args - Arguments to create many Payslips.
     * @example
     * // Create many Payslips
     * const payslip = await prisma.payslip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayslipCreateManyArgs>(args?: SelectSubset<T, PayslipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payslips and returns the data saved in the database.
     * @param {PayslipCreateManyAndReturnArgs} args - Arguments to create many Payslips.
     * @example
     * // Create many Payslips
     * const payslip = await prisma.payslip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payslips and only return the `id`
     * const payslipWithIdOnly = await prisma.payslip.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayslipCreateManyAndReturnArgs>(args?: SelectSubset<T, PayslipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payslip.
     * @param {PayslipDeleteArgs} args - Arguments to delete one Payslip.
     * @example
     * // Delete one Payslip
     * const Payslip = await prisma.payslip.delete({
     *   where: {
     *     // ... filter to delete one Payslip
     *   }
     * })
     * 
     */
    delete<T extends PayslipDeleteArgs>(args: SelectSubset<T, PayslipDeleteArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payslip.
     * @param {PayslipUpdateArgs} args - Arguments to update one Payslip.
     * @example
     * // Update one Payslip
     * const payslip = await prisma.payslip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayslipUpdateArgs>(args: SelectSubset<T, PayslipUpdateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payslips.
     * @param {PayslipDeleteManyArgs} args - Arguments to filter Payslips to delete.
     * @example
     * // Delete a few Payslips
     * const { count } = await prisma.payslip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayslipDeleteManyArgs>(args?: SelectSubset<T, PayslipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payslips
     * const payslip = await prisma.payslip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayslipUpdateManyArgs>(args: SelectSubset<T, PayslipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payslip.
     * @param {PayslipUpsertArgs} args - Arguments to update or create a Payslip.
     * @example
     * // Update or create a Payslip
     * const payslip = await prisma.payslip.upsert({
     *   create: {
     *     // ... data to create a Payslip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payslip we want to update
     *   }
     * })
     */
    upsert<T extends PayslipUpsertArgs>(args: SelectSubset<T, PayslipUpsertArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipCountArgs} args - Arguments to filter Payslips to count.
     * @example
     * // Count the number of Payslips
     * const count = await prisma.payslip.count({
     *   where: {
     *     // ... the filter for the Payslips we want to count
     *   }
     * })
    **/
    count<T extends PayslipCountArgs>(
      args?: Subset<T, PayslipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayslipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayslipAggregateArgs>(args: Subset<T, PayslipAggregateArgs>): Prisma.PrismaPromise<GetPayslipAggregateType<T>>

    /**
     * Group by Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipGroupByArgs} args - Group by arguments.
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
      T extends PayslipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayslipGroupByArgs['orderBy'] }
        : { orderBy?: PayslipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayslipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayslipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payslip model
   */
  readonly fields: PayslipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payslip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayslipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Payslip model
   */ 
  interface PayslipFieldRefs {
    readonly id: FieldRef<"Payslip", 'String'>
    readonly month: FieldRef<"Payslip", 'Int'>
    readonly year: FieldRef<"Payslip", 'Int'>
    readonly url: FieldRef<"Payslip", 'String'>
    readonly uploadedAt: FieldRef<"Payslip", 'DateTime'>
    readonly userId: FieldRef<"Payslip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payslip findUnique
   */
  export type PayslipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findUniqueOrThrow
   */
  export type PayslipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findFirst
   */
  export type PayslipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findFirstOrThrow
   */
  export type PayslipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findMany
   */
  export type PayslipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslips to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip create
   */
  export type PayslipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to create a Payslip.
     */
    data: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
  }

  /**
   * Payslip createMany
   */
  export type PayslipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payslips.
     */
    data: PayslipCreateManyInput | PayslipCreateManyInput[]
  }

  /**
   * Payslip createManyAndReturn
   */
  export type PayslipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payslips.
     */
    data: PayslipCreateManyInput | PayslipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payslip update
   */
  export type PayslipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to update a Payslip.
     */
    data: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
    /**
     * Choose, which Payslip to update.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip updateMany
   */
  export type PayslipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payslips.
     */
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyInput>
    /**
     * Filter which Payslips to update
     */
    where?: PayslipWhereInput
  }

  /**
   * Payslip upsert
   */
  export type PayslipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The filter to search for the Payslip to update in case it exists.
     */
    where: PayslipWhereUniqueInput
    /**
     * In case the Payslip found by the `where` argument doesn't exist, create a new Payslip with this data.
     */
    create: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
    /**
     * In case the Payslip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
  }

  /**
   * Payslip delete
   */
  export type PayslipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter which Payslip to delete.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip deleteMany
   */
  export type PayslipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslips to delete
     */
    where?: PayslipWhereInput
  }

  /**
   * Payslip without action
   */
  export type PayslipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model OnboardingStatus
   */

  export type AggregateOnboardingStatus = {
    _count: OnboardingStatusCountAggregateOutputType | null
    _min: OnboardingStatusMinAggregateOutputType | null
    _max: OnboardingStatusMaxAggregateOutputType | null
  }

  export type OnboardingStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type OnboardingStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type OnboardingStatusCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type OnboardingStatusMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    updatedAt?: true
  }

  export type OnboardingStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    updatedAt?: true
  }

  export type OnboardingStatusCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type OnboardingStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnboardingStatus to aggregate.
     */
    where?: OnboardingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingStatuses to fetch.
     */
    orderBy?: OnboardingStatusOrderByWithRelationInput | OnboardingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnboardingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnboardingStatuses
    **/
    _count?: true | OnboardingStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnboardingStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnboardingStatusMaxAggregateInputType
  }

  export type GetOnboardingStatusAggregateType<T extends OnboardingStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOnboardingStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnboardingStatus[P]>
      : GetScalarType<T[P], AggregateOnboardingStatus[P]>
  }




  export type OnboardingStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnboardingStatusWhereInput
    orderBy?: OnboardingStatusOrderByWithAggregationInput | OnboardingStatusOrderByWithAggregationInput[]
    by: OnboardingStatusScalarFieldEnum[] | OnboardingStatusScalarFieldEnum
    having?: OnboardingStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnboardingStatusCountAggregateInputType | true
    _min?: OnboardingStatusMinAggregateInputType
    _max?: OnboardingStatusMaxAggregateInputType
  }

  export type OnboardingStatusGroupByOutputType = {
    id: string
    userId: string
    status: string
    updatedAt: Date
    _count: OnboardingStatusCountAggregateOutputType | null
    _min: OnboardingStatusMinAggregateOutputType | null
    _max: OnboardingStatusMaxAggregateOutputType | null
  }

  type GetOnboardingStatusGroupByPayload<T extends OnboardingStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnboardingStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnboardingStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnboardingStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OnboardingStatusGroupByOutputType[P]>
        }
      >
    >


  export type OnboardingStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboardingStatus"]>

  export type OnboardingStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboardingStatus"]>

  export type OnboardingStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type OnboardingStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnboardingStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnboardingStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnboardingStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      updatedAt: Date
    }, ExtArgs["result"]["onboardingStatus"]>
    composites: {}
  }

  type OnboardingStatusGetPayload<S extends boolean | null | undefined | OnboardingStatusDefaultArgs> = $Result.GetResult<Prisma.$OnboardingStatusPayload, S>

  type OnboardingStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OnboardingStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OnboardingStatusCountAggregateInputType | true
    }

  export interface OnboardingStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnboardingStatus'], meta: { name: 'OnboardingStatus' } }
    /**
     * Find zero or one OnboardingStatus that matches the filter.
     * @param {OnboardingStatusFindUniqueArgs} args - Arguments to find a OnboardingStatus
     * @example
     * // Get one OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnboardingStatusFindUniqueArgs>(args: SelectSubset<T, OnboardingStatusFindUniqueArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OnboardingStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OnboardingStatusFindUniqueOrThrowArgs} args - Arguments to find a OnboardingStatus
     * @example
     * // Get one OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnboardingStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OnboardingStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OnboardingStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusFindFirstArgs} args - Arguments to find a OnboardingStatus
     * @example
     * // Get one OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnboardingStatusFindFirstArgs>(args?: SelectSubset<T, OnboardingStatusFindFirstArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OnboardingStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusFindFirstOrThrowArgs} args - Arguments to find a OnboardingStatus
     * @example
     * // Get one OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnboardingStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OnboardingStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OnboardingStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnboardingStatuses
     * const onboardingStatuses = await prisma.onboardingStatus.findMany()
     * 
     * // Get first 10 OnboardingStatuses
     * const onboardingStatuses = await prisma.onboardingStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onboardingStatusWithIdOnly = await prisma.onboardingStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnboardingStatusFindManyArgs>(args?: SelectSubset<T, OnboardingStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OnboardingStatus.
     * @param {OnboardingStatusCreateArgs} args - Arguments to create a OnboardingStatus.
     * @example
     * // Create one OnboardingStatus
     * const OnboardingStatus = await prisma.onboardingStatus.create({
     *   data: {
     *     // ... data to create a OnboardingStatus
     *   }
     * })
     * 
     */
    create<T extends OnboardingStatusCreateArgs>(args: SelectSubset<T, OnboardingStatusCreateArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OnboardingStatuses.
     * @param {OnboardingStatusCreateManyArgs} args - Arguments to create many OnboardingStatuses.
     * @example
     * // Create many OnboardingStatuses
     * const onboardingStatus = await prisma.onboardingStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnboardingStatusCreateManyArgs>(args?: SelectSubset<T, OnboardingStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnboardingStatuses and returns the data saved in the database.
     * @param {OnboardingStatusCreateManyAndReturnArgs} args - Arguments to create many OnboardingStatuses.
     * @example
     * // Create many OnboardingStatuses
     * const onboardingStatus = await prisma.onboardingStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnboardingStatuses and only return the `id`
     * const onboardingStatusWithIdOnly = await prisma.onboardingStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnboardingStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, OnboardingStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OnboardingStatus.
     * @param {OnboardingStatusDeleteArgs} args - Arguments to delete one OnboardingStatus.
     * @example
     * // Delete one OnboardingStatus
     * const OnboardingStatus = await prisma.onboardingStatus.delete({
     *   where: {
     *     // ... filter to delete one OnboardingStatus
     *   }
     * })
     * 
     */
    delete<T extends OnboardingStatusDeleteArgs>(args: SelectSubset<T, OnboardingStatusDeleteArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OnboardingStatus.
     * @param {OnboardingStatusUpdateArgs} args - Arguments to update one OnboardingStatus.
     * @example
     * // Update one OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnboardingStatusUpdateArgs>(args: SelectSubset<T, OnboardingStatusUpdateArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OnboardingStatuses.
     * @param {OnboardingStatusDeleteManyArgs} args - Arguments to filter OnboardingStatuses to delete.
     * @example
     * // Delete a few OnboardingStatuses
     * const { count } = await prisma.onboardingStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnboardingStatusDeleteManyArgs>(args?: SelectSubset<T, OnboardingStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnboardingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnboardingStatuses
     * const onboardingStatus = await prisma.onboardingStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnboardingStatusUpdateManyArgs>(args: SelectSubset<T, OnboardingStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OnboardingStatus.
     * @param {OnboardingStatusUpsertArgs} args - Arguments to update or create a OnboardingStatus.
     * @example
     * // Update or create a OnboardingStatus
     * const onboardingStatus = await prisma.onboardingStatus.upsert({
     *   create: {
     *     // ... data to create a OnboardingStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnboardingStatus we want to update
     *   }
     * })
     */
    upsert<T extends OnboardingStatusUpsertArgs>(args: SelectSubset<T, OnboardingStatusUpsertArgs<ExtArgs>>): Prisma__OnboardingStatusClient<$Result.GetResult<Prisma.$OnboardingStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OnboardingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusCountArgs} args - Arguments to filter OnboardingStatuses to count.
     * @example
     * // Count the number of OnboardingStatuses
     * const count = await prisma.onboardingStatus.count({
     *   where: {
     *     // ... the filter for the OnboardingStatuses we want to count
     *   }
     * })
    **/
    count<T extends OnboardingStatusCountArgs>(
      args?: Subset<T, OnboardingStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnboardingStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnboardingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnboardingStatusAggregateArgs>(args: Subset<T, OnboardingStatusAggregateArgs>): Prisma.PrismaPromise<GetOnboardingStatusAggregateType<T>>

    /**
     * Group by OnboardingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingStatusGroupByArgs} args - Group by arguments.
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
      T extends OnboardingStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnboardingStatusGroupByArgs['orderBy'] }
        : { orderBy?: OnboardingStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnboardingStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnboardingStatus model
   */
  readonly fields: OnboardingStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnboardingStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnboardingStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OnboardingStatus model
   */ 
  interface OnboardingStatusFieldRefs {
    readonly id: FieldRef<"OnboardingStatus", 'String'>
    readonly userId: FieldRef<"OnboardingStatus", 'String'>
    readonly status: FieldRef<"OnboardingStatus", 'String'>
    readonly updatedAt: FieldRef<"OnboardingStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OnboardingStatus findUnique
   */
  export type OnboardingStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingStatus to fetch.
     */
    where: OnboardingStatusWhereUniqueInput
  }

  /**
   * OnboardingStatus findUniqueOrThrow
   */
  export type OnboardingStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingStatus to fetch.
     */
    where: OnboardingStatusWhereUniqueInput
  }

  /**
   * OnboardingStatus findFirst
   */
  export type OnboardingStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingStatus to fetch.
     */
    where?: OnboardingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingStatuses to fetch.
     */
    orderBy?: OnboardingStatusOrderByWithRelationInput | OnboardingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnboardingStatuses.
     */
    cursor?: OnboardingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnboardingStatuses.
     */
    distinct?: OnboardingStatusScalarFieldEnum | OnboardingStatusScalarFieldEnum[]
  }

  /**
   * OnboardingStatus findFirstOrThrow
   */
  export type OnboardingStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingStatus to fetch.
     */
    where?: OnboardingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingStatuses to fetch.
     */
    orderBy?: OnboardingStatusOrderByWithRelationInput | OnboardingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnboardingStatuses.
     */
    cursor?: OnboardingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnboardingStatuses.
     */
    distinct?: OnboardingStatusScalarFieldEnum | OnboardingStatusScalarFieldEnum[]
  }

  /**
   * OnboardingStatus findMany
   */
  export type OnboardingStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingStatuses to fetch.
     */
    where?: OnboardingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingStatuses to fetch.
     */
    orderBy?: OnboardingStatusOrderByWithRelationInput | OnboardingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnboardingStatuses.
     */
    cursor?: OnboardingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingStatuses.
     */
    skip?: number
    distinct?: OnboardingStatusScalarFieldEnum | OnboardingStatusScalarFieldEnum[]
  }

  /**
   * OnboardingStatus create
   */
  export type OnboardingStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a OnboardingStatus.
     */
    data: XOR<OnboardingStatusCreateInput, OnboardingStatusUncheckedCreateInput>
  }

  /**
   * OnboardingStatus createMany
   */
  export type OnboardingStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnboardingStatuses.
     */
    data: OnboardingStatusCreateManyInput | OnboardingStatusCreateManyInput[]
  }

  /**
   * OnboardingStatus createManyAndReturn
   */
  export type OnboardingStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OnboardingStatuses.
     */
    data: OnboardingStatusCreateManyInput | OnboardingStatusCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnboardingStatus update
   */
  export type OnboardingStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a OnboardingStatus.
     */
    data: XOR<OnboardingStatusUpdateInput, OnboardingStatusUncheckedUpdateInput>
    /**
     * Choose, which OnboardingStatus to update.
     */
    where: OnboardingStatusWhereUniqueInput
  }

  /**
   * OnboardingStatus updateMany
   */
  export type OnboardingStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnboardingStatuses.
     */
    data: XOR<OnboardingStatusUpdateManyMutationInput, OnboardingStatusUncheckedUpdateManyInput>
    /**
     * Filter which OnboardingStatuses to update
     */
    where?: OnboardingStatusWhereInput
  }

  /**
   * OnboardingStatus upsert
   */
  export type OnboardingStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the OnboardingStatus to update in case it exists.
     */
    where: OnboardingStatusWhereUniqueInput
    /**
     * In case the OnboardingStatus found by the `where` argument doesn't exist, create a new OnboardingStatus with this data.
     */
    create: XOR<OnboardingStatusCreateInput, OnboardingStatusUncheckedCreateInput>
    /**
     * In case the OnboardingStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnboardingStatusUpdateInput, OnboardingStatusUncheckedUpdateInput>
  }

  /**
   * OnboardingStatus delete
   */
  export type OnboardingStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
    /**
     * Filter which OnboardingStatus to delete.
     */
    where: OnboardingStatusWhereUniqueInput
  }

  /**
   * OnboardingStatus deleteMany
   */
  export type OnboardingStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnboardingStatuses to delete
     */
    where?: OnboardingStatusWhereInput
  }

  /**
   * OnboardingStatus without action
   */
  export type OnboardingStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingStatus
     */
    select?: OnboardingStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingStatusInclude<ExtArgs> | null
  }


  /**
   * Model StepProgress
   */

  export type AggregateStepProgress = {
    _count: StepProgressCountAggregateOutputType | null
    _min: StepProgressMinAggregateOutputType | null
    _max: StepProgressMaxAggregateOutputType | null
  }

  export type StepProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stepId: string | null
    completed: boolean | null
    data: string | null
    updatedAt: Date | null
  }

  export type StepProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stepId: string | null
    completed: boolean | null
    data: string | null
    updatedAt: Date | null
  }

  export type StepProgressCountAggregateOutputType = {
    id: number
    userId: number
    stepId: number
    completed: number
    data: number
    updatedAt: number
    _all: number
  }


  export type StepProgressMinAggregateInputType = {
    id?: true
    userId?: true
    stepId?: true
    completed?: true
    data?: true
    updatedAt?: true
  }

  export type StepProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    stepId?: true
    completed?: true
    data?: true
    updatedAt?: true
  }

  export type StepProgressCountAggregateInputType = {
    id?: true
    userId?: true
    stepId?: true
    completed?: true
    data?: true
    updatedAt?: true
    _all?: true
  }

  export type StepProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepProgress to aggregate.
     */
    where?: StepProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepProgresses to fetch.
     */
    orderBy?: StepProgressOrderByWithRelationInput | StepProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepProgresses
    **/
    _count?: true | StepProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepProgressMaxAggregateInputType
  }

  export type GetStepProgressAggregateType<T extends StepProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateStepProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepProgress[P]>
      : GetScalarType<T[P], AggregateStepProgress[P]>
  }




  export type StepProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepProgressWhereInput
    orderBy?: StepProgressOrderByWithAggregationInput | StepProgressOrderByWithAggregationInput[]
    by: StepProgressScalarFieldEnum[] | StepProgressScalarFieldEnum
    having?: StepProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepProgressCountAggregateInputType | true
    _min?: StepProgressMinAggregateInputType
    _max?: StepProgressMaxAggregateInputType
  }

  export type StepProgressGroupByOutputType = {
    id: string
    userId: string
    stepId: string
    completed: boolean
    data: string | null
    updatedAt: Date
    _count: StepProgressCountAggregateOutputType | null
    _min: StepProgressMinAggregateOutputType | null
    _max: StepProgressMaxAggregateOutputType | null
  }

  type GetStepProgressGroupByPayload<T extends StepProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepProgressGroupByOutputType[P]>
            : GetScalarType<T[P], StepProgressGroupByOutputType[P]>
        }
      >
    >


  export type StepProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stepId?: boolean
    completed?: boolean
    data?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepProgress"]>

  export type StepProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stepId?: boolean
    completed?: boolean
    data?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepProgress"]>

  export type StepProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    stepId?: boolean
    completed?: boolean
    data?: boolean
    updatedAt?: boolean
  }

  export type StepProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StepProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stepId: string
      completed: boolean
      data: string | null
      updatedAt: Date
    }, ExtArgs["result"]["stepProgress"]>
    composites: {}
  }

  type StepProgressGetPayload<S extends boolean | null | undefined | StepProgressDefaultArgs> = $Result.GetResult<Prisma.$StepProgressPayload, S>

  type StepProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StepProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StepProgressCountAggregateInputType | true
    }

  export interface StepProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepProgress'], meta: { name: 'StepProgress' } }
    /**
     * Find zero or one StepProgress that matches the filter.
     * @param {StepProgressFindUniqueArgs} args - Arguments to find a StepProgress
     * @example
     * // Get one StepProgress
     * const stepProgress = await prisma.stepProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepProgressFindUniqueArgs>(args: SelectSubset<T, StepProgressFindUniqueArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StepProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StepProgressFindUniqueOrThrowArgs} args - Arguments to find a StepProgress
     * @example
     * // Get one StepProgress
     * const stepProgress = await prisma.stepProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, StepProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StepProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressFindFirstArgs} args - Arguments to find a StepProgress
     * @example
     * // Get one StepProgress
     * const stepProgress = await prisma.stepProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepProgressFindFirstArgs>(args?: SelectSubset<T, StepProgressFindFirstArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StepProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressFindFirstOrThrowArgs} args - Arguments to find a StepProgress
     * @example
     * // Get one StepProgress
     * const stepProgress = await prisma.stepProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, StepProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StepProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepProgresses
     * const stepProgresses = await prisma.stepProgress.findMany()
     * 
     * // Get first 10 StepProgresses
     * const stepProgresses = await prisma.stepProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepProgressWithIdOnly = await prisma.stepProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepProgressFindManyArgs>(args?: SelectSubset<T, StepProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StepProgress.
     * @param {StepProgressCreateArgs} args - Arguments to create a StepProgress.
     * @example
     * // Create one StepProgress
     * const StepProgress = await prisma.stepProgress.create({
     *   data: {
     *     // ... data to create a StepProgress
     *   }
     * })
     * 
     */
    create<T extends StepProgressCreateArgs>(args: SelectSubset<T, StepProgressCreateArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StepProgresses.
     * @param {StepProgressCreateManyArgs} args - Arguments to create many StepProgresses.
     * @example
     * // Create many StepProgresses
     * const stepProgress = await prisma.stepProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepProgressCreateManyArgs>(args?: SelectSubset<T, StepProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepProgresses and returns the data saved in the database.
     * @param {StepProgressCreateManyAndReturnArgs} args - Arguments to create many StepProgresses.
     * @example
     * // Create many StepProgresses
     * const stepProgress = await prisma.stepProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepProgresses and only return the `id`
     * const stepProgressWithIdOnly = await prisma.stepProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, StepProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StepProgress.
     * @param {StepProgressDeleteArgs} args - Arguments to delete one StepProgress.
     * @example
     * // Delete one StepProgress
     * const StepProgress = await prisma.stepProgress.delete({
     *   where: {
     *     // ... filter to delete one StepProgress
     *   }
     * })
     * 
     */
    delete<T extends StepProgressDeleteArgs>(args: SelectSubset<T, StepProgressDeleteArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StepProgress.
     * @param {StepProgressUpdateArgs} args - Arguments to update one StepProgress.
     * @example
     * // Update one StepProgress
     * const stepProgress = await prisma.stepProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepProgressUpdateArgs>(args: SelectSubset<T, StepProgressUpdateArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StepProgresses.
     * @param {StepProgressDeleteManyArgs} args - Arguments to filter StepProgresses to delete.
     * @example
     * // Delete a few StepProgresses
     * const { count } = await prisma.stepProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepProgressDeleteManyArgs>(args?: SelectSubset<T, StepProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepProgresses
     * const stepProgress = await prisma.stepProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepProgressUpdateManyArgs>(args: SelectSubset<T, StepProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StepProgress.
     * @param {StepProgressUpsertArgs} args - Arguments to update or create a StepProgress.
     * @example
     * // Update or create a StepProgress
     * const stepProgress = await prisma.stepProgress.upsert({
     *   create: {
     *     // ... data to create a StepProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepProgress we want to update
     *   }
     * })
     */
    upsert<T extends StepProgressUpsertArgs>(args: SelectSubset<T, StepProgressUpsertArgs<ExtArgs>>): Prisma__StepProgressClient<$Result.GetResult<Prisma.$StepProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StepProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressCountArgs} args - Arguments to filter StepProgresses to count.
     * @example
     * // Count the number of StepProgresses
     * const count = await prisma.stepProgress.count({
     *   where: {
     *     // ... the filter for the StepProgresses we want to count
     *   }
     * })
    **/
    count<T extends StepProgressCountArgs>(
      args?: Subset<T, StepProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepProgressAggregateArgs>(args: Subset<T, StepProgressAggregateArgs>): Prisma.PrismaPromise<GetStepProgressAggregateType<T>>

    /**
     * Group by StepProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepProgressGroupByArgs} args - Group by arguments.
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
      T extends StepProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepProgressGroupByArgs['orderBy'] }
        : { orderBy?: StepProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepProgress model
   */
  readonly fields: StepProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StepProgress model
   */ 
  interface StepProgressFieldRefs {
    readonly id: FieldRef<"StepProgress", 'String'>
    readonly userId: FieldRef<"StepProgress", 'String'>
    readonly stepId: FieldRef<"StepProgress", 'String'>
    readonly completed: FieldRef<"StepProgress", 'Boolean'>
    readonly data: FieldRef<"StepProgress", 'String'>
    readonly updatedAt: FieldRef<"StepProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StepProgress findUnique
   */
  export type StepProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter, which StepProgress to fetch.
     */
    where: StepProgressWhereUniqueInput
  }

  /**
   * StepProgress findUniqueOrThrow
   */
  export type StepProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter, which StepProgress to fetch.
     */
    where: StepProgressWhereUniqueInput
  }

  /**
   * StepProgress findFirst
   */
  export type StepProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter, which StepProgress to fetch.
     */
    where?: StepProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepProgresses to fetch.
     */
    orderBy?: StepProgressOrderByWithRelationInput | StepProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepProgresses.
     */
    cursor?: StepProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepProgresses.
     */
    distinct?: StepProgressScalarFieldEnum | StepProgressScalarFieldEnum[]
  }

  /**
   * StepProgress findFirstOrThrow
   */
  export type StepProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter, which StepProgress to fetch.
     */
    where?: StepProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepProgresses to fetch.
     */
    orderBy?: StepProgressOrderByWithRelationInput | StepProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepProgresses.
     */
    cursor?: StepProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepProgresses.
     */
    distinct?: StepProgressScalarFieldEnum | StepProgressScalarFieldEnum[]
  }

  /**
   * StepProgress findMany
   */
  export type StepProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter, which StepProgresses to fetch.
     */
    where?: StepProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepProgresses to fetch.
     */
    orderBy?: StepProgressOrderByWithRelationInput | StepProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepProgresses.
     */
    cursor?: StepProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepProgresses.
     */
    skip?: number
    distinct?: StepProgressScalarFieldEnum | StepProgressScalarFieldEnum[]
  }

  /**
   * StepProgress create
   */
  export type StepProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a StepProgress.
     */
    data: XOR<StepProgressCreateInput, StepProgressUncheckedCreateInput>
  }

  /**
   * StepProgress createMany
   */
  export type StepProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepProgresses.
     */
    data: StepProgressCreateManyInput | StepProgressCreateManyInput[]
  }

  /**
   * StepProgress createManyAndReturn
   */
  export type StepProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StepProgresses.
     */
    data: StepProgressCreateManyInput | StepProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepProgress update
   */
  export type StepProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a StepProgress.
     */
    data: XOR<StepProgressUpdateInput, StepProgressUncheckedUpdateInput>
    /**
     * Choose, which StepProgress to update.
     */
    where: StepProgressWhereUniqueInput
  }

  /**
   * StepProgress updateMany
   */
  export type StepProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepProgresses.
     */
    data: XOR<StepProgressUpdateManyMutationInput, StepProgressUncheckedUpdateManyInput>
    /**
     * Filter which StepProgresses to update
     */
    where?: StepProgressWhereInput
  }

  /**
   * StepProgress upsert
   */
  export type StepProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the StepProgress to update in case it exists.
     */
    where: StepProgressWhereUniqueInput
    /**
     * In case the StepProgress found by the `where` argument doesn't exist, create a new StepProgress with this data.
     */
    create: XOR<StepProgressCreateInput, StepProgressUncheckedCreateInput>
    /**
     * In case the StepProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepProgressUpdateInput, StepProgressUncheckedUpdateInput>
  }

  /**
   * StepProgress delete
   */
  export type StepProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
    /**
     * Filter which StepProgress to delete.
     */
    where: StepProgressWhereUniqueInput
  }

  /**
   * StepProgress deleteMany
   */
  export type StepProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepProgresses to delete
     */
    where?: StepProgressWhereInput
  }

  /**
   * StepProgress without action
   */
  export type StepProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepProgress
     */
    select?: StepProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepProgressInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: string | null
    userId: string | null
    uploadedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: string | null
    userId: string | null
    uploadedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    url: number
    type: number
    userId: number
    uploadedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    userId?: true
    uploadedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    userId?: true
    uploadedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    userId?: true
    uploadedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    name: string
    url: string
    type: string
    userId: string | null
    uploadedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    userId?: boolean
    uploadedAt?: boolean
    user?: boolean | Document$userArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    userId?: boolean
    uploadedAt?: boolean
    user?: boolean | Document$userArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    userId?: boolean
    uploadedAt?: boolean
  }

  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Document$userArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Document$userArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      type: string
      userId: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Document$userArgs<ExtArgs> = {}>(args?: Subset<T, Document$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
  }

  /**
   * Document.user
   */
  export type Document$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Timesheet
   */

  export type AggregateTimesheet = {
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  export type TimesheetAvgAggregateOutputType = {
    breakMinutes: number | null
    totalHours: number | null
    hourlyWage: number | null
  }

  export type TimesheetSumAggregateOutputType = {
    breakMinutes: number | null
    totalHours: number | null
    hourlyWage: number | null
  }

  export type TimesheetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    startTime: string | null
    endTime: string | null
    breakMinutes: number | null
    totalHours: number | null
    status: string | null
    note: string | null
    hourlyWage: number | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    startTime: string | null
    endTime: string | null
    breakMinutes: number | null
    totalHours: number | null
    status: string | null
    note: string | null
    hourlyWage: number | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    startTime: number
    endTime: number
    breakMinutes: number
    totalHours: number
    status: number
    note: number
    hourlyWage: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimesheetAvgAggregateInputType = {
    breakMinutes?: true
    totalHours?: true
    hourlyWage?: true
  }

  export type TimesheetSumAggregateInputType = {
    breakMinutes?: true
    totalHours?: true
    hourlyWage?: true
  }

  export type TimesheetMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    breakMinutes?: true
    totalHours?: true
    status?: true
    note?: true
    hourlyWage?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    breakMinutes?: true
    totalHours?: true
    status?: true
    note?: true
    hourlyWage?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    startTime?: true
    endTime?: true
    breakMinutes?: true
    totalHours?: true
    status?: true
    note?: true
    hourlyWage?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimesheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheet to aggregate.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timesheets
    **/
    _count?: true | TimesheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesheetMaxAggregateInputType
  }

  export type GetTimesheetAggregateType<T extends TimesheetAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesheet[P]>
      : GetScalarType<T[P], AggregateTimesheet[P]>
  }




  export type TimesheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetWhereInput
    orderBy?: TimesheetOrderByWithAggregationInput | TimesheetOrderByWithAggregationInput[]
    by: TimesheetScalarFieldEnum[] | TimesheetScalarFieldEnum
    having?: TimesheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesheetCountAggregateInputType | true
    _avg?: TimesheetAvgAggregateInputType
    _sum?: TimesheetSumAggregateInputType
    _min?: TimesheetMinAggregateInputType
    _max?: TimesheetMaxAggregateInputType
  }

  export type TimesheetGroupByOutputType = {
    id: string
    userId: string
    date: string
    startTime: string
    endTime: string
    breakMinutes: number
    totalHours: number
    status: string
    note: string | null
    hourlyWage: number | null
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  type GetTimesheetGroupByPayload<T extends TimesheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
            : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
        }
      >
    >


  export type TimesheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    breakMinutes?: boolean
    totalHours?: boolean
    status?: boolean
    note?: boolean
    hourlyWage?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    breakMinutes?: boolean
    totalHours?: boolean
    status?: boolean
    note?: boolean
    hourlyWage?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    breakMinutes?: boolean
    totalHours?: boolean
    status?: boolean
    note?: boolean
    hourlyWage?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimesheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimesheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimesheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timesheet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: string
      startTime: string
      endTime: string
      breakMinutes: number
      totalHours: number
      status: string
      note: string | null
      hourlyWage: number | null
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timesheet"]>
    composites: {}
  }

  type TimesheetGetPayload<S extends boolean | null | undefined | TimesheetDefaultArgs> = $Result.GetResult<Prisma.$TimesheetPayload, S>

  type TimesheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimesheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimesheetCountAggregateInputType | true
    }

  export interface TimesheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timesheet'], meta: { name: 'Timesheet' } }
    /**
     * Find zero or one Timesheet that matches the filter.
     * @param {TimesheetFindUniqueArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimesheetFindUniqueArgs>(args: SelectSubset<T, TimesheetFindUniqueArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timesheet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimesheetFindUniqueOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimesheetFindUniqueOrThrowArgs>(args: SelectSubset<T, TimesheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimesheetFindFirstArgs>(args?: SelectSubset<T, TimesheetFindFirstArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimesheetFindFirstOrThrowArgs>(args?: SelectSubset<T, TimesheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timesheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timesheets
     * const timesheets = await prisma.timesheet.findMany()
     * 
     * // Get first 10 Timesheets
     * const timesheets = await prisma.timesheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimesheetFindManyArgs>(args?: SelectSubset<T, TimesheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timesheet.
     * @param {TimesheetCreateArgs} args - Arguments to create a Timesheet.
     * @example
     * // Create one Timesheet
     * const Timesheet = await prisma.timesheet.create({
     *   data: {
     *     // ... data to create a Timesheet
     *   }
     * })
     * 
     */
    create<T extends TimesheetCreateArgs>(args: SelectSubset<T, TimesheetCreateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timesheets.
     * @param {TimesheetCreateManyArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimesheetCreateManyArgs>(args?: SelectSubset<T, TimesheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timesheets and returns the data saved in the database.
     * @param {TimesheetCreateManyAndReturnArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timesheets and only return the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimesheetCreateManyAndReturnArgs>(args?: SelectSubset<T, TimesheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timesheet.
     * @param {TimesheetDeleteArgs} args - Arguments to delete one Timesheet.
     * @example
     * // Delete one Timesheet
     * const Timesheet = await prisma.timesheet.delete({
     *   where: {
     *     // ... filter to delete one Timesheet
     *   }
     * })
     * 
     */
    delete<T extends TimesheetDeleteArgs>(args: SelectSubset<T, TimesheetDeleteArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timesheet.
     * @param {TimesheetUpdateArgs} args - Arguments to update one Timesheet.
     * @example
     * // Update one Timesheet
     * const timesheet = await prisma.timesheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimesheetUpdateArgs>(args: SelectSubset<T, TimesheetUpdateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timesheets.
     * @param {TimesheetDeleteManyArgs} args - Arguments to filter Timesheets to delete.
     * @example
     * // Delete a few Timesheets
     * const { count } = await prisma.timesheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimesheetDeleteManyArgs>(args?: SelectSubset<T, TimesheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timesheets
     * const timesheet = await prisma.timesheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimesheetUpdateManyArgs>(args: SelectSubset<T, TimesheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timesheet.
     * @param {TimesheetUpsertArgs} args - Arguments to update or create a Timesheet.
     * @example
     * // Update or create a Timesheet
     * const timesheet = await prisma.timesheet.upsert({
     *   create: {
     *     // ... data to create a Timesheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timesheet we want to update
     *   }
     * })
     */
    upsert<T extends TimesheetUpsertArgs>(args: SelectSubset<T, TimesheetUpsertArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetCountArgs} args - Arguments to filter Timesheets to count.
     * @example
     * // Count the number of Timesheets
     * const count = await prisma.timesheet.count({
     *   where: {
     *     // ... the filter for the Timesheets we want to count
     *   }
     * })
    **/
    count<T extends TimesheetCountArgs>(
      args?: Subset<T, TimesheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesheetAggregateArgs>(args: Subset<T, TimesheetAggregateArgs>): Prisma.PrismaPromise<GetTimesheetAggregateType<T>>

    /**
     * Group by Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetGroupByArgs} args - Group by arguments.
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
      T extends TimesheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesheetGroupByArgs['orderBy'] }
        : { orderBy?: TimesheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimesheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timesheet model
   */
  readonly fields: TimesheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timesheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Timesheet model
   */ 
  interface TimesheetFieldRefs {
    readonly id: FieldRef<"Timesheet", 'String'>
    readonly userId: FieldRef<"Timesheet", 'String'>
    readonly date: FieldRef<"Timesheet", 'String'>
    readonly startTime: FieldRef<"Timesheet", 'String'>
    readonly endTime: FieldRef<"Timesheet", 'String'>
    readonly breakMinutes: FieldRef<"Timesheet", 'Int'>
    readonly totalHours: FieldRef<"Timesheet", 'Float'>
    readonly status: FieldRef<"Timesheet", 'String'>
    readonly note: FieldRef<"Timesheet", 'String'>
    readonly hourlyWage: FieldRef<"Timesheet", 'Float'>
    readonly approvedBy: FieldRef<"Timesheet", 'String'>
    readonly createdAt: FieldRef<"Timesheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Timesheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timesheet findUnique
   */
  export type TimesheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findUniqueOrThrow
   */
  export type TimesheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findFirst
   */
  export type TimesheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findFirstOrThrow
   */
  export type TimesheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findMany
   */
  export type TimesheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheets to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet create
   */
  export type TimesheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Timesheet.
     */
    data: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
  }

  /**
   * Timesheet createMany
   */
  export type TimesheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
  }

  /**
   * Timesheet createManyAndReturn
   */
  export type TimesheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timesheet update
   */
  export type TimesheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Timesheet.
     */
    data: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
    /**
     * Choose, which Timesheet to update.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet updateMany
   */
  export type TimesheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timesheets.
     */
    data: XOR<TimesheetUpdateManyMutationInput, TimesheetUncheckedUpdateManyInput>
    /**
     * Filter which Timesheets to update
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet upsert
   */
  export type TimesheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Timesheet to update in case it exists.
     */
    where: TimesheetWhereUniqueInput
    /**
     * In case the Timesheet found by the `where` argument doesn't exist, create a new Timesheet with this data.
     */
    create: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
    /**
     * In case the Timesheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
  }

  /**
   * Timesheet delete
   */
  export type TimesheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter which Timesheet to delete.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet deleteMany
   */
  export type TimesheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheets to delete
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet without action
   */
  export type TimesheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type BenefitSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: string | null
    partnerName: string | null
    partnerLogo: string | null
    websiteUrl: string | null
    title: string | null
    description: string | null
    discount: string | null
    conditions: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: string | null
    partnerName: string | null
    partnerLogo: string | null
    websiteUrl: string | null
    title: string | null
    description: string | null
    discount: string | null
    conditions: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    partnerName: number
    partnerLogo: number
    websiteUrl: number
    title: number
    description: number
    discount: number
    conditions: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    sortOrder?: true
  }

  export type BenefitSumAggregateInputType = {
    sortOrder?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    partnerName?: true
    partnerLogo?: true
    websiteUrl?: true
    title?: true
    description?: true
    discount?: true
    conditions?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    partnerName?: true
    partnerLogo?: true
    websiteUrl?: true
    title?: true
    description?: true
    discount?: true
    conditions?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    partnerName?: true
    partnerLogo?: true
    websiteUrl?: true
    title?: true
    description?: true
    discount?: true
    conditions?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: string
    partnerName: string
    partnerLogo: string | null
    websiteUrl: string | null
    title: string
    description: string
    discount: string | null
    conditions: string | null
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerName?: boolean
    partnerLogo?: boolean
    websiteUrl?: boolean
    title?: boolean
    description?: boolean
    discount?: boolean
    conditions?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerName?: boolean
    partnerLogo?: boolean
    websiteUrl?: boolean
    title?: boolean
    description?: boolean
    discount?: boolean
    conditions?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    partnerName?: boolean
    partnerLogo?: boolean
    websiteUrl?: boolean
    title?: boolean
    description?: boolean
    discount?: boolean
    conditions?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partnerName: string
      partnerLogo: string | null
      websiteUrl: string | null
      title: string
      description: string
      discount: string | null
      conditions: string | null
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
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
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Benefit model
   */ 
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'String'>
    readonly partnerName: FieldRef<"Benefit", 'String'>
    readonly partnerLogo: FieldRef<"Benefit", 'String'>
    readonly websiteUrl: FieldRef<"Benefit", 'String'>
    readonly title: FieldRef<"Benefit", 'String'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly discount: FieldRef<"Benefit", 'String'>
    readonly conditions: FieldRef<"Benefit", 'String'>
    readonly isActive: FieldRef<"Benefit", 'Boolean'>
    readonly sortOrder: FieldRef<"Benefit", 'Int'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
  }


  /**
   * Model AvailabilityRequest
   */

  export type AggregateAvailabilityRequest = {
    _count: AvailabilityRequestCountAggregateOutputType | null
    _min: AvailabilityRequestMinAggregateOutputType | null
    _max: AvailabilityRequestMaxAggregateOutputType | null
  }

  export type AvailabilityRequestMinAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityRequestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityRequestCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityRequestMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityRequestMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityRequestCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityRequest to aggregate.
     */
    where?: AvailabilityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRequests to fetch.
     */
    orderBy?: AvailabilityRequestOrderByWithRelationInput | AvailabilityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityRequests
    **/
    _count?: true | AvailabilityRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityRequestMaxAggregateInputType
  }

  export type GetAvailabilityRequestAggregateType<T extends AvailabilityRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityRequest[P]>
      : GetScalarType<T[P], AggregateAvailabilityRequest[P]>
  }




  export type AvailabilityRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityRequestWhereInput
    orderBy?: AvailabilityRequestOrderByWithAggregationInput | AvailabilityRequestOrderByWithAggregationInput[]
    by: AvailabilityRequestScalarFieldEnum[] | AvailabilityRequestScalarFieldEnum
    having?: AvailabilityRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityRequestCountAggregateInputType | true
    _min?: AvailabilityRequestMinAggregateInputType
    _max?: AvailabilityRequestMaxAggregateInputType
  }

  export type AvailabilityRequestGroupByOutputType = {
    id: string
    title: string
    startDate: Date
    endDate: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityRequestCountAggregateOutputType | null
    _min: AvailabilityRequestMinAggregateOutputType | null
    _max: AvailabilityRequestMaxAggregateOutputType | null
  }

  type GetAvailabilityRequestGroupByPayload<T extends AvailabilityRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityRequestGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    days?: boolean | AvailabilityRequest$daysArgs<ExtArgs>
    _count?: boolean | AvailabilityRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityRequest"]>

  export type AvailabilityRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["availabilityRequest"]>

  export type AvailabilityRequestSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | AvailabilityRequest$daysArgs<ExtArgs>
    _count?: boolean | AvailabilityRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailabilityRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailabilityRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityRequest"
    objects: {
      days: Prisma.$AvailabilityDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startDate: Date
      endDate: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilityRequest"]>
    composites: {}
  }

  type AvailabilityRequestGetPayload<S extends boolean | null | undefined | AvailabilityRequestDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityRequestPayload, S>

  type AvailabilityRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityRequestCountAggregateInputType | true
    }

  export interface AvailabilityRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityRequest'], meta: { name: 'AvailabilityRequest' } }
    /**
     * Find zero or one AvailabilityRequest that matches the filter.
     * @param {AvailabilityRequestFindUniqueArgs} args - Arguments to find a AvailabilityRequest
     * @example
     * // Get one AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityRequestFindUniqueArgs>(args: SelectSubset<T, AvailabilityRequestFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailabilityRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailabilityRequestFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityRequest
     * @example
     * // Get one AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailabilityRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestFindFirstArgs} args - Arguments to find a AvailabilityRequest
     * @example
     * // Get one AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityRequestFindFirstArgs>(args?: SelectSubset<T, AvailabilityRequestFindFirstArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailabilityRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestFindFirstOrThrowArgs} args - Arguments to find a AvailabilityRequest
     * @example
     * // Get one AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailabilityRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityRequests
     * const availabilityRequests = await prisma.availabilityRequest.findMany()
     * 
     * // Get first 10 AvailabilityRequests
     * const availabilityRequests = await prisma.availabilityRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityRequestWithIdOnly = await prisma.availabilityRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityRequestFindManyArgs>(args?: SelectSubset<T, AvailabilityRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailabilityRequest.
     * @param {AvailabilityRequestCreateArgs} args - Arguments to create a AvailabilityRequest.
     * @example
     * // Create one AvailabilityRequest
     * const AvailabilityRequest = await prisma.availabilityRequest.create({
     *   data: {
     *     // ... data to create a AvailabilityRequest
     *   }
     * })
     * 
     */
    create<T extends AvailabilityRequestCreateArgs>(args: SelectSubset<T, AvailabilityRequestCreateArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailabilityRequests.
     * @param {AvailabilityRequestCreateManyArgs} args - Arguments to create many AvailabilityRequests.
     * @example
     * // Create many AvailabilityRequests
     * const availabilityRequest = await prisma.availabilityRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityRequestCreateManyArgs>(args?: SelectSubset<T, AvailabilityRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityRequests and returns the data saved in the database.
     * @param {AvailabilityRequestCreateManyAndReturnArgs} args - Arguments to create many AvailabilityRequests.
     * @example
     * // Create many AvailabilityRequests
     * const availabilityRequest = await prisma.availabilityRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityRequests and only return the `id`
     * const availabilityRequestWithIdOnly = await prisma.availabilityRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailabilityRequest.
     * @param {AvailabilityRequestDeleteArgs} args - Arguments to delete one AvailabilityRequest.
     * @example
     * // Delete one AvailabilityRequest
     * const AvailabilityRequest = await prisma.availabilityRequest.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityRequest
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityRequestDeleteArgs>(args: SelectSubset<T, AvailabilityRequestDeleteArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailabilityRequest.
     * @param {AvailabilityRequestUpdateArgs} args - Arguments to update one AvailabilityRequest.
     * @example
     * // Update one AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityRequestUpdateArgs>(args: SelectSubset<T, AvailabilityRequestUpdateArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailabilityRequests.
     * @param {AvailabilityRequestDeleteManyArgs} args - Arguments to filter AvailabilityRequests to delete.
     * @example
     * // Delete a few AvailabilityRequests
     * const { count } = await prisma.availabilityRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityRequestDeleteManyArgs>(args?: SelectSubset<T, AvailabilityRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityRequests
     * const availabilityRequest = await prisma.availabilityRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityRequestUpdateManyArgs>(args: SelectSubset<T, AvailabilityRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilityRequest.
     * @param {AvailabilityRequestUpsertArgs} args - Arguments to update or create a AvailabilityRequest.
     * @example
     * // Update or create a AvailabilityRequest
     * const availabilityRequest = await prisma.availabilityRequest.upsert({
     *   create: {
     *     // ... data to create a AvailabilityRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityRequest we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityRequestUpsertArgs>(args: SelectSubset<T, AvailabilityRequestUpsertArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailabilityRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestCountArgs} args - Arguments to filter AvailabilityRequests to count.
     * @example
     * // Count the number of AvailabilityRequests
     * const count = await prisma.availabilityRequest.count({
     *   where: {
     *     // ... the filter for the AvailabilityRequests we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityRequestCountArgs>(
      args?: Subset<T, AvailabilityRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityRequestAggregateArgs>(args: Subset<T, AvailabilityRequestAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityRequestAggregateType<T>>

    /**
     * Group by AvailabilityRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRequestGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityRequestGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityRequest model
   */
  readonly fields: AvailabilityRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends AvailabilityRequest$daysArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityRequest$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AvailabilityRequest model
   */ 
  interface AvailabilityRequestFieldRefs {
    readonly id: FieldRef<"AvailabilityRequest", 'String'>
    readonly title: FieldRef<"AvailabilityRequest", 'String'>
    readonly startDate: FieldRef<"AvailabilityRequest", 'DateTime'>
    readonly endDate: FieldRef<"AvailabilityRequest", 'DateTime'>
    readonly status: FieldRef<"AvailabilityRequest", 'String'>
    readonly createdAt: FieldRef<"AvailabilityRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityRequest findUnique
   */
  export type AvailabilityRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRequest to fetch.
     */
    where: AvailabilityRequestWhereUniqueInput
  }

  /**
   * AvailabilityRequest findUniqueOrThrow
   */
  export type AvailabilityRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRequest to fetch.
     */
    where: AvailabilityRequestWhereUniqueInput
  }

  /**
   * AvailabilityRequest findFirst
   */
  export type AvailabilityRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRequest to fetch.
     */
    where?: AvailabilityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRequests to fetch.
     */
    orderBy?: AvailabilityRequestOrderByWithRelationInput | AvailabilityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityRequests.
     */
    cursor?: AvailabilityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityRequests.
     */
    distinct?: AvailabilityRequestScalarFieldEnum | AvailabilityRequestScalarFieldEnum[]
  }

  /**
   * AvailabilityRequest findFirstOrThrow
   */
  export type AvailabilityRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRequest to fetch.
     */
    where?: AvailabilityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRequests to fetch.
     */
    orderBy?: AvailabilityRequestOrderByWithRelationInput | AvailabilityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityRequests.
     */
    cursor?: AvailabilityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityRequests.
     */
    distinct?: AvailabilityRequestScalarFieldEnum | AvailabilityRequestScalarFieldEnum[]
  }

  /**
   * AvailabilityRequest findMany
   */
  export type AvailabilityRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRequests to fetch.
     */
    where?: AvailabilityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRequests to fetch.
     */
    orderBy?: AvailabilityRequestOrderByWithRelationInput | AvailabilityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityRequests.
     */
    cursor?: AvailabilityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRequests.
     */
    skip?: number
    distinct?: AvailabilityRequestScalarFieldEnum | AvailabilityRequestScalarFieldEnum[]
  }

  /**
   * AvailabilityRequest create
   */
  export type AvailabilityRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityRequest.
     */
    data: XOR<AvailabilityRequestCreateInput, AvailabilityRequestUncheckedCreateInput>
  }

  /**
   * AvailabilityRequest createMany
   */
  export type AvailabilityRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityRequests.
     */
    data: AvailabilityRequestCreateManyInput | AvailabilityRequestCreateManyInput[]
  }

  /**
   * AvailabilityRequest createManyAndReturn
   */
  export type AvailabilityRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailabilityRequests.
     */
    data: AvailabilityRequestCreateManyInput | AvailabilityRequestCreateManyInput[]
  }

  /**
   * AvailabilityRequest update
   */
  export type AvailabilityRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityRequest.
     */
    data: XOR<AvailabilityRequestUpdateInput, AvailabilityRequestUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityRequest to update.
     */
    where: AvailabilityRequestWhereUniqueInput
  }

  /**
   * AvailabilityRequest updateMany
   */
  export type AvailabilityRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityRequests.
     */
    data: XOR<AvailabilityRequestUpdateManyMutationInput, AvailabilityRequestUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityRequests to update
     */
    where?: AvailabilityRequestWhereInput
  }

  /**
   * AvailabilityRequest upsert
   */
  export type AvailabilityRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityRequest to update in case it exists.
     */
    where: AvailabilityRequestWhereUniqueInput
    /**
     * In case the AvailabilityRequest found by the `where` argument doesn't exist, create a new AvailabilityRequest with this data.
     */
    create: XOR<AvailabilityRequestCreateInput, AvailabilityRequestUncheckedCreateInput>
    /**
     * In case the AvailabilityRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityRequestUpdateInput, AvailabilityRequestUncheckedUpdateInput>
  }

  /**
   * AvailabilityRequest delete
   */
  export type AvailabilityRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityRequest to delete.
     */
    where: AvailabilityRequestWhereUniqueInput
  }

  /**
   * AvailabilityRequest deleteMany
   */
  export type AvailabilityRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityRequests to delete
     */
    where?: AvailabilityRequestWhereInput
  }

  /**
   * AvailabilityRequest.days
   */
  export type AvailabilityRequest$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    where?: AvailabilityDayWhereInput
    orderBy?: AvailabilityDayOrderByWithRelationInput | AvailabilityDayOrderByWithRelationInput[]
    cursor?: AvailabilityDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityDayScalarFieldEnum | AvailabilityDayScalarFieldEnum[]
  }

  /**
   * AvailabilityRequest without action
   */
  export type AvailabilityRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRequest
     */
    select?: AvailabilityRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRequestInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityDay
   */

  export type AggregateAvailabilityDay = {
    _count: AvailabilityDayCountAggregateOutputType | null
    _min: AvailabilityDayMinAggregateOutputType | null
    _max: AvailabilityDayMaxAggregateOutputType | null
  }

  export type AvailabilityDayMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    date: Date | null
    eventName: string | null
    note: string | null
  }

  export type AvailabilityDayMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    date: Date | null
    eventName: string | null
    note: string | null
  }

  export type AvailabilityDayCountAggregateOutputType = {
    id: number
    requestId: number
    date: number
    eventName: number
    note: number
    _all: number
  }


  export type AvailabilityDayMinAggregateInputType = {
    id?: true
    requestId?: true
    date?: true
    eventName?: true
    note?: true
  }

  export type AvailabilityDayMaxAggregateInputType = {
    id?: true
    requestId?: true
    date?: true
    eventName?: true
    note?: true
  }

  export type AvailabilityDayCountAggregateInputType = {
    id?: true
    requestId?: true
    date?: true
    eventName?: true
    note?: true
    _all?: true
  }

  export type AvailabilityDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityDay to aggregate.
     */
    where?: AvailabilityDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityDays to fetch.
     */
    orderBy?: AvailabilityDayOrderByWithRelationInput | AvailabilityDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityDays
    **/
    _count?: true | AvailabilityDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityDayMaxAggregateInputType
  }

  export type GetAvailabilityDayAggregateType<T extends AvailabilityDayAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityDay[P]>
      : GetScalarType<T[P], AggregateAvailabilityDay[P]>
  }




  export type AvailabilityDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityDayWhereInput
    orderBy?: AvailabilityDayOrderByWithAggregationInput | AvailabilityDayOrderByWithAggregationInput[]
    by: AvailabilityDayScalarFieldEnum[] | AvailabilityDayScalarFieldEnum
    having?: AvailabilityDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityDayCountAggregateInputType | true
    _min?: AvailabilityDayMinAggregateInputType
    _max?: AvailabilityDayMaxAggregateInputType
  }

  export type AvailabilityDayGroupByOutputType = {
    id: string
    requestId: string
    date: Date
    eventName: string | null
    note: string | null
    _count: AvailabilityDayCountAggregateOutputType | null
    _min: AvailabilityDayMinAggregateOutputType | null
    _max: AvailabilityDayMaxAggregateOutputType | null
  }

  type GetAvailabilityDayGroupByPayload<T extends AvailabilityDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityDayGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityDayGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
    request?: boolean | AvailabilityRequestDefaultArgs<ExtArgs>
    responses?: boolean | AvailabilityDay$responsesArgs<ExtArgs>
    staffPlan?: boolean | AvailabilityDay$staffPlanArgs<ExtArgs>
    _count?: boolean | AvailabilityDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityDay"]>

  export type AvailabilityDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
    request?: boolean | AvailabilityRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityDay"]>

  export type AvailabilityDaySelectScalar = {
    id?: boolean
    requestId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
  }

  export type AvailabilityDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | AvailabilityRequestDefaultArgs<ExtArgs>
    responses?: boolean | AvailabilityDay$responsesArgs<ExtArgs>
    staffPlan?: boolean | AvailabilityDay$staffPlanArgs<ExtArgs>
    _count?: boolean | AvailabilityDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailabilityDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | AvailabilityRequestDefaultArgs<ExtArgs>
  }

  export type $AvailabilityDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityDay"
    objects: {
      request: Prisma.$AvailabilityRequestPayload<ExtArgs>
      responses: Prisma.$AvailabilityResponsePayload<ExtArgs>[]
      staffPlan: Prisma.$StaffPlanDayPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      date: Date
      eventName: string | null
      note: string | null
    }, ExtArgs["result"]["availabilityDay"]>
    composites: {}
  }

  type AvailabilityDayGetPayload<S extends boolean | null | undefined | AvailabilityDayDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityDayPayload, S>

  type AvailabilityDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityDayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityDayCountAggregateInputType | true
    }

  export interface AvailabilityDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityDay'], meta: { name: 'AvailabilityDay' } }
    /**
     * Find zero or one AvailabilityDay that matches the filter.
     * @param {AvailabilityDayFindUniqueArgs} args - Arguments to find a AvailabilityDay
     * @example
     * // Get one AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityDayFindUniqueArgs>(args: SelectSubset<T, AvailabilityDayFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailabilityDay that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailabilityDayFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityDay
     * @example
     * // Get one AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityDayFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailabilityDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayFindFirstArgs} args - Arguments to find a AvailabilityDay
     * @example
     * // Get one AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityDayFindFirstArgs>(args?: SelectSubset<T, AvailabilityDayFindFirstArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailabilityDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayFindFirstOrThrowArgs} args - Arguments to find a AvailabilityDay
     * @example
     * // Get one AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityDayFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailabilityDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityDays
     * const availabilityDays = await prisma.availabilityDay.findMany()
     * 
     * // Get first 10 AvailabilityDays
     * const availabilityDays = await prisma.availabilityDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityDayWithIdOnly = await prisma.availabilityDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityDayFindManyArgs>(args?: SelectSubset<T, AvailabilityDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailabilityDay.
     * @param {AvailabilityDayCreateArgs} args - Arguments to create a AvailabilityDay.
     * @example
     * // Create one AvailabilityDay
     * const AvailabilityDay = await prisma.availabilityDay.create({
     *   data: {
     *     // ... data to create a AvailabilityDay
     *   }
     * })
     * 
     */
    create<T extends AvailabilityDayCreateArgs>(args: SelectSubset<T, AvailabilityDayCreateArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailabilityDays.
     * @param {AvailabilityDayCreateManyArgs} args - Arguments to create many AvailabilityDays.
     * @example
     * // Create many AvailabilityDays
     * const availabilityDay = await prisma.availabilityDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityDayCreateManyArgs>(args?: SelectSubset<T, AvailabilityDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityDays and returns the data saved in the database.
     * @param {AvailabilityDayCreateManyAndReturnArgs} args - Arguments to create many AvailabilityDays.
     * @example
     * // Create many AvailabilityDays
     * const availabilityDay = await prisma.availabilityDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityDays and only return the `id`
     * const availabilityDayWithIdOnly = await prisma.availabilityDay.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityDayCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailabilityDay.
     * @param {AvailabilityDayDeleteArgs} args - Arguments to delete one AvailabilityDay.
     * @example
     * // Delete one AvailabilityDay
     * const AvailabilityDay = await prisma.availabilityDay.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityDay
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDayDeleteArgs>(args: SelectSubset<T, AvailabilityDayDeleteArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailabilityDay.
     * @param {AvailabilityDayUpdateArgs} args - Arguments to update one AvailabilityDay.
     * @example
     * // Update one AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityDayUpdateArgs>(args: SelectSubset<T, AvailabilityDayUpdateArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailabilityDays.
     * @param {AvailabilityDayDeleteManyArgs} args - Arguments to filter AvailabilityDays to delete.
     * @example
     * // Delete a few AvailabilityDays
     * const { count } = await prisma.availabilityDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDayDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityDays
     * const availabilityDay = await prisma.availabilityDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityDayUpdateManyArgs>(args: SelectSubset<T, AvailabilityDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilityDay.
     * @param {AvailabilityDayUpsertArgs} args - Arguments to update or create a AvailabilityDay.
     * @example
     * // Update or create a AvailabilityDay
     * const availabilityDay = await prisma.availabilityDay.upsert({
     *   create: {
     *     // ... data to create a AvailabilityDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityDay we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityDayUpsertArgs>(args: SelectSubset<T, AvailabilityDayUpsertArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailabilityDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayCountArgs} args - Arguments to filter AvailabilityDays to count.
     * @example
     * // Count the number of AvailabilityDays
     * const count = await prisma.availabilityDay.count({
     *   where: {
     *     // ... the filter for the AvailabilityDays we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityDayCountArgs>(
      args?: Subset<T, AvailabilityDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityDayAggregateArgs>(args: Subset<T, AvailabilityDayAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityDayAggregateType<T>>

    /**
     * Group by AvailabilityDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityDayGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityDayGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityDay model
   */
  readonly fields: AvailabilityDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends AvailabilityRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityRequestDefaultArgs<ExtArgs>>): Prisma__AvailabilityRequestClient<$Result.GetResult<Prisma.$AvailabilityRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responses<T extends AvailabilityDay$responsesArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityDay$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findMany"> | Null>
    staffPlan<T extends AvailabilityDay$staffPlanArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityDay$staffPlanArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AvailabilityDay model
   */ 
  interface AvailabilityDayFieldRefs {
    readonly id: FieldRef<"AvailabilityDay", 'String'>
    readonly requestId: FieldRef<"AvailabilityDay", 'String'>
    readonly date: FieldRef<"AvailabilityDay", 'DateTime'>
    readonly eventName: FieldRef<"AvailabilityDay", 'String'>
    readonly note: FieldRef<"AvailabilityDay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityDay findUnique
   */
  export type AvailabilityDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityDay to fetch.
     */
    where: AvailabilityDayWhereUniqueInput
  }

  /**
   * AvailabilityDay findUniqueOrThrow
   */
  export type AvailabilityDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityDay to fetch.
     */
    where: AvailabilityDayWhereUniqueInput
  }

  /**
   * AvailabilityDay findFirst
   */
  export type AvailabilityDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityDay to fetch.
     */
    where?: AvailabilityDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityDays to fetch.
     */
    orderBy?: AvailabilityDayOrderByWithRelationInput | AvailabilityDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityDays.
     */
    cursor?: AvailabilityDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityDays.
     */
    distinct?: AvailabilityDayScalarFieldEnum | AvailabilityDayScalarFieldEnum[]
  }

  /**
   * AvailabilityDay findFirstOrThrow
   */
  export type AvailabilityDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityDay to fetch.
     */
    where?: AvailabilityDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityDays to fetch.
     */
    orderBy?: AvailabilityDayOrderByWithRelationInput | AvailabilityDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityDays.
     */
    cursor?: AvailabilityDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityDays.
     */
    distinct?: AvailabilityDayScalarFieldEnum | AvailabilityDayScalarFieldEnum[]
  }

  /**
   * AvailabilityDay findMany
   */
  export type AvailabilityDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityDays to fetch.
     */
    where?: AvailabilityDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityDays to fetch.
     */
    orderBy?: AvailabilityDayOrderByWithRelationInput | AvailabilityDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityDays.
     */
    cursor?: AvailabilityDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityDays.
     */
    skip?: number
    distinct?: AvailabilityDayScalarFieldEnum | AvailabilityDayScalarFieldEnum[]
  }

  /**
   * AvailabilityDay create
   */
  export type AvailabilityDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityDay.
     */
    data: XOR<AvailabilityDayCreateInput, AvailabilityDayUncheckedCreateInput>
  }

  /**
   * AvailabilityDay createMany
   */
  export type AvailabilityDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityDays.
     */
    data: AvailabilityDayCreateManyInput | AvailabilityDayCreateManyInput[]
  }

  /**
   * AvailabilityDay createManyAndReturn
   */
  export type AvailabilityDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailabilityDays.
     */
    data: AvailabilityDayCreateManyInput | AvailabilityDayCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityDay update
   */
  export type AvailabilityDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityDay.
     */
    data: XOR<AvailabilityDayUpdateInput, AvailabilityDayUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityDay to update.
     */
    where: AvailabilityDayWhereUniqueInput
  }

  /**
   * AvailabilityDay updateMany
   */
  export type AvailabilityDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityDays.
     */
    data: XOR<AvailabilityDayUpdateManyMutationInput, AvailabilityDayUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityDays to update
     */
    where?: AvailabilityDayWhereInput
  }

  /**
   * AvailabilityDay upsert
   */
  export type AvailabilityDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityDay to update in case it exists.
     */
    where: AvailabilityDayWhereUniqueInput
    /**
     * In case the AvailabilityDay found by the `where` argument doesn't exist, create a new AvailabilityDay with this data.
     */
    create: XOR<AvailabilityDayCreateInput, AvailabilityDayUncheckedCreateInput>
    /**
     * In case the AvailabilityDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityDayUpdateInput, AvailabilityDayUncheckedUpdateInput>
  }

  /**
   * AvailabilityDay delete
   */
  export type AvailabilityDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityDay to delete.
     */
    where: AvailabilityDayWhereUniqueInput
  }

  /**
   * AvailabilityDay deleteMany
   */
  export type AvailabilityDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityDays to delete
     */
    where?: AvailabilityDayWhereInput
  }

  /**
   * AvailabilityDay.responses
   */
  export type AvailabilityDay$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    where?: AvailabilityResponseWhereInput
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    cursor?: AvailabilityResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityResponseScalarFieldEnum | AvailabilityResponseScalarFieldEnum[]
  }

  /**
   * AvailabilityDay.staffPlan
   */
  export type AvailabilityDay$staffPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    where?: StaffPlanDayWhereInput
  }

  /**
   * AvailabilityDay without action
   */
  export type AvailabilityDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityResponse
   */

  export type AggregateAvailabilityResponse = {
    _count: AvailabilityResponseCountAggregateOutputType | null
    _min: AvailabilityResponseMinAggregateOutputType | null
    _max: AvailabilityResponseMaxAggregateOutputType | null
  }

  export type AvailabilityResponseMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    dayId: string | null
    status: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityResponseMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    dayId: string | null
    status: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityResponseCountAggregateOutputType = {
    id: number
    employeeId: number
    dayId: number
    status: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityResponseMinAggregateInputType = {
    id?: true
    employeeId?: true
    dayId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityResponseMaxAggregateInputType = {
    id?: true
    employeeId?: true
    dayId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityResponseCountAggregateInputType = {
    id?: true
    employeeId?: true
    dayId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityResponse to aggregate.
     */
    where?: AvailabilityResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityResponses to fetch.
     */
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityResponses
    **/
    _count?: true | AvailabilityResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityResponseMaxAggregateInputType
  }

  export type GetAvailabilityResponseAggregateType<T extends AvailabilityResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityResponse[P]>
      : GetScalarType<T[P], AggregateAvailabilityResponse[P]>
  }




  export type AvailabilityResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityResponseWhereInput
    orderBy?: AvailabilityResponseOrderByWithAggregationInput | AvailabilityResponseOrderByWithAggregationInput[]
    by: AvailabilityResponseScalarFieldEnum[] | AvailabilityResponseScalarFieldEnum
    having?: AvailabilityResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityResponseCountAggregateInputType | true
    _min?: AvailabilityResponseMinAggregateInputType
    _max?: AvailabilityResponseMaxAggregateInputType
  }

  export type AvailabilityResponseGroupByOutputType = {
    id: string
    employeeId: string
    dayId: string
    status: string
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityResponseCountAggregateOutputType | null
    _min: AvailabilityResponseMinAggregateOutputType | null
    _max: AvailabilityResponseMaxAggregateOutputType | null
  }

  type GetAvailabilityResponseGroupByPayload<T extends AvailabilityResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityResponseGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityResponseGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    dayId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    day?: boolean | AvailabilityDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityResponse"]>

  export type AvailabilityResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    dayId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    day?: boolean | AvailabilityDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityResponse"]>

  export type AvailabilityResponseSelectScalar = {
    id?: boolean
    employeeId?: boolean
    dayId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    day?: boolean | AvailabilityDayDefaultArgs<ExtArgs>
  }
  export type AvailabilityResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    day?: boolean | AvailabilityDayDefaultArgs<ExtArgs>
  }

  export type $AvailabilityResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityResponse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      day: Prisma.$AvailabilityDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      dayId: string
      status: string
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilityResponse"]>
    composites: {}
  }

  type AvailabilityResponseGetPayload<S extends boolean | null | undefined | AvailabilityResponseDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityResponsePayload, S>

  type AvailabilityResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityResponseCountAggregateInputType | true
    }

  export interface AvailabilityResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityResponse'], meta: { name: 'AvailabilityResponse' } }
    /**
     * Find zero or one AvailabilityResponse that matches the filter.
     * @param {AvailabilityResponseFindUniqueArgs} args - Arguments to find a AvailabilityResponse
     * @example
     * // Get one AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityResponseFindUniqueArgs>(args: SelectSubset<T, AvailabilityResponseFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailabilityResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailabilityResponseFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityResponse
     * @example
     * // Get one AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailabilityResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseFindFirstArgs} args - Arguments to find a AvailabilityResponse
     * @example
     * // Get one AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityResponseFindFirstArgs>(args?: SelectSubset<T, AvailabilityResponseFindFirstArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailabilityResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseFindFirstOrThrowArgs} args - Arguments to find a AvailabilityResponse
     * @example
     * // Get one AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailabilityResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityResponses
     * const availabilityResponses = await prisma.availabilityResponse.findMany()
     * 
     * // Get first 10 AvailabilityResponses
     * const availabilityResponses = await prisma.availabilityResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityResponseWithIdOnly = await prisma.availabilityResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityResponseFindManyArgs>(args?: SelectSubset<T, AvailabilityResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailabilityResponse.
     * @param {AvailabilityResponseCreateArgs} args - Arguments to create a AvailabilityResponse.
     * @example
     * // Create one AvailabilityResponse
     * const AvailabilityResponse = await prisma.availabilityResponse.create({
     *   data: {
     *     // ... data to create a AvailabilityResponse
     *   }
     * })
     * 
     */
    create<T extends AvailabilityResponseCreateArgs>(args: SelectSubset<T, AvailabilityResponseCreateArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailabilityResponses.
     * @param {AvailabilityResponseCreateManyArgs} args - Arguments to create many AvailabilityResponses.
     * @example
     * // Create many AvailabilityResponses
     * const availabilityResponse = await prisma.availabilityResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityResponseCreateManyArgs>(args?: SelectSubset<T, AvailabilityResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityResponses and returns the data saved in the database.
     * @param {AvailabilityResponseCreateManyAndReturnArgs} args - Arguments to create many AvailabilityResponses.
     * @example
     * // Create many AvailabilityResponses
     * const availabilityResponse = await prisma.availabilityResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityResponses and only return the `id`
     * const availabilityResponseWithIdOnly = await prisma.availabilityResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailabilityResponse.
     * @param {AvailabilityResponseDeleteArgs} args - Arguments to delete one AvailabilityResponse.
     * @example
     * // Delete one AvailabilityResponse
     * const AvailabilityResponse = await prisma.availabilityResponse.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityResponse
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityResponseDeleteArgs>(args: SelectSubset<T, AvailabilityResponseDeleteArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailabilityResponse.
     * @param {AvailabilityResponseUpdateArgs} args - Arguments to update one AvailabilityResponse.
     * @example
     * // Update one AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityResponseUpdateArgs>(args: SelectSubset<T, AvailabilityResponseUpdateArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailabilityResponses.
     * @param {AvailabilityResponseDeleteManyArgs} args - Arguments to filter AvailabilityResponses to delete.
     * @example
     * // Delete a few AvailabilityResponses
     * const { count } = await prisma.availabilityResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityResponseDeleteManyArgs>(args?: SelectSubset<T, AvailabilityResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityResponses
     * const availabilityResponse = await prisma.availabilityResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityResponseUpdateManyArgs>(args: SelectSubset<T, AvailabilityResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilityResponse.
     * @param {AvailabilityResponseUpsertArgs} args - Arguments to update or create a AvailabilityResponse.
     * @example
     * // Update or create a AvailabilityResponse
     * const availabilityResponse = await prisma.availabilityResponse.upsert({
     *   create: {
     *     // ... data to create a AvailabilityResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityResponse we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityResponseUpsertArgs>(args: SelectSubset<T, AvailabilityResponseUpsertArgs<ExtArgs>>): Prisma__AvailabilityResponseClient<$Result.GetResult<Prisma.$AvailabilityResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailabilityResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseCountArgs} args - Arguments to filter AvailabilityResponses to count.
     * @example
     * // Count the number of AvailabilityResponses
     * const count = await prisma.availabilityResponse.count({
     *   where: {
     *     // ... the filter for the AvailabilityResponses we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityResponseCountArgs>(
      args?: Subset<T, AvailabilityResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityResponseAggregateArgs>(args: Subset<T, AvailabilityResponseAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityResponseAggregateType<T>>

    /**
     * Group by AvailabilityResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityResponseGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityResponseGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityResponse model
   */
  readonly fields: AvailabilityResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    day<T extends AvailabilityDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityDayDefaultArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AvailabilityResponse model
   */ 
  interface AvailabilityResponseFieldRefs {
    readonly id: FieldRef<"AvailabilityResponse", 'String'>
    readonly employeeId: FieldRef<"AvailabilityResponse", 'String'>
    readonly dayId: FieldRef<"AvailabilityResponse", 'String'>
    readonly status: FieldRef<"AvailabilityResponse", 'String'>
    readonly comment: FieldRef<"AvailabilityResponse", 'String'>
    readonly createdAt: FieldRef<"AvailabilityResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityResponse findUnique
   */
  export type AvailabilityResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityResponse to fetch.
     */
    where: AvailabilityResponseWhereUniqueInput
  }

  /**
   * AvailabilityResponse findUniqueOrThrow
   */
  export type AvailabilityResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityResponse to fetch.
     */
    where: AvailabilityResponseWhereUniqueInput
  }

  /**
   * AvailabilityResponse findFirst
   */
  export type AvailabilityResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityResponse to fetch.
     */
    where?: AvailabilityResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityResponses to fetch.
     */
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityResponses.
     */
    cursor?: AvailabilityResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityResponses.
     */
    distinct?: AvailabilityResponseScalarFieldEnum | AvailabilityResponseScalarFieldEnum[]
  }

  /**
   * AvailabilityResponse findFirstOrThrow
   */
  export type AvailabilityResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityResponse to fetch.
     */
    where?: AvailabilityResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityResponses to fetch.
     */
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityResponses.
     */
    cursor?: AvailabilityResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityResponses.
     */
    distinct?: AvailabilityResponseScalarFieldEnum | AvailabilityResponseScalarFieldEnum[]
  }

  /**
   * AvailabilityResponse findMany
   */
  export type AvailabilityResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityResponses to fetch.
     */
    where?: AvailabilityResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityResponses to fetch.
     */
    orderBy?: AvailabilityResponseOrderByWithRelationInput | AvailabilityResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityResponses.
     */
    cursor?: AvailabilityResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityResponses.
     */
    skip?: number
    distinct?: AvailabilityResponseScalarFieldEnum | AvailabilityResponseScalarFieldEnum[]
  }

  /**
   * AvailabilityResponse create
   */
  export type AvailabilityResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityResponse.
     */
    data: XOR<AvailabilityResponseCreateInput, AvailabilityResponseUncheckedCreateInput>
  }

  /**
   * AvailabilityResponse createMany
   */
  export type AvailabilityResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityResponses.
     */
    data: AvailabilityResponseCreateManyInput | AvailabilityResponseCreateManyInput[]
  }

  /**
   * AvailabilityResponse createManyAndReturn
   */
  export type AvailabilityResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailabilityResponses.
     */
    data: AvailabilityResponseCreateManyInput | AvailabilityResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityResponse update
   */
  export type AvailabilityResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityResponse.
     */
    data: XOR<AvailabilityResponseUpdateInput, AvailabilityResponseUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityResponse to update.
     */
    where: AvailabilityResponseWhereUniqueInput
  }

  /**
   * AvailabilityResponse updateMany
   */
  export type AvailabilityResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityResponses.
     */
    data: XOR<AvailabilityResponseUpdateManyMutationInput, AvailabilityResponseUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityResponses to update
     */
    where?: AvailabilityResponseWhereInput
  }

  /**
   * AvailabilityResponse upsert
   */
  export type AvailabilityResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityResponse to update in case it exists.
     */
    where: AvailabilityResponseWhereUniqueInput
    /**
     * In case the AvailabilityResponse found by the `where` argument doesn't exist, create a new AvailabilityResponse with this data.
     */
    create: XOR<AvailabilityResponseCreateInput, AvailabilityResponseUncheckedCreateInput>
    /**
     * In case the AvailabilityResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityResponseUpdateInput, AvailabilityResponseUncheckedUpdateInput>
  }

  /**
   * AvailabilityResponse delete
   */
  export type AvailabilityResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityResponse to delete.
     */
    where: AvailabilityResponseWhereUniqueInput
  }

  /**
   * AvailabilityResponse deleteMany
   */
  export type AvailabilityResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityResponses to delete
     */
    where?: AvailabilityResponseWhereInput
  }

  /**
   * AvailabilityResponse without action
   */
  export type AvailabilityResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityResponse
     */
    select?: AvailabilityResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityResponseInclude<ExtArgs> | null
  }


  /**
   * Model StaffPlanDay
   */

  export type AggregateStaffPlanDay = {
    _count: StaffPlanDayCountAggregateOutputType | null
    _min: StaffPlanDayMinAggregateOutputType | null
    _max: StaffPlanDayMaxAggregateOutputType | null
  }

  export type StaffPlanDayMinAggregateOutputType = {
    id: string | null
    dayId: string | null
    date: Date | null
    eventName: string | null
    note: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffPlanDayMaxAggregateOutputType = {
    id: string | null
    dayId: string | null
    date: Date | null
    eventName: string | null
    note: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffPlanDayCountAggregateOutputType = {
    id: number
    dayId: number
    date: number
    eventName: number
    note: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffPlanDayMinAggregateInputType = {
    id?: true
    dayId?: true
    date?: true
    eventName?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffPlanDayMaxAggregateInputType = {
    id?: true
    dayId?: true
    date?: true
    eventName?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffPlanDayCountAggregateInputType = {
    id?: true
    dayId?: true
    date?: true
    eventName?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffPlanDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPlanDay to aggregate.
     */
    where?: StaffPlanDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanDays to fetch.
     */
    orderBy?: StaffPlanDayOrderByWithRelationInput | StaffPlanDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffPlanDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffPlanDays
    **/
    _count?: true | StaffPlanDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffPlanDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffPlanDayMaxAggregateInputType
  }

  export type GetStaffPlanDayAggregateType<T extends StaffPlanDayAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffPlanDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffPlanDay[P]>
      : GetScalarType<T[P], AggregateStaffPlanDay[P]>
  }




  export type StaffPlanDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPlanDayWhereInput
    orderBy?: StaffPlanDayOrderByWithAggregationInput | StaffPlanDayOrderByWithAggregationInput[]
    by: StaffPlanDayScalarFieldEnum[] | StaffPlanDayScalarFieldEnum
    having?: StaffPlanDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffPlanDayCountAggregateInputType | true
    _min?: StaffPlanDayMinAggregateInputType
    _max?: StaffPlanDayMaxAggregateInputType
  }

  export type StaffPlanDayGroupByOutputType = {
    id: string
    dayId: string | null
    date: Date
    eventName: string | null
    note: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: StaffPlanDayCountAggregateOutputType | null
    _min: StaffPlanDayMinAggregateOutputType | null
    _max: StaffPlanDayMaxAggregateOutputType | null
  }

  type GetStaffPlanDayGroupByPayload<T extends StaffPlanDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffPlanDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffPlanDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffPlanDayGroupByOutputType[P]>
            : GetScalarType<T[P], StaffPlanDayGroupByOutputType[P]>
        }
      >
    >


  export type StaffPlanDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | StaffPlanDay$dayArgs<ExtArgs>
    rows?: boolean | StaffPlanDay$rowsArgs<ExtArgs>
    _count?: boolean | StaffPlanDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffPlanDay"]>

  export type StaffPlanDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | StaffPlanDay$dayArgs<ExtArgs>
  }, ExtArgs["result"]["staffPlanDay"]>

  export type StaffPlanDaySelectScalar = {
    id?: boolean
    dayId?: boolean
    date?: boolean
    eventName?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffPlanDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | StaffPlanDay$dayArgs<ExtArgs>
    rows?: boolean | StaffPlanDay$rowsArgs<ExtArgs>
    _count?: boolean | StaffPlanDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffPlanDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | StaffPlanDay$dayArgs<ExtArgs>
  }

  export type $StaffPlanDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffPlanDay"
    objects: {
      day: Prisma.$AvailabilityDayPayload<ExtArgs> | null
      rows: Prisma.$StaffPlanRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayId: string | null
      date: Date
      eventName: string | null
      note: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffPlanDay"]>
    composites: {}
  }

  type StaffPlanDayGetPayload<S extends boolean | null | undefined | StaffPlanDayDefaultArgs> = $Result.GetResult<Prisma.$StaffPlanDayPayload, S>

  type StaffPlanDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaffPlanDayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaffPlanDayCountAggregateInputType | true
    }

  export interface StaffPlanDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffPlanDay'], meta: { name: 'StaffPlanDay' } }
    /**
     * Find zero or one StaffPlanDay that matches the filter.
     * @param {StaffPlanDayFindUniqueArgs} args - Arguments to find a StaffPlanDay
     * @example
     * // Get one StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffPlanDayFindUniqueArgs>(args: SelectSubset<T, StaffPlanDayFindUniqueArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StaffPlanDay that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaffPlanDayFindUniqueOrThrowArgs} args - Arguments to find a StaffPlanDay
     * @example
     * // Get one StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffPlanDayFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffPlanDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StaffPlanDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayFindFirstArgs} args - Arguments to find a StaffPlanDay
     * @example
     * // Get one StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffPlanDayFindFirstArgs>(args?: SelectSubset<T, StaffPlanDayFindFirstArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StaffPlanDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayFindFirstOrThrowArgs} args - Arguments to find a StaffPlanDay
     * @example
     * // Get one StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffPlanDayFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffPlanDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StaffPlanDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffPlanDays
     * const staffPlanDays = await prisma.staffPlanDay.findMany()
     * 
     * // Get first 10 StaffPlanDays
     * const staffPlanDays = await prisma.staffPlanDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffPlanDayWithIdOnly = await prisma.staffPlanDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffPlanDayFindManyArgs>(args?: SelectSubset<T, StaffPlanDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StaffPlanDay.
     * @param {StaffPlanDayCreateArgs} args - Arguments to create a StaffPlanDay.
     * @example
     * // Create one StaffPlanDay
     * const StaffPlanDay = await prisma.staffPlanDay.create({
     *   data: {
     *     // ... data to create a StaffPlanDay
     *   }
     * })
     * 
     */
    create<T extends StaffPlanDayCreateArgs>(args: SelectSubset<T, StaffPlanDayCreateArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StaffPlanDays.
     * @param {StaffPlanDayCreateManyArgs} args - Arguments to create many StaffPlanDays.
     * @example
     * // Create many StaffPlanDays
     * const staffPlanDay = await prisma.staffPlanDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffPlanDayCreateManyArgs>(args?: SelectSubset<T, StaffPlanDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffPlanDays and returns the data saved in the database.
     * @param {StaffPlanDayCreateManyAndReturnArgs} args - Arguments to create many StaffPlanDays.
     * @example
     * // Create many StaffPlanDays
     * const staffPlanDay = await prisma.staffPlanDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffPlanDays and only return the `id`
     * const staffPlanDayWithIdOnly = await prisma.staffPlanDay.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffPlanDayCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffPlanDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StaffPlanDay.
     * @param {StaffPlanDayDeleteArgs} args - Arguments to delete one StaffPlanDay.
     * @example
     * // Delete one StaffPlanDay
     * const StaffPlanDay = await prisma.staffPlanDay.delete({
     *   where: {
     *     // ... filter to delete one StaffPlanDay
     *   }
     * })
     * 
     */
    delete<T extends StaffPlanDayDeleteArgs>(args: SelectSubset<T, StaffPlanDayDeleteArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StaffPlanDay.
     * @param {StaffPlanDayUpdateArgs} args - Arguments to update one StaffPlanDay.
     * @example
     * // Update one StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffPlanDayUpdateArgs>(args: SelectSubset<T, StaffPlanDayUpdateArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StaffPlanDays.
     * @param {StaffPlanDayDeleteManyArgs} args - Arguments to filter StaffPlanDays to delete.
     * @example
     * // Delete a few StaffPlanDays
     * const { count } = await prisma.staffPlanDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffPlanDayDeleteManyArgs>(args?: SelectSubset<T, StaffPlanDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPlanDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffPlanDays
     * const staffPlanDay = await prisma.staffPlanDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffPlanDayUpdateManyArgs>(args: SelectSubset<T, StaffPlanDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaffPlanDay.
     * @param {StaffPlanDayUpsertArgs} args - Arguments to update or create a StaffPlanDay.
     * @example
     * // Update or create a StaffPlanDay
     * const staffPlanDay = await prisma.staffPlanDay.upsert({
     *   create: {
     *     // ... data to create a StaffPlanDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffPlanDay we want to update
     *   }
     * })
     */
    upsert<T extends StaffPlanDayUpsertArgs>(args: SelectSubset<T, StaffPlanDayUpsertArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StaffPlanDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayCountArgs} args - Arguments to filter StaffPlanDays to count.
     * @example
     * // Count the number of StaffPlanDays
     * const count = await prisma.staffPlanDay.count({
     *   where: {
     *     // ... the filter for the StaffPlanDays we want to count
     *   }
     * })
    **/
    count<T extends StaffPlanDayCountArgs>(
      args?: Subset<T, StaffPlanDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffPlanDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffPlanDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffPlanDayAggregateArgs>(args: Subset<T, StaffPlanDayAggregateArgs>): Prisma.PrismaPromise<GetStaffPlanDayAggregateType<T>>

    /**
     * Group by StaffPlanDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanDayGroupByArgs} args - Group by arguments.
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
      T extends StaffPlanDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffPlanDayGroupByArgs['orderBy'] }
        : { orderBy?: StaffPlanDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffPlanDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffPlanDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffPlanDay model
   */
  readonly fields: StaffPlanDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffPlanDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffPlanDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    day<T extends StaffPlanDay$dayArgs<ExtArgs> = {}>(args?: Subset<T, StaffPlanDay$dayArgs<ExtArgs>>): Prisma__AvailabilityDayClient<$Result.GetResult<Prisma.$AvailabilityDayPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    rows<T extends StaffPlanDay$rowsArgs<ExtArgs> = {}>(args?: Subset<T, StaffPlanDay$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StaffPlanDay model
   */ 
  interface StaffPlanDayFieldRefs {
    readonly id: FieldRef<"StaffPlanDay", 'String'>
    readonly dayId: FieldRef<"StaffPlanDay", 'String'>
    readonly date: FieldRef<"StaffPlanDay", 'DateTime'>
    readonly eventName: FieldRef<"StaffPlanDay", 'String'>
    readonly note: FieldRef<"StaffPlanDay", 'String'>
    readonly status: FieldRef<"StaffPlanDay", 'String'>
    readonly createdAt: FieldRef<"StaffPlanDay", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffPlanDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffPlanDay findUnique
   */
  export type StaffPlanDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanDay to fetch.
     */
    where: StaffPlanDayWhereUniqueInput
  }

  /**
   * StaffPlanDay findUniqueOrThrow
   */
  export type StaffPlanDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanDay to fetch.
     */
    where: StaffPlanDayWhereUniqueInput
  }

  /**
   * StaffPlanDay findFirst
   */
  export type StaffPlanDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanDay to fetch.
     */
    where?: StaffPlanDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanDays to fetch.
     */
    orderBy?: StaffPlanDayOrderByWithRelationInput | StaffPlanDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPlanDays.
     */
    cursor?: StaffPlanDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPlanDays.
     */
    distinct?: StaffPlanDayScalarFieldEnum | StaffPlanDayScalarFieldEnum[]
  }

  /**
   * StaffPlanDay findFirstOrThrow
   */
  export type StaffPlanDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanDay to fetch.
     */
    where?: StaffPlanDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanDays to fetch.
     */
    orderBy?: StaffPlanDayOrderByWithRelationInput | StaffPlanDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPlanDays.
     */
    cursor?: StaffPlanDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPlanDays.
     */
    distinct?: StaffPlanDayScalarFieldEnum | StaffPlanDayScalarFieldEnum[]
  }

  /**
   * StaffPlanDay findMany
   */
  export type StaffPlanDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanDays to fetch.
     */
    where?: StaffPlanDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanDays to fetch.
     */
    orderBy?: StaffPlanDayOrderByWithRelationInput | StaffPlanDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffPlanDays.
     */
    cursor?: StaffPlanDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanDays.
     */
    skip?: number
    distinct?: StaffPlanDayScalarFieldEnum | StaffPlanDayScalarFieldEnum[]
  }

  /**
   * StaffPlanDay create
   */
  export type StaffPlanDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffPlanDay.
     */
    data: XOR<StaffPlanDayCreateInput, StaffPlanDayUncheckedCreateInput>
  }

  /**
   * StaffPlanDay createMany
   */
  export type StaffPlanDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffPlanDays.
     */
    data: StaffPlanDayCreateManyInput | StaffPlanDayCreateManyInput[]
  }

  /**
   * StaffPlanDay createManyAndReturn
   */
  export type StaffPlanDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StaffPlanDays.
     */
    data: StaffPlanDayCreateManyInput | StaffPlanDayCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffPlanDay update
   */
  export type StaffPlanDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffPlanDay.
     */
    data: XOR<StaffPlanDayUpdateInput, StaffPlanDayUncheckedUpdateInput>
    /**
     * Choose, which StaffPlanDay to update.
     */
    where: StaffPlanDayWhereUniqueInput
  }

  /**
   * StaffPlanDay updateMany
   */
  export type StaffPlanDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffPlanDays.
     */
    data: XOR<StaffPlanDayUpdateManyMutationInput, StaffPlanDayUncheckedUpdateManyInput>
    /**
     * Filter which StaffPlanDays to update
     */
    where?: StaffPlanDayWhereInput
  }

  /**
   * StaffPlanDay upsert
   */
  export type StaffPlanDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffPlanDay to update in case it exists.
     */
    where: StaffPlanDayWhereUniqueInput
    /**
     * In case the StaffPlanDay found by the `where` argument doesn't exist, create a new StaffPlanDay with this data.
     */
    create: XOR<StaffPlanDayCreateInput, StaffPlanDayUncheckedCreateInput>
    /**
     * In case the StaffPlanDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffPlanDayUpdateInput, StaffPlanDayUncheckedUpdateInput>
  }

  /**
   * StaffPlanDay delete
   */
  export type StaffPlanDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
    /**
     * Filter which StaffPlanDay to delete.
     */
    where: StaffPlanDayWhereUniqueInput
  }

  /**
   * StaffPlanDay deleteMany
   */
  export type StaffPlanDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPlanDays to delete
     */
    where?: StaffPlanDayWhereInput
  }

  /**
   * StaffPlanDay.day
   */
  export type StaffPlanDay$dayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityDay
     */
    select?: AvailabilityDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityDayInclude<ExtArgs> | null
    where?: AvailabilityDayWhereInput
  }

  /**
   * StaffPlanDay.rows
   */
  export type StaffPlanDay$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    where?: StaffPlanRowWhereInput
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    cursor?: StaffPlanRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffPlanRowScalarFieldEnum | StaffPlanRowScalarFieldEnum[]
  }

  /**
   * StaffPlanDay without action
   */
  export type StaffPlanDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanDay
     */
    select?: StaffPlanDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanDayInclude<ExtArgs> | null
  }


  /**
   * Model StaffPlanRow
   */

  export type AggregateStaffPlanRow = {
    _count: StaffPlanRowCountAggregateOutputType | null
    _avg: StaffPlanRowAvgAggregateOutputType | null
    _sum: StaffPlanRowSumAggregateOutputType | null
    _min: StaffPlanRowMinAggregateOutputType | null
    _max: StaffPlanRowMaxAggregateOutputType | null
  }

  export type StaffPlanRowAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type StaffPlanRowSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type StaffPlanRowMinAggregateOutputType = {
    id: string | null
    planId: string | null
    sortOrder: number | null
    assignmentLabel: string | null
    employeeId: string | null
    startTime: string | null
    endTime: string | null
    note: string | null
  }

  export type StaffPlanRowMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    sortOrder: number | null
    assignmentLabel: string | null
    employeeId: string | null
    startTime: string | null
    endTime: string | null
    note: string | null
  }

  export type StaffPlanRowCountAggregateOutputType = {
    id: number
    planId: number
    sortOrder: number
    assignmentLabel: number
    employeeId: number
    startTime: number
    endTime: number
    note: number
    _all: number
  }


  export type StaffPlanRowAvgAggregateInputType = {
    sortOrder?: true
  }

  export type StaffPlanRowSumAggregateInputType = {
    sortOrder?: true
  }

  export type StaffPlanRowMinAggregateInputType = {
    id?: true
    planId?: true
    sortOrder?: true
    assignmentLabel?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    note?: true
  }

  export type StaffPlanRowMaxAggregateInputType = {
    id?: true
    planId?: true
    sortOrder?: true
    assignmentLabel?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    note?: true
  }

  export type StaffPlanRowCountAggregateInputType = {
    id?: true
    planId?: true
    sortOrder?: true
    assignmentLabel?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    note?: true
    _all?: true
  }

  export type StaffPlanRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPlanRow to aggregate.
     */
    where?: StaffPlanRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanRows to fetch.
     */
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffPlanRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffPlanRows
    **/
    _count?: true | StaffPlanRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffPlanRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffPlanRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffPlanRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffPlanRowMaxAggregateInputType
  }

  export type GetStaffPlanRowAggregateType<T extends StaffPlanRowAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffPlanRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffPlanRow[P]>
      : GetScalarType<T[P], AggregateStaffPlanRow[P]>
  }




  export type StaffPlanRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPlanRowWhereInput
    orderBy?: StaffPlanRowOrderByWithAggregationInput | StaffPlanRowOrderByWithAggregationInput[]
    by: StaffPlanRowScalarFieldEnum[] | StaffPlanRowScalarFieldEnum
    having?: StaffPlanRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffPlanRowCountAggregateInputType | true
    _avg?: StaffPlanRowAvgAggregateInputType
    _sum?: StaffPlanRowSumAggregateInputType
    _min?: StaffPlanRowMinAggregateInputType
    _max?: StaffPlanRowMaxAggregateInputType
  }

  export type StaffPlanRowGroupByOutputType = {
    id: string
    planId: string
    sortOrder: number
    assignmentLabel: string
    employeeId: string | null
    startTime: string | null
    endTime: string | null
    note: string | null
    _count: StaffPlanRowCountAggregateOutputType | null
    _avg: StaffPlanRowAvgAggregateOutputType | null
    _sum: StaffPlanRowSumAggregateOutputType | null
    _min: StaffPlanRowMinAggregateOutputType | null
    _max: StaffPlanRowMaxAggregateOutputType | null
  }

  type GetStaffPlanRowGroupByPayload<T extends StaffPlanRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffPlanRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffPlanRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffPlanRowGroupByOutputType[P]>
            : GetScalarType<T[P], StaffPlanRowGroupByOutputType[P]>
        }
      >
    >


  export type StaffPlanRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    note?: boolean
    plan?: boolean | StaffPlanDayDefaultArgs<ExtArgs>
    user?: boolean | StaffPlanRow$userArgs<ExtArgs>
  }, ExtArgs["result"]["staffPlanRow"]>

  export type StaffPlanRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    note?: boolean
    plan?: boolean | StaffPlanDayDefaultArgs<ExtArgs>
    user?: boolean | StaffPlanRow$userArgs<ExtArgs>
  }, ExtArgs["result"]["staffPlanRow"]>

  export type StaffPlanRowSelectScalar = {
    id?: boolean
    planId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    note?: boolean
  }

  export type StaffPlanRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StaffPlanDayDefaultArgs<ExtArgs>
    user?: boolean | StaffPlanRow$userArgs<ExtArgs>
  }
  export type StaffPlanRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StaffPlanDayDefaultArgs<ExtArgs>
    user?: boolean | StaffPlanRow$userArgs<ExtArgs>
  }

  export type $StaffPlanRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffPlanRow"
    objects: {
      plan: Prisma.$StaffPlanDayPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      sortOrder: number
      assignmentLabel: string
      employeeId: string | null
      startTime: string | null
      endTime: string | null
      note: string | null
    }, ExtArgs["result"]["staffPlanRow"]>
    composites: {}
  }

  type StaffPlanRowGetPayload<S extends boolean | null | undefined | StaffPlanRowDefaultArgs> = $Result.GetResult<Prisma.$StaffPlanRowPayload, S>

  type StaffPlanRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaffPlanRowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaffPlanRowCountAggregateInputType | true
    }

  export interface StaffPlanRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffPlanRow'], meta: { name: 'StaffPlanRow' } }
    /**
     * Find zero or one StaffPlanRow that matches the filter.
     * @param {StaffPlanRowFindUniqueArgs} args - Arguments to find a StaffPlanRow
     * @example
     * // Get one StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffPlanRowFindUniqueArgs>(args: SelectSubset<T, StaffPlanRowFindUniqueArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StaffPlanRow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaffPlanRowFindUniqueOrThrowArgs} args - Arguments to find a StaffPlanRow
     * @example
     * // Get one StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffPlanRowFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffPlanRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StaffPlanRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowFindFirstArgs} args - Arguments to find a StaffPlanRow
     * @example
     * // Get one StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffPlanRowFindFirstArgs>(args?: SelectSubset<T, StaffPlanRowFindFirstArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StaffPlanRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowFindFirstOrThrowArgs} args - Arguments to find a StaffPlanRow
     * @example
     * // Get one StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffPlanRowFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffPlanRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StaffPlanRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffPlanRows
     * const staffPlanRows = await prisma.staffPlanRow.findMany()
     * 
     * // Get first 10 StaffPlanRows
     * const staffPlanRows = await prisma.staffPlanRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffPlanRowWithIdOnly = await prisma.staffPlanRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffPlanRowFindManyArgs>(args?: SelectSubset<T, StaffPlanRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StaffPlanRow.
     * @param {StaffPlanRowCreateArgs} args - Arguments to create a StaffPlanRow.
     * @example
     * // Create one StaffPlanRow
     * const StaffPlanRow = await prisma.staffPlanRow.create({
     *   data: {
     *     // ... data to create a StaffPlanRow
     *   }
     * })
     * 
     */
    create<T extends StaffPlanRowCreateArgs>(args: SelectSubset<T, StaffPlanRowCreateArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StaffPlanRows.
     * @param {StaffPlanRowCreateManyArgs} args - Arguments to create many StaffPlanRows.
     * @example
     * // Create many StaffPlanRows
     * const staffPlanRow = await prisma.staffPlanRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffPlanRowCreateManyArgs>(args?: SelectSubset<T, StaffPlanRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffPlanRows and returns the data saved in the database.
     * @param {StaffPlanRowCreateManyAndReturnArgs} args - Arguments to create many StaffPlanRows.
     * @example
     * // Create many StaffPlanRows
     * const staffPlanRow = await prisma.staffPlanRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffPlanRows and only return the `id`
     * const staffPlanRowWithIdOnly = await prisma.staffPlanRow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffPlanRowCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffPlanRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StaffPlanRow.
     * @param {StaffPlanRowDeleteArgs} args - Arguments to delete one StaffPlanRow.
     * @example
     * // Delete one StaffPlanRow
     * const StaffPlanRow = await prisma.staffPlanRow.delete({
     *   where: {
     *     // ... filter to delete one StaffPlanRow
     *   }
     * })
     * 
     */
    delete<T extends StaffPlanRowDeleteArgs>(args: SelectSubset<T, StaffPlanRowDeleteArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StaffPlanRow.
     * @param {StaffPlanRowUpdateArgs} args - Arguments to update one StaffPlanRow.
     * @example
     * // Update one StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffPlanRowUpdateArgs>(args: SelectSubset<T, StaffPlanRowUpdateArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StaffPlanRows.
     * @param {StaffPlanRowDeleteManyArgs} args - Arguments to filter StaffPlanRows to delete.
     * @example
     * // Delete a few StaffPlanRows
     * const { count } = await prisma.staffPlanRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffPlanRowDeleteManyArgs>(args?: SelectSubset<T, StaffPlanRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPlanRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffPlanRows
     * const staffPlanRow = await prisma.staffPlanRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffPlanRowUpdateManyArgs>(args: SelectSubset<T, StaffPlanRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaffPlanRow.
     * @param {StaffPlanRowUpsertArgs} args - Arguments to update or create a StaffPlanRow.
     * @example
     * // Update or create a StaffPlanRow
     * const staffPlanRow = await prisma.staffPlanRow.upsert({
     *   create: {
     *     // ... data to create a StaffPlanRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffPlanRow we want to update
     *   }
     * })
     */
    upsert<T extends StaffPlanRowUpsertArgs>(args: SelectSubset<T, StaffPlanRowUpsertArgs<ExtArgs>>): Prisma__StaffPlanRowClient<$Result.GetResult<Prisma.$StaffPlanRowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StaffPlanRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowCountArgs} args - Arguments to filter StaffPlanRows to count.
     * @example
     * // Count the number of StaffPlanRows
     * const count = await prisma.staffPlanRow.count({
     *   where: {
     *     // ... the filter for the StaffPlanRows we want to count
     *   }
     * })
    **/
    count<T extends StaffPlanRowCountArgs>(
      args?: Subset<T, StaffPlanRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffPlanRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffPlanRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffPlanRowAggregateArgs>(args: Subset<T, StaffPlanRowAggregateArgs>): Prisma.PrismaPromise<GetStaffPlanRowAggregateType<T>>

    /**
     * Group by StaffPlanRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPlanRowGroupByArgs} args - Group by arguments.
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
      T extends StaffPlanRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffPlanRowGroupByArgs['orderBy'] }
        : { orderBy?: StaffPlanRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffPlanRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffPlanRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffPlanRow model
   */
  readonly fields: StaffPlanRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffPlanRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffPlanRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends StaffPlanDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffPlanDayDefaultArgs<ExtArgs>>): Prisma__StaffPlanDayClient<$Result.GetResult<Prisma.$StaffPlanDayPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends StaffPlanRow$userArgs<ExtArgs> = {}>(args?: Subset<T, StaffPlanRow$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the StaffPlanRow model
   */ 
  interface StaffPlanRowFieldRefs {
    readonly id: FieldRef<"StaffPlanRow", 'String'>
    readonly planId: FieldRef<"StaffPlanRow", 'String'>
    readonly sortOrder: FieldRef<"StaffPlanRow", 'Int'>
    readonly assignmentLabel: FieldRef<"StaffPlanRow", 'String'>
    readonly employeeId: FieldRef<"StaffPlanRow", 'String'>
    readonly startTime: FieldRef<"StaffPlanRow", 'String'>
    readonly endTime: FieldRef<"StaffPlanRow", 'String'>
    readonly note: FieldRef<"StaffPlanRow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaffPlanRow findUnique
   */
  export type StaffPlanRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanRow to fetch.
     */
    where: StaffPlanRowWhereUniqueInput
  }

  /**
   * StaffPlanRow findUniqueOrThrow
   */
  export type StaffPlanRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanRow to fetch.
     */
    where: StaffPlanRowWhereUniqueInput
  }

  /**
   * StaffPlanRow findFirst
   */
  export type StaffPlanRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanRow to fetch.
     */
    where?: StaffPlanRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanRows to fetch.
     */
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPlanRows.
     */
    cursor?: StaffPlanRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPlanRows.
     */
    distinct?: StaffPlanRowScalarFieldEnum | StaffPlanRowScalarFieldEnum[]
  }

  /**
   * StaffPlanRow findFirstOrThrow
   */
  export type StaffPlanRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanRow to fetch.
     */
    where?: StaffPlanRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanRows to fetch.
     */
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPlanRows.
     */
    cursor?: StaffPlanRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPlanRows.
     */
    distinct?: StaffPlanRowScalarFieldEnum | StaffPlanRowScalarFieldEnum[]
  }

  /**
   * StaffPlanRow findMany
   */
  export type StaffPlanRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter, which StaffPlanRows to fetch.
     */
    where?: StaffPlanRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPlanRows to fetch.
     */
    orderBy?: StaffPlanRowOrderByWithRelationInput | StaffPlanRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffPlanRows.
     */
    cursor?: StaffPlanRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPlanRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPlanRows.
     */
    skip?: number
    distinct?: StaffPlanRowScalarFieldEnum | StaffPlanRowScalarFieldEnum[]
  }

  /**
   * StaffPlanRow create
   */
  export type StaffPlanRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffPlanRow.
     */
    data: XOR<StaffPlanRowCreateInput, StaffPlanRowUncheckedCreateInput>
  }

  /**
   * StaffPlanRow createMany
   */
  export type StaffPlanRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffPlanRows.
     */
    data: StaffPlanRowCreateManyInput | StaffPlanRowCreateManyInput[]
  }

  /**
   * StaffPlanRow createManyAndReturn
   */
  export type StaffPlanRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StaffPlanRows.
     */
    data: StaffPlanRowCreateManyInput | StaffPlanRowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffPlanRow update
   */
  export type StaffPlanRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffPlanRow.
     */
    data: XOR<StaffPlanRowUpdateInput, StaffPlanRowUncheckedUpdateInput>
    /**
     * Choose, which StaffPlanRow to update.
     */
    where: StaffPlanRowWhereUniqueInput
  }

  /**
   * StaffPlanRow updateMany
   */
  export type StaffPlanRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffPlanRows.
     */
    data: XOR<StaffPlanRowUpdateManyMutationInput, StaffPlanRowUncheckedUpdateManyInput>
    /**
     * Filter which StaffPlanRows to update
     */
    where?: StaffPlanRowWhereInput
  }

  /**
   * StaffPlanRow upsert
   */
  export type StaffPlanRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffPlanRow to update in case it exists.
     */
    where: StaffPlanRowWhereUniqueInput
    /**
     * In case the StaffPlanRow found by the `where` argument doesn't exist, create a new StaffPlanRow with this data.
     */
    create: XOR<StaffPlanRowCreateInput, StaffPlanRowUncheckedCreateInput>
    /**
     * In case the StaffPlanRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffPlanRowUpdateInput, StaffPlanRowUncheckedUpdateInput>
  }

  /**
   * StaffPlanRow delete
   */
  export type StaffPlanRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
    /**
     * Filter which StaffPlanRow to delete.
     */
    where: StaffPlanRowWhereUniqueInput
  }

  /**
   * StaffPlanRow deleteMany
   */
  export type StaffPlanRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPlanRows to delete
     */
    where?: StaffPlanRowWhereInput
  }

  /**
   * StaffPlanRow.user
   */
  export type StaffPlanRow$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * StaffPlanRow without action
   */
  export type StaffPlanRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPlanRow
     */
    select?: StaffPlanRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffPlanRowInclude<ExtArgs> | null
  }


  /**
   * Model ShiftTemplate
   */

  export type AggregateShiftTemplate = {
    _count: ShiftTemplateCountAggregateOutputType | null
    _min: ShiftTemplateMinAggregateOutputType | null
    _max: ShiftTemplateMaxAggregateOutputType | null
  }

  export type ShiftTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftTemplateCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftTemplateMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftTemplateCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplate to aggregate.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftTemplates
    **/
    _count?: true | ShiftTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftTemplateMaxAggregateInputType
  }

  export type GetShiftTemplateAggregateType<T extends ShiftTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftTemplate[P]>
      : GetScalarType<T[P], AggregateShiftTemplate[P]>
  }




  export type ShiftTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateWhereInput
    orderBy?: ShiftTemplateOrderByWithAggregationInput | ShiftTemplateOrderByWithAggregationInput[]
    by: ShiftTemplateScalarFieldEnum[] | ShiftTemplateScalarFieldEnum
    having?: ShiftTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftTemplateCountAggregateInputType | true
    _min?: ShiftTemplateMinAggregateInputType
    _max?: ShiftTemplateMaxAggregateInputType
  }

  export type ShiftTemplateGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ShiftTemplateCountAggregateOutputType | null
    _min: ShiftTemplateMinAggregateOutputType | null
    _max: ShiftTemplateMaxAggregateOutputType | null
  }

  type GetShiftTemplateGroupByPayload<T extends ShiftTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ShiftTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rows?: boolean | ShiftTemplate$rowsArgs<ExtArgs>
    _count?: boolean | ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplate"]>

  export type ShiftTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shiftTemplate"]>

  export type ShiftTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | ShiftTemplate$rowsArgs<ExtArgs>
    _count?: boolean | ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShiftTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftTemplate"
    objects: {
      rows: Prisma.$ShiftTemplateRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shiftTemplate"]>
    composites: {}
  }

  type ShiftTemplateGetPayload<S extends boolean | null | undefined | ShiftTemplateDefaultArgs> = $Result.GetResult<Prisma.$ShiftTemplatePayload, S>

  type ShiftTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftTemplateCountAggregateInputType | true
    }

  export interface ShiftTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplate'], meta: { name: 'ShiftTemplate' } }
    /**
     * Find zero or one ShiftTemplate that matches the filter.
     * @param {ShiftTemplateFindUniqueArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftTemplateFindUniqueArgs>(args: SelectSubset<T, ShiftTemplateFindUniqueArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShiftTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShiftTemplateFindUniqueOrThrowArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShiftTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindFirstArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftTemplateFindFirstArgs>(args?: SelectSubset<T, ShiftTemplateFindFirstArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShiftTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindFirstOrThrowArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShiftTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftTemplates
     * const shiftTemplates = await prisma.shiftTemplate.findMany()
     * 
     * // Get first 10 ShiftTemplates
     * const shiftTemplates = await prisma.shiftTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftTemplateWithIdOnly = await prisma.shiftTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftTemplateFindManyArgs>(args?: SelectSubset<T, ShiftTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShiftTemplate.
     * @param {ShiftTemplateCreateArgs} args - Arguments to create a ShiftTemplate.
     * @example
     * // Create one ShiftTemplate
     * const ShiftTemplate = await prisma.shiftTemplate.create({
     *   data: {
     *     // ... data to create a ShiftTemplate
     *   }
     * })
     * 
     */
    create<T extends ShiftTemplateCreateArgs>(args: SelectSubset<T, ShiftTemplateCreateArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShiftTemplates.
     * @param {ShiftTemplateCreateManyArgs} args - Arguments to create many ShiftTemplates.
     * @example
     * // Create many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftTemplateCreateManyArgs>(args?: SelectSubset<T, ShiftTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftTemplates and returns the data saved in the database.
     * @param {ShiftTemplateCreateManyAndReturnArgs} args - Arguments to create many ShiftTemplates.
     * @example
     * // Create many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftTemplates and only return the `id`
     * const shiftTemplateWithIdOnly = await prisma.shiftTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShiftTemplate.
     * @param {ShiftTemplateDeleteArgs} args - Arguments to delete one ShiftTemplate.
     * @example
     * // Delete one ShiftTemplate
     * const ShiftTemplate = await prisma.shiftTemplate.delete({
     *   where: {
     *     // ... filter to delete one ShiftTemplate
     *   }
     * })
     * 
     */
    delete<T extends ShiftTemplateDeleteArgs>(args: SelectSubset<T, ShiftTemplateDeleteArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShiftTemplate.
     * @param {ShiftTemplateUpdateArgs} args - Arguments to update one ShiftTemplate.
     * @example
     * // Update one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftTemplateUpdateArgs>(args: SelectSubset<T, ShiftTemplateUpdateArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShiftTemplates.
     * @param {ShiftTemplateDeleteManyArgs} args - Arguments to filter ShiftTemplates to delete.
     * @example
     * // Delete a few ShiftTemplates
     * const { count } = await prisma.shiftTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftTemplateDeleteManyArgs>(args?: SelectSubset<T, ShiftTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftTemplateUpdateManyArgs>(args: SelectSubset<T, ShiftTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftTemplate.
     * @param {ShiftTemplateUpsertArgs} args - Arguments to update or create a ShiftTemplate.
     * @example
     * // Update or create a ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.upsert({
     *   create: {
     *     // ... data to create a ShiftTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ShiftTemplateUpsertArgs>(args: SelectSubset<T, ShiftTemplateUpsertArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShiftTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateCountArgs} args - Arguments to filter ShiftTemplates to count.
     * @example
     * // Count the number of ShiftTemplates
     * const count = await prisma.shiftTemplate.count({
     *   where: {
     *     // ... the filter for the ShiftTemplates we want to count
     *   }
     * })
    **/
    count<T extends ShiftTemplateCountArgs>(
      args?: Subset<T, ShiftTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftTemplateAggregateArgs>(args: Subset<T, ShiftTemplateAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateAggregateType<T>>

    /**
     * Group by ShiftTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateGroupByArgs} args - Group by arguments.
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
      T extends ShiftTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ShiftTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftTemplate model
   */
  readonly fields: ShiftTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rows<T extends ShiftTemplate$rowsArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplate$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ShiftTemplate model
   */ 
  interface ShiftTemplateFieldRefs {
    readonly id: FieldRef<"ShiftTemplate", 'String'>
    readonly name: FieldRef<"ShiftTemplate", 'String'>
    readonly createdAt: FieldRef<"ShiftTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ShiftTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftTemplate findUnique
   */
  export type ShiftTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate findUniqueOrThrow
   */
  export type ShiftTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate findFirst
   */
  export type ShiftTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplates.
     */
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate findFirstOrThrow
   */
  export type ShiftTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplates.
     */
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate findMany
   */
  export type ShiftTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplates to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate create
   */
  export type ShiftTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftTemplate.
     */
    data: XOR<ShiftTemplateCreateInput, ShiftTemplateUncheckedCreateInput>
  }

  /**
   * ShiftTemplate createMany
   */
  export type ShiftTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftTemplates.
     */
    data: ShiftTemplateCreateManyInput | ShiftTemplateCreateManyInput[]
  }

  /**
   * ShiftTemplate createManyAndReturn
   */
  export type ShiftTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShiftTemplates.
     */
    data: ShiftTemplateCreateManyInput | ShiftTemplateCreateManyInput[]
  }

  /**
   * ShiftTemplate update
   */
  export type ShiftTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftTemplate.
     */
    data: XOR<ShiftTemplateUpdateInput, ShiftTemplateUncheckedUpdateInput>
    /**
     * Choose, which ShiftTemplate to update.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate updateMany
   */
  export type ShiftTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftTemplates.
     */
    data: XOR<ShiftTemplateUpdateManyMutationInput, ShiftTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplates to update
     */
    where?: ShiftTemplateWhereInput
  }

  /**
   * ShiftTemplate upsert
   */
  export type ShiftTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftTemplate to update in case it exists.
     */
    where: ShiftTemplateWhereUniqueInput
    /**
     * In case the ShiftTemplate found by the `where` argument doesn't exist, create a new ShiftTemplate with this data.
     */
    create: XOR<ShiftTemplateCreateInput, ShiftTemplateUncheckedCreateInput>
    /**
     * In case the ShiftTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftTemplateUpdateInput, ShiftTemplateUncheckedUpdateInput>
  }

  /**
   * ShiftTemplate delete
   */
  export type ShiftTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter which ShiftTemplate to delete.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate deleteMany
   */
  export type ShiftTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplates to delete
     */
    where?: ShiftTemplateWhereInput
  }

  /**
   * ShiftTemplate.rows
   */
  export type ShiftTemplate$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    where?: ShiftTemplateRowWhereInput
    orderBy?: ShiftTemplateRowOrderByWithRelationInput | ShiftTemplateRowOrderByWithRelationInput[]
    cursor?: ShiftTemplateRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftTemplateRowScalarFieldEnum | ShiftTemplateRowScalarFieldEnum[]
  }

  /**
   * ShiftTemplate without action
   */
  export type ShiftTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ShiftTemplateRow
   */

  export type AggregateShiftTemplateRow = {
    _count: ShiftTemplateRowCountAggregateOutputType | null
    _avg: ShiftTemplateRowAvgAggregateOutputType | null
    _sum: ShiftTemplateRowSumAggregateOutputType | null
    _min: ShiftTemplateRowMinAggregateOutputType | null
    _max: ShiftTemplateRowMaxAggregateOutputType | null
  }

  export type ShiftTemplateRowAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ShiftTemplateRowSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ShiftTemplateRowMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    sortOrder: number | null
    assignmentLabel: string | null
    defaultStartTime: string | null
  }

  export type ShiftTemplateRowMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    sortOrder: number | null
    assignmentLabel: string | null
    defaultStartTime: string | null
  }

  export type ShiftTemplateRowCountAggregateOutputType = {
    id: number
    templateId: number
    sortOrder: number
    assignmentLabel: number
    defaultStartTime: number
    _all: number
  }


  export type ShiftTemplateRowAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ShiftTemplateRowSumAggregateInputType = {
    sortOrder?: true
  }

  export type ShiftTemplateRowMinAggregateInputType = {
    id?: true
    templateId?: true
    sortOrder?: true
    assignmentLabel?: true
    defaultStartTime?: true
  }

  export type ShiftTemplateRowMaxAggregateInputType = {
    id?: true
    templateId?: true
    sortOrder?: true
    assignmentLabel?: true
    defaultStartTime?: true
  }

  export type ShiftTemplateRowCountAggregateInputType = {
    id?: true
    templateId?: true
    sortOrder?: true
    assignmentLabel?: true
    defaultStartTime?: true
    _all?: true
  }

  export type ShiftTemplateRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateRow to aggregate.
     */
    where?: ShiftTemplateRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRows to fetch.
     */
    orderBy?: ShiftTemplateRowOrderByWithRelationInput | ShiftTemplateRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftTemplateRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftTemplateRows
    **/
    _count?: true | ShiftTemplateRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftTemplateRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftTemplateRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftTemplateRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftTemplateRowMaxAggregateInputType
  }

  export type GetShiftTemplateRowAggregateType<T extends ShiftTemplateRowAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftTemplateRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftTemplateRow[P]>
      : GetScalarType<T[P], AggregateShiftTemplateRow[P]>
  }




  export type ShiftTemplateRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateRowWhereInput
    orderBy?: ShiftTemplateRowOrderByWithAggregationInput | ShiftTemplateRowOrderByWithAggregationInput[]
    by: ShiftTemplateRowScalarFieldEnum[] | ShiftTemplateRowScalarFieldEnum
    having?: ShiftTemplateRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftTemplateRowCountAggregateInputType | true
    _avg?: ShiftTemplateRowAvgAggregateInputType
    _sum?: ShiftTemplateRowSumAggregateInputType
    _min?: ShiftTemplateRowMinAggregateInputType
    _max?: ShiftTemplateRowMaxAggregateInputType
  }

  export type ShiftTemplateRowGroupByOutputType = {
    id: string
    templateId: string
    sortOrder: number
    assignmentLabel: string
    defaultStartTime: string | null
    _count: ShiftTemplateRowCountAggregateOutputType | null
    _avg: ShiftTemplateRowAvgAggregateOutputType | null
    _sum: ShiftTemplateRowSumAggregateOutputType | null
    _min: ShiftTemplateRowMinAggregateOutputType | null
    _max: ShiftTemplateRowMaxAggregateOutputType | null
  }

  type GetShiftTemplateRowGroupByPayload<T extends ShiftTemplateRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftTemplateRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftTemplateRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftTemplateRowGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftTemplateRowGroupByOutputType[P]>
        }
      >
    >


  export type ShiftTemplateRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    defaultStartTime?: boolean
    template?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateRow"]>

  export type ShiftTemplateRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    defaultStartTime?: boolean
    template?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateRow"]>

  export type ShiftTemplateRowSelectScalar = {
    id?: boolean
    templateId?: boolean
    sortOrder?: boolean
    assignmentLabel?: boolean
    defaultStartTime?: boolean
  }

  export type ShiftTemplateRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }

  export type $ShiftTemplateRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftTemplateRow"
    objects: {
      template: Prisma.$ShiftTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      sortOrder: number
      assignmentLabel: string
      defaultStartTime: string | null
    }, ExtArgs["result"]["shiftTemplateRow"]>
    composites: {}
  }

  type ShiftTemplateRowGetPayload<S extends boolean | null | undefined | ShiftTemplateRowDefaultArgs> = $Result.GetResult<Prisma.$ShiftTemplateRowPayload, S>

  type ShiftTemplateRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftTemplateRowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftTemplateRowCountAggregateInputType | true
    }

  export interface ShiftTemplateRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplateRow'], meta: { name: 'ShiftTemplateRow' } }
    /**
     * Find zero or one ShiftTemplateRow that matches the filter.
     * @param {ShiftTemplateRowFindUniqueArgs} args - Arguments to find a ShiftTemplateRow
     * @example
     * // Get one ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftTemplateRowFindUniqueArgs>(args: SelectSubset<T, ShiftTemplateRowFindUniqueArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShiftTemplateRow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShiftTemplateRowFindUniqueOrThrowArgs} args - Arguments to find a ShiftTemplateRow
     * @example
     * // Get one ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftTemplateRowFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftTemplateRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShiftTemplateRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowFindFirstArgs} args - Arguments to find a ShiftTemplateRow
     * @example
     * // Get one ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftTemplateRowFindFirstArgs>(args?: SelectSubset<T, ShiftTemplateRowFindFirstArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShiftTemplateRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowFindFirstOrThrowArgs} args - Arguments to find a ShiftTemplateRow
     * @example
     * // Get one ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftTemplateRowFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftTemplateRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShiftTemplateRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftTemplateRows
     * const shiftTemplateRows = await prisma.shiftTemplateRow.findMany()
     * 
     * // Get first 10 ShiftTemplateRows
     * const shiftTemplateRows = await prisma.shiftTemplateRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftTemplateRowWithIdOnly = await prisma.shiftTemplateRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftTemplateRowFindManyArgs>(args?: SelectSubset<T, ShiftTemplateRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShiftTemplateRow.
     * @param {ShiftTemplateRowCreateArgs} args - Arguments to create a ShiftTemplateRow.
     * @example
     * // Create one ShiftTemplateRow
     * const ShiftTemplateRow = await prisma.shiftTemplateRow.create({
     *   data: {
     *     // ... data to create a ShiftTemplateRow
     *   }
     * })
     * 
     */
    create<T extends ShiftTemplateRowCreateArgs>(args: SelectSubset<T, ShiftTemplateRowCreateArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShiftTemplateRows.
     * @param {ShiftTemplateRowCreateManyArgs} args - Arguments to create many ShiftTemplateRows.
     * @example
     * // Create many ShiftTemplateRows
     * const shiftTemplateRow = await prisma.shiftTemplateRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftTemplateRowCreateManyArgs>(args?: SelectSubset<T, ShiftTemplateRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftTemplateRows and returns the data saved in the database.
     * @param {ShiftTemplateRowCreateManyAndReturnArgs} args - Arguments to create many ShiftTemplateRows.
     * @example
     * // Create many ShiftTemplateRows
     * const shiftTemplateRow = await prisma.shiftTemplateRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftTemplateRows and only return the `id`
     * const shiftTemplateRowWithIdOnly = await prisma.shiftTemplateRow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftTemplateRowCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftTemplateRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShiftTemplateRow.
     * @param {ShiftTemplateRowDeleteArgs} args - Arguments to delete one ShiftTemplateRow.
     * @example
     * // Delete one ShiftTemplateRow
     * const ShiftTemplateRow = await prisma.shiftTemplateRow.delete({
     *   where: {
     *     // ... filter to delete one ShiftTemplateRow
     *   }
     * })
     * 
     */
    delete<T extends ShiftTemplateRowDeleteArgs>(args: SelectSubset<T, ShiftTemplateRowDeleteArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShiftTemplateRow.
     * @param {ShiftTemplateRowUpdateArgs} args - Arguments to update one ShiftTemplateRow.
     * @example
     * // Update one ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftTemplateRowUpdateArgs>(args: SelectSubset<T, ShiftTemplateRowUpdateArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShiftTemplateRows.
     * @param {ShiftTemplateRowDeleteManyArgs} args - Arguments to filter ShiftTemplateRows to delete.
     * @example
     * // Delete a few ShiftTemplateRows
     * const { count } = await prisma.shiftTemplateRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftTemplateRowDeleteManyArgs>(args?: SelectSubset<T, ShiftTemplateRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplateRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftTemplateRows
     * const shiftTemplateRow = await prisma.shiftTemplateRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftTemplateRowUpdateManyArgs>(args: SelectSubset<T, ShiftTemplateRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftTemplateRow.
     * @param {ShiftTemplateRowUpsertArgs} args - Arguments to update or create a ShiftTemplateRow.
     * @example
     * // Update or create a ShiftTemplateRow
     * const shiftTemplateRow = await prisma.shiftTemplateRow.upsert({
     *   create: {
     *     // ... data to create a ShiftTemplateRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftTemplateRow we want to update
     *   }
     * })
     */
    upsert<T extends ShiftTemplateRowUpsertArgs>(args: SelectSubset<T, ShiftTemplateRowUpsertArgs<ExtArgs>>): Prisma__ShiftTemplateRowClient<$Result.GetResult<Prisma.$ShiftTemplateRowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShiftTemplateRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowCountArgs} args - Arguments to filter ShiftTemplateRows to count.
     * @example
     * // Count the number of ShiftTemplateRows
     * const count = await prisma.shiftTemplateRow.count({
     *   where: {
     *     // ... the filter for the ShiftTemplateRows we want to count
     *   }
     * })
    **/
    count<T extends ShiftTemplateRowCountArgs>(
      args?: Subset<T, ShiftTemplateRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftTemplateRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftTemplateRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftTemplateRowAggregateArgs>(args: Subset<T, ShiftTemplateRowAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateRowAggregateType<T>>

    /**
     * Group by ShiftTemplateRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRowGroupByArgs} args - Group by arguments.
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
      T extends ShiftTemplateRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftTemplateRowGroupByArgs['orderBy'] }
        : { orderBy?: ShiftTemplateRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftTemplateRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftTemplateRow model
   */
  readonly fields: ShiftTemplateRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftTemplateRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftTemplateRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends ShiftTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplateDefaultArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ShiftTemplateRow model
   */ 
  interface ShiftTemplateRowFieldRefs {
    readonly id: FieldRef<"ShiftTemplateRow", 'String'>
    readonly templateId: FieldRef<"ShiftTemplateRow", 'String'>
    readonly sortOrder: FieldRef<"ShiftTemplateRow", 'Int'>
    readonly assignmentLabel: FieldRef<"ShiftTemplateRow", 'String'>
    readonly defaultStartTime: FieldRef<"ShiftTemplateRow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShiftTemplateRow findUnique
   */
  export type ShiftTemplateRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRow to fetch.
     */
    where: ShiftTemplateRowWhereUniqueInput
  }

  /**
   * ShiftTemplateRow findUniqueOrThrow
   */
  export type ShiftTemplateRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRow to fetch.
     */
    where: ShiftTemplateRowWhereUniqueInput
  }

  /**
   * ShiftTemplateRow findFirst
   */
  export type ShiftTemplateRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRow to fetch.
     */
    where?: ShiftTemplateRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRows to fetch.
     */
    orderBy?: ShiftTemplateRowOrderByWithRelationInput | ShiftTemplateRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateRows.
     */
    cursor?: ShiftTemplateRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateRows.
     */
    distinct?: ShiftTemplateRowScalarFieldEnum | ShiftTemplateRowScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRow findFirstOrThrow
   */
  export type ShiftTemplateRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRow to fetch.
     */
    where?: ShiftTemplateRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRows to fetch.
     */
    orderBy?: ShiftTemplateRowOrderByWithRelationInput | ShiftTemplateRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateRows.
     */
    cursor?: ShiftTemplateRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateRows.
     */
    distinct?: ShiftTemplateRowScalarFieldEnum | ShiftTemplateRowScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRow findMany
   */
  export type ShiftTemplateRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRows to fetch.
     */
    where?: ShiftTemplateRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRows to fetch.
     */
    orderBy?: ShiftTemplateRowOrderByWithRelationInput | ShiftTemplateRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftTemplateRows.
     */
    cursor?: ShiftTemplateRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRows.
     */
    skip?: number
    distinct?: ShiftTemplateRowScalarFieldEnum | ShiftTemplateRowScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRow create
   */
  export type ShiftTemplateRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftTemplateRow.
     */
    data: XOR<ShiftTemplateRowCreateInput, ShiftTemplateRowUncheckedCreateInput>
  }

  /**
   * ShiftTemplateRow createMany
   */
  export type ShiftTemplateRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftTemplateRows.
     */
    data: ShiftTemplateRowCreateManyInput | ShiftTemplateRowCreateManyInput[]
  }

  /**
   * ShiftTemplateRow createManyAndReturn
   */
  export type ShiftTemplateRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShiftTemplateRows.
     */
    data: ShiftTemplateRowCreateManyInput | ShiftTemplateRowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftTemplateRow update
   */
  export type ShiftTemplateRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftTemplateRow.
     */
    data: XOR<ShiftTemplateRowUpdateInput, ShiftTemplateRowUncheckedUpdateInput>
    /**
     * Choose, which ShiftTemplateRow to update.
     */
    where: ShiftTemplateRowWhereUniqueInput
  }

  /**
   * ShiftTemplateRow updateMany
   */
  export type ShiftTemplateRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftTemplateRows.
     */
    data: XOR<ShiftTemplateRowUpdateManyMutationInput, ShiftTemplateRowUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplateRows to update
     */
    where?: ShiftTemplateRowWhereInput
  }

  /**
   * ShiftTemplateRow upsert
   */
  export type ShiftTemplateRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftTemplateRow to update in case it exists.
     */
    where: ShiftTemplateRowWhereUniqueInput
    /**
     * In case the ShiftTemplateRow found by the `where` argument doesn't exist, create a new ShiftTemplateRow with this data.
     */
    create: XOR<ShiftTemplateRowCreateInput, ShiftTemplateRowUncheckedCreateInput>
    /**
     * In case the ShiftTemplateRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftTemplateRowUpdateInput, ShiftTemplateRowUncheckedUpdateInput>
  }

  /**
   * ShiftTemplateRow delete
   */
  export type ShiftTemplateRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
    /**
     * Filter which ShiftTemplateRow to delete.
     */
    where: ShiftTemplateRowWhereUniqueInput
  }

  /**
   * ShiftTemplateRow deleteMany
   */
  export type ShiftTemplateRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateRows to delete
     */
    where?: ShiftTemplateRowWhereInput
  }

  /**
   * ShiftTemplateRow without action
   */
  export type ShiftTemplateRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRow
     */
    select?: ShiftTemplateRowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    jobRole: 'jobRole',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startDate: 'startDate',
    hourlyWage: 'hourlyWage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PayslipScalarFieldEnum: {
    id: 'id',
    month: 'month',
    year: 'year',
    url: 'url',
    uploadedAt: 'uploadedAt',
    userId: 'userId'
  };

  export type PayslipScalarFieldEnum = (typeof PayslipScalarFieldEnum)[keyof typeof PayslipScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const OnboardingStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type OnboardingStatusScalarFieldEnum = (typeof OnboardingStatusScalarFieldEnum)[keyof typeof OnboardingStatusScalarFieldEnum]


  export const StepProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stepId: 'stepId',
    completed: 'completed',
    data: 'data',
    updatedAt: 'updatedAt'
  };

  export type StepProgressScalarFieldEnum = (typeof StepProgressScalarFieldEnum)[keyof typeof StepProgressScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    type: 'type',
    userId: 'userId',
    uploadedAt: 'uploadedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const TimesheetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    breakMinutes: 'breakMinutes',
    totalHours: 'totalHours',
    status: 'status',
    note: 'note',
    hourlyWage: 'hourlyWage',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimesheetScalarFieldEnum = (typeof TimesheetScalarFieldEnum)[keyof typeof TimesheetScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    partnerName: 'partnerName',
    partnerLogo: 'partnerLogo',
    websiteUrl: 'websiteUrl',
    title: 'title',
    description: 'description',
    discount: 'discount',
    conditions: 'conditions',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const AvailabilityRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityRequestScalarFieldEnum = (typeof AvailabilityRequestScalarFieldEnum)[keyof typeof AvailabilityRequestScalarFieldEnum]


  export const AvailabilityDayScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    date: 'date',
    eventName: 'eventName',
    note: 'note'
  };

  export type AvailabilityDayScalarFieldEnum = (typeof AvailabilityDayScalarFieldEnum)[keyof typeof AvailabilityDayScalarFieldEnum]


  export const AvailabilityResponseScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    dayId: 'dayId',
    status: 'status',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityResponseScalarFieldEnum = (typeof AvailabilityResponseScalarFieldEnum)[keyof typeof AvailabilityResponseScalarFieldEnum]


  export const StaffPlanDayScalarFieldEnum: {
    id: 'id',
    dayId: 'dayId',
    date: 'date',
    eventName: 'eventName',
    note: 'note',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffPlanDayScalarFieldEnum = (typeof StaffPlanDayScalarFieldEnum)[keyof typeof StaffPlanDayScalarFieldEnum]


  export const StaffPlanRowScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    sortOrder: 'sortOrder',
    assignmentLabel: 'assignmentLabel',
    employeeId: 'employeeId',
    startTime: 'startTime',
    endTime: 'endTime',
    note: 'note'
  };

  export type StaffPlanRowScalarFieldEnum = (typeof StaffPlanRowScalarFieldEnum)[keyof typeof StaffPlanRowScalarFieldEnum]


  export const ShiftTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftTemplateScalarFieldEnum = (typeof ShiftTemplateScalarFieldEnum)[keyof typeof ShiftTemplateScalarFieldEnum]


  export const ShiftTemplateRowScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    sortOrder: 'sortOrder',
    assignmentLabel: 'assignmentLabel',
    defaultStartTime: 'defaultStartTime'
  };

  export type ShiftTemplateRowScalarFieldEnum = (typeof ShiftTemplateRowScalarFieldEnum)[keyof typeof ShiftTemplateRowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    jobRole?: StringNullableFilter<"User"> | string | null
    isArchived?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    hourlyWage?: FloatFilter<"User"> | number
    accounts?: AccountListRelationFilter
    documents?: DocumentListRelationFilter
    onboardingStatus?: XOR<OnboardingStatusNullableRelationFilter, OnboardingStatusWhereInput> | null
    payslips?: PayslipListRelationFilter
    sessions?: SessionListRelationFilter
    stepProgresses?: StepProgressListRelationFilter
    timesheets?: TimesheetListRelationFilter
    availabilityResponses?: AvailabilityResponseListRelationFilter
    staffPlanRows?: StaffPlanRowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    jobRole?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDate?: SortOrderInput | SortOrder
    hourlyWage?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    onboardingStatus?: OnboardingStatusOrderByWithRelationInput
    payslips?: PayslipOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    stepProgresses?: StepProgressOrderByRelationAggregateInput
    timesheets?: TimesheetOrderByRelationAggregateInput
    availabilityResponses?: AvailabilityResponseOrderByRelationAggregateInput
    staffPlanRows?: StaffPlanRowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    jobRole?: StringNullableFilter<"User"> | string | null
    isArchived?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    hourlyWage?: FloatFilter<"User"> | number
    accounts?: AccountListRelationFilter
    documents?: DocumentListRelationFilter
    onboardingStatus?: XOR<OnboardingStatusNullableRelationFilter, OnboardingStatusWhereInput> | null
    payslips?: PayslipListRelationFilter
    sessions?: SessionListRelationFilter
    stepProgresses?: StepProgressListRelationFilter
    timesheets?: TimesheetListRelationFilter
    availabilityResponses?: AvailabilityResponseListRelationFilter
    staffPlanRows?: StaffPlanRowListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    jobRole?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDate?: SortOrderInput | SortOrder
    hourlyWage?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    jobRole?: StringNullableWithAggregatesFilter<"User"> | string | null
    isArchived?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    startDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    hourlyWage?: FloatWithAggregatesFilter<"User"> | number
  }

  export type PayslipWhereInput = {
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    id?: StringFilter<"Payslip"> | string
    month?: IntFilter<"Payslip"> | number
    year?: IntFilter<"Payslip"> | number
    url?: StringFilter<"Payslip"> | string
    uploadedAt?: DateTimeFilter<"Payslip"> | Date | string
    userId?: StringFilter<"Payslip"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PayslipOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayslipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_month_year?: PayslipUserIdMonthYearCompoundUniqueInput
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    month?: IntFilter<"Payslip"> | number
    year?: IntFilter<"Payslip"> | number
    url?: StringFilter<"Payslip"> | string
    uploadedAt?: DateTimeFilter<"Payslip"> | Date | string
    userId?: StringFilter<"Payslip"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_month_year">

  export type PayslipOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    _count?: PayslipCountOrderByAggregateInput
    _avg?: PayslipAvgOrderByAggregateInput
    _max?: PayslipMaxOrderByAggregateInput
    _min?: PayslipMinOrderByAggregateInput
    _sum?: PayslipSumOrderByAggregateInput
  }

  export type PayslipScalarWhereWithAggregatesInput = {
    AND?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    OR?: PayslipScalarWhereWithAggregatesInput[]
    NOT?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payslip"> | string
    month?: IntWithAggregatesFilter<"Payslip"> | number
    year?: IntWithAggregatesFilter<"Payslip"> | number
    url?: StringWithAggregatesFilter<"Payslip"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Payslip"> | Date | string
    userId?: StringWithAggregatesFilter<"Payslip"> | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type OnboardingStatusWhereInput = {
    AND?: OnboardingStatusWhereInput | OnboardingStatusWhereInput[]
    OR?: OnboardingStatusWhereInput[]
    NOT?: OnboardingStatusWhereInput | OnboardingStatusWhereInput[]
    id?: StringFilter<"OnboardingStatus"> | string
    userId?: StringFilter<"OnboardingStatus"> | string
    status?: StringFilter<"OnboardingStatus"> | string
    updatedAt?: DateTimeFilter<"OnboardingStatus"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OnboardingStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnboardingStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OnboardingStatusWhereInput | OnboardingStatusWhereInput[]
    OR?: OnboardingStatusWhereInput[]
    NOT?: OnboardingStatusWhereInput | OnboardingStatusWhereInput[]
    status?: StringFilter<"OnboardingStatus"> | string
    updatedAt?: DateTimeFilter<"OnboardingStatus"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OnboardingStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: OnboardingStatusCountOrderByAggregateInput
    _max?: OnboardingStatusMaxOrderByAggregateInput
    _min?: OnboardingStatusMinOrderByAggregateInput
  }

  export type OnboardingStatusScalarWhereWithAggregatesInput = {
    AND?: OnboardingStatusScalarWhereWithAggregatesInput | OnboardingStatusScalarWhereWithAggregatesInput[]
    OR?: OnboardingStatusScalarWhereWithAggregatesInput[]
    NOT?: OnboardingStatusScalarWhereWithAggregatesInput | OnboardingStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OnboardingStatus"> | string
    userId?: StringWithAggregatesFilter<"OnboardingStatus"> | string
    status?: StringWithAggregatesFilter<"OnboardingStatus"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"OnboardingStatus"> | Date | string
  }

  export type StepProgressWhereInput = {
    AND?: StepProgressWhereInput | StepProgressWhereInput[]
    OR?: StepProgressWhereInput[]
    NOT?: StepProgressWhereInput | StepProgressWhereInput[]
    id?: StringFilter<"StepProgress"> | string
    userId?: StringFilter<"StepProgress"> | string
    stepId?: StringFilter<"StepProgress"> | string
    completed?: BoolFilter<"StepProgress"> | boolean
    data?: StringNullableFilter<"StepProgress"> | string | null
    updatedAt?: DateTimeFilter<"StepProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StepProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stepId?: SortOrder
    completed?: SortOrder
    data?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StepProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_stepId?: StepProgressUserIdStepIdCompoundUniqueInput
    AND?: StepProgressWhereInput | StepProgressWhereInput[]
    OR?: StepProgressWhereInput[]
    NOT?: StepProgressWhereInput | StepProgressWhereInput[]
    userId?: StringFilter<"StepProgress"> | string
    stepId?: StringFilter<"StepProgress"> | string
    completed?: BoolFilter<"StepProgress"> | boolean
    data?: StringNullableFilter<"StepProgress"> | string | null
    updatedAt?: DateTimeFilter<"StepProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_stepId">

  export type StepProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stepId?: SortOrder
    completed?: SortOrder
    data?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: StepProgressCountOrderByAggregateInput
    _max?: StepProgressMaxOrderByAggregateInput
    _min?: StepProgressMinOrderByAggregateInput
  }

  export type StepProgressScalarWhereWithAggregatesInput = {
    AND?: StepProgressScalarWhereWithAggregatesInput | StepProgressScalarWhereWithAggregatesInput[]
    OR?: StepProgressScalarWhereWithAggregatesInput[]
    NOT?: StepProgressScalarWhereWithAggregatesInput | StepProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StepProgress"> | string
    userId?: StringWithAggregatesFilter<"StepProgress"> | string
    stepId?: StringWithAggregatesFilter<"StepProgress"> | string
    completed?: BoolWithAggregatesFilter<"StepProgress"> | boolean
    data?: StringNullableWithAggregatesFilter<"StepProgress"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"StepProgress"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    userId?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    name?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    userId?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    userId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type TimesheetWhereInput = {
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    id?: StringFilter<"Timesheet"> | string
    userId?: StringFilter<"Timesheet"> | string
    date?: StringFilter<"Timesheet"> | string
    startTime?: StringFilter<"Timesheet"> | string
    endTime?: StringFilter<"Timesheet"> | string
    breakMinutes?: IntFilter<"Timesheet"> | number
    totalHours?: FloatFilter<"Timesheet"> | number
    status?: StringFilter<"Timesheet"> | string
    note?: StringNullableFilter<"Timesheet"> | string | null
    hourlyWage?: FloatNullableFilter<"Timesheet"> | number | null
    approvedBy?: StringNullableFilter<"Timesheet"> | string | null
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimesheetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    hourlyWage?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimesheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    userId?: StringFilter<"Timesheet"> | string
    date?: StringFilter<"Timesheet"> | string
    startTime?: StringFilter<"Timesheet"> | string
    endTime?: StringFilter<"Timesheet"> | string
    breakMinutes?: IntFilter<"Timesheet"> | number
    totalHours?: FloatFilter<"Timesheet"> | number
    status?: StringFilter<"Timesheet"> | string
    note?: StringNullableFilter<"Timesheet"> | string | null
    hourlyWage?: FloatNullableFilter<"Timesheet"> | number | null
    approvedBy?: StringNullableFilter<"Timesheet"> | string | null
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimesheetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    hourlyWage?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimesheetCountOrderByAggregateInput
    _avg?: TimesheetAvgOrderByAggregateInput
    _max?: TimesheetMaxOrderByAggregateInput
    _min?: TimesheetMinOrderByAggregateInput
    _sum?: TimesheetSumOrderByAggregateInput
  }

  export type TimesheetScalarWhereWithAggregatesInput = {
    AND?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    OR?: TimesheetScalarWhereWithAggregatesInput[]
    NOT?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timesheet"> | string
    userId?: StringWithAggregatesFilter<"Timesheet"> | string
    date?: StringWithAggregatesFilter<"Timesheet"> | string
    startTime?: StringWithAggregatesFilter<"Timesheet"> | string
    endTime?: StringWithAggregatesFilter<"Timesheet"> | string
    breakMinutes?: IntWithAggregatesFilter<"Timesheet"> | number
    totalHours?: FloatWithAggregatesFilter<"Timesheet"> | number
    status?: StringWithAggregatesFilter<"Timesheet"> | string
    note?: StringNullableWithAggregatesFilter<"Timesheet"> | string | null
    hourlyWage?: FloatNullableWithAggregatesFilter<"Timesheet"> | number | null
    approvedBy?: StringNullableWithAggregatesFilter<"Timesheet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: StringFilter<"Benefit"> | string
    partnerName?: StringFilter<"Benefit"> | string
    partnerLogo?: StringNullableFilter<"Benefit"> | string | null
    websiteUrl?: StringNullableFilter<"Benefit"> | string | null
    title?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    discount?: StringNullableFilter<"Benefit"> | string | null
    conditions?: StringNullableFilter<"Benefit"> | string | null
    isActive?: BoolFilter<"Benefit"> | boolean
    sortOrder?: IntFilter<"Benefit"> | number
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    partnerName?: SortOrder
    partnerLogo?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    partnerName?: StringFilter<"Benefit"> | string
    partnerLogo?: StringNullableFilter<"Benefit"> | string | null
    websiteUrl?: StringNullableFilter<"Benefit"> | string | null
    title?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    discount?: StringNullableFilter<"Benefit"> | string | null
    conditions?: StringNullableFilter<"Benefit"> | string | null
    isActive?: BoolFilter<"Benefit"> | boolean
    sortOrder?: IntFilter<"Benefit"> | number
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
  }, "id">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    partnerName?: SortOrder
    partnerLogo?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Benefit"> | string
    partnerName?: StringWithAggregatesFilter<"Benefit"> | string
    partnerLogo?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    title?: StringWithAggregatesFilter<"Benefit"> | string
    description?: StringWithAggregatesFilter<"Benefit"> | string
    discount?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    conditions?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    isActive?: BoolWithAggregatesFilter<"Benefit"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Benefit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type AvailabilityRequestWhereInput = {
    AND?: AvailabilityRequestWhereInput | AvailabilityRequestWhereInput[]
    OR?: AvailabilityRequestWhereInput[]
    NOT?: AvailabilityRequestWhereInput | AvailabilityRequestWhereInput[]
    id?: StringFilter<"AvailabilityRequest"> | string
    title?: StringFilter<"AvailabilityRequest"> | string
    startDate?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    endDate?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    status?: StringFilter<"AvailabilityRequest"> | string
    createdAt?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    days?: AvailabilityDayListRelationFilter
  }

  export type AvailabilityRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    days?: AvailabilityDayOrderByRelationAggregateInput
  }

  export type AvailabilityRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityRequestWhereInput | AvailabilityRequestWhereInput[]
    OR?: AvailabilityRequestWhereInput[]
    NOT?: AvailabilityRequestWhereInput | AvailabilityRequestWhereInput[]
    title?: StringFilter<"AvailabilityRequest"> | string
    startDate?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    endDate?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    status?: StringFilter<"AvailabilityRequest"> | string
    createdAt?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityRequest"> | Date | string
    days?: AvailabilityDayListRelationFilter
  }, "id">

  export type AvailabilityRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityRequestCountOrderByAggregateInput
    _max?: AvailabilityRequestMaxOrderByAggregateInput
    _min?: AvailabilityRequestMinOrderByAggregateInput
  }

  export type AvailabilityRequestScalarWhereWithAggregatesInput = {
    AND?: AvailabilityRequestScalarWhereWithAggregatesInput | AvailabilityRequestScalarWhereWithAggregatesInput[]
    OR?: AvailabilityRequestScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityRequestScalarWhereWithAggregatesInput | AvailabilityRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityRequest"> | string
    title?: StringWithAggregatesFilter<"AvailabilityRequest"> | string
    startDate?: DateTimeWithAggregatesFilter<"AvailabilityRequest"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AvailabilityRequest"> | Date | string
    status?: StringWithAggregatesFilter<"AvailabilityRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilityRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityRequest"> | Date | string
  }

  export type AvailabilityDayWhereInput = {
    AND?: AvailabilityDayWhereInput | AvailabilityDayWhereInput[]
    OR?: AvailabilityDayWhereInput[]
    NOT?: AvailabilityDayWhereInput | AvailabilityDayWhereInput[]
    id?: StringFilter<"AvailabilityDay"> | string
    requestId?: StringFilter<"AvailabilityDay"> | string
    date?: DateTimeFilter<"AvailabilityDay"> | Date | string
    eventName?: StringNullableFilter<"AvailabilityDay"> | string | null
    note?: StringNullableFilter<"AvailabilityDay"> | string | null
    request?: XOR<AvailabilityRequestRelationFilter, AvailabilityRequestWhereInput>
    responses?: AvailabilityResponseListRelationFilter
    staffPlan?: XOR<StaffPlanDayNullableRelationFilter, StaffPlanDayWhereInput> | null
  }

  export type AvailabilityDayOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    date?: SortOrder
    eventName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    request?: AvailabilityRequestOrderByWithRelationInput
    responses?: AvailabilityResponseOrderByRelationAggregateInput
    staffPlan?: StaffPlanDayOrderByWithRelationInput
  }

  export type AvailabilityDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityDayWhereInput | AvailabilityDayWhereInput[]
    OR?: AvailabilityDayWhereInput[]
    NOT?: AvailabilityDayWhereInput | AvailabilityDayWhereInput[]
    requestId?: StringFilter<"AvailabilityDay"> | string
    date?: DateTimeFilter<"AvailabilityDay"> | Date | string
    eventName?: StringNullableFilter<"AvailabilityDay"> | string | null
    note?: StringNullableFilter<"AvailabilityDay"> | string | null
    request?: XOR<AvailabilityRequestRelationFilter, AvailabilityRequestWhereInput>
    responses?: AvailabilityResponseListRelationFilter
    staffPlan?: XOR<StaffPlanDayNullableRelationFilter, StaffPlanDayWhereInput> | null
  }, "id">

  export type AvailabilityDayOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    date?: SortOrder
    eventName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: AvailabilityDayCountOrderByAggregateInput
    _max?: AvailabilityDayMaxOrderByAggregateInput
    _min?: AvailabilityDayMinOrderByAggregateInput
  }

  export type AvailabilityDayScalarWhereWithAggregatesInput = {
    AND?: AvailabilityDayScalarWhereWithAggregatesInput | AvailabilityDayScalarWhereWithAggregatesInput[]
    OR?: AvailabilityDayScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityDayScalarWhereWithAggregatesInput | AvailabilityDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityDay"> | string
    requestId?: StringWithAggregatesFilter<"AvailabilityDay"> | string
    date?: DateTimeWithAggregatesFilter<"AvailabilityDay"> | Date | string
    eventName?: StringNullableWithAggregatesFilter<"AvailabilityDay"> | string | null
    note?: StringNullableWithAggregatesFilter<"AvailabilityDay"> | string | null
  }

  export type AvailabilityResponseWhereInput = {
    AND?: AvailabilityResponseWhereInput | AvailabilityResponseWhereInput[]
    OR?: AvailabilityResponseWhereInput[]
    NOT?: AvailabilityResponseWhereInput | AvailabilityResponseWhereInput[]
    id?: StringFilter<"AvailabilityResponse"> | string
    employeeId?: StringFilter<"AvailabilityResponse"> | string
    dayId?: StringFilter<"AvailabilityResponse"> | string
    status?: StringFilter<"AvailabilityResponse"> | string
    comment?: StringNullableFilter<"AvailabilityResponse"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    day?: XOR<AvailabilityDayRelationFilter, AvailabilityDayWhereInput>
  }

  export type AvailabilityResponseOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    dayId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    day?: AvailabilityDayOrderByWithRelationInput
  }

  export type AvailabilityResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_dayId?: AvailabilityResponseEmployeeIdDayIdCompoundUniqueInput
    AND?: AvailabilityResponseWhereInput | AvailabilityResponseWhereInput[]
    OR?: AvailabilityResponseWhereInput[]
    NOT?: AvailabilityResponseWhereInput | AvailabilityResponseWhereInput[]
    employeeId?: StringFilter<"AvailabilityResponse"> | string
    dayId?: StringFilter<"AvailabilityResponse"> | string
    status?: StringFilter<"AvailabilityResponse"> | string
    comment?: StringNullableFilter<"AvailabilityResponse"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    day?: XOR<AvailabilityDayRelationFilter, AvailabilityDayWhereInput>
  }, "id" | "employeeId_dayId">

  export type AvailabilityResponseOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    dayId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityResponseCountOrderByAggregateInput
    _max?: AvailabilityResponseMaxOrderByAggregateInput
    _min?: AvailabilityResponseMinOrderByAggregateInput
  }

  export type AvailabilityResponseScalarWhereWithAggregatesInput = {
    AND?: AvailabilityResponseScalarWhereWithAggregatesInput | AvailabilityResponseScalarWhereWithAggregatesInput[]
    OR?: AvailabilityResponseScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityResponseScalarWhereWithAggregatesInput | AvailabilityResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityResponse"> | string
    employeeId?: StringWithAggregatesFilter<"AvailabilityResponse"> | string
    dayId?: StringWithAggregatesFilter<"AvailabilityResponse"> | string
    status?: StringWithAggregatesFilter<"AvailabilityResponse"> | string
    comment?: StringNullableWithAggregatesFilter<"AvailabilityResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilityResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityResponse"> | Date | string
  }

  export type StaffPlanDayWhereInput = {
    AND?: StaffPlanDayWhereInput | StaffPlanDayWhereInput[]
    OR?: StaffPlanDayWhereInput[]
    NOT?: StaffPlanDayWhereInput | StaffPlanDayWhereInput[]
    id?: StringFilter<"StaffPlanDay"> | string
    dayId?: StringNullableFilter<"StaffPlanDay"> | string | null
    date?: DateTimeFilter<"StaffPlanDay"> | Date | string
    eventName?: StringNullableFilter<"StaffPlanDay"> | string | null
    note?: StringNullableFilter<"StaffPlanDay"> | string | null
    status?: StringFilter<"StaffPlanDay"> | string
    createdAt?: DateTimeFilter<"StaffPlanDay"> | Date | string
    updatedAt?: DateTimeFilter<"StaffPlanDay"> | Date | string
    day?: XOR<AvailabilityDayNullableRelationFilter, AvailabilityDayWhereInput> | null
    rows?: StaffPlanRowListRelationFilter
  }

  export type StaffPlanDayOrderByWithRelationInput = {
    id?: SortOrder
    dayId?: SortOrderInput | SortOrder
    date?: SortOrder
    eventName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: AvailabilityDayOrderByWithRelationInput
    rows?: StaffPlanRowOrderByRelationAggregateInput
  }

  export type StaffPlanDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dayId?: string
    AND?: StaffPlanDayWhereInput | StaffPlanDayWhereInput[]
    OR?: StaffPlanDayWhereInput[]
    NOT?: StaffPlanDayWhereInput | StaffPlanDayWhereInput[]
    date?: DateTimeFilter<"StaffPlanDay"> | Date | string
    eventName?: StringNullableFilter<"StaffPlanDay"> | string | null
    note?: StringNullableFilter<"StaffPlanDay"> | string | null
    status?: StringFilter<"StaffPlanDay"> | string
    createdAt?: DateTimeFilter<"StaffPlanDay"> | Date | string
    updatedAt?: DateTimeFilter<"StaffPlanDay"> | Date | string
    day?: XOR<AvailabilityDayNullableRelationFilter, AvailabilityDayWhereInput> | null
    rows?: StaffPlanRowListRelationFilter
  }, "id" | "dayId">

  export type StaffPlanDayOrderByWithAggregationInput = {
    id?: SortOrder
    dayId?: SortOrderInput | SortOrder
    date?: SortOrder
    eventName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffPlanDayCountOrderByAggregateInput
    _max?: StaffPlanDayMaxOrderByAggregateInput
    _min?: StaffPlanDayMinOrderByAggregateInput
  }

  export type StaffPlanDayScalarWhereWithAggregatesInput = {
    AND?: StaffPlanDayScalarWhereWithAggregatesInput | StaffPlanDayScalarWhereWithAggregatesInput[]
    OR?: StaffPlanDayScalarWhereWithAggregatesInput[]
    NOT?: StaffPlanDayScalarWhereWithAggregatesInput | StaffPlanDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffPlanDay"> | string
    dayId?: StringNullableWithAggregatesFilter<"StaffPlanDay"> | string | null
    date?: DateTimeWithAggregatesFilter<"StaffPlanDay"> | Date | string
    eventName?: StringNullableWithAggregatesFilter<"StaffPlanDay"> | string | null
    note?: StringNullableWithAggregatesFilter<"StaffPlanDay"> | string | null
    status?: StringWithAggregatesFilter<"StaffPlanDay"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StaffPlanDay"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffPlanDay"> | Date | string
  }

  export type StaffPlanRowWhereInput = {
    AND?: StaffPlanRowWhereInput | StaffPlanRowWhereInput[]
    OR?: StaffPlanRowWhereInput[]
    NOT?: StaffPlanRowWhereInput | StaffPlanRowWhereInput[]
    id?: StringFilter<"StaffPlanRow"> | string
    planId?: StringFilter<"StaffPlanRow"> | string
    sortOrder?: IntFilter<"StaffPlanRow"> | number
    assignmentLabel?: StringFilter<"StaffPlanRow"> | string
    employeeId?: StringNullableFilter<"StaffPlanRow"> | string | null
    startTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    endTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    note?: StringNullableFilter<"StaffPlanRow"> | string | null
    plan?: XOR<StaffPlanDayRelationFilter, StaffPlanDayWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type StaffPlanRowOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    plan?: StaffPlanDayOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StaffPlanRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffPlanRowWhereInput | StaffPlanRowWhereInput[]
    OR?: StaffPlanRowWhereInput[]
    NOT?: StaffPlanRowWhereInput | StaffPlanRowWhereInput[]
    planId?: StringFilter<"StaffPlanRow"> | string
    sortOrder?: IntFilter<"StaffPlanRow"> | number
    assignmentLabel?: StringFilter<"StaffPlanRow"> | string
    employeeId?: StringNullableFilter<"StaffPlanRow"> | string | null
    startTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    endTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    note?: StringNullableFilter<"StaffPlanRow"> | string | null
    plan?: XOR<StaffPlanDayRelationFilter, StaffPlanDayWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type StaffPlanRowOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: StaffPlanRowCountOrderByAggregateInput
    _avg?: StaffPlanRowAvgOrderByAggregateInput
    _max?: StaffPlanRowMaxOrderByAggregateInput
    _min?: StaffPlanRowMinOrderByAggregateInput
    _sum?: StaffPlanRowSumOrderByAggregateInput
  }

  export type StaffPlanRowScalarWhereWithAggregatesInput = {
    AND?: StaffPlanRowScalarWhereWithAggregatesInput | StaffPlanRowScalarWhereWithAggregatesInput[]
    OR?: StaffPlanRowScalarWhereWithAggregatesInput[]
    NOT?: StaffPlanRowScalarWhereWithAggregatesInput | StaffPlanRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffPlanRow"> | string
    planId?: StringWithAggregatesFilter<"StaffPlanRow"> | string
    sortOrder?: IntWithAggregatesFilter<"StaffPlanRow"> | number
    assignmentLabel?: StringWithAggregatesFilter<"StaffPlanRow"> | string
    employeeId?: StringNullableWithAggregatesFilter<"StaffPlanRow"> | string | null
    startTime?: StringNullableWithAggregatesFilter<"StaffPlanRow"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"StaffPlanRow"> | string | null
    note?: StringNullableWithAggregatesFilter<"StaffPlanRow"> | string | null
  }

  export type ShiftTemplateWhereInput = {
    AND?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    OR?: ShiftTemplateWhereInput[]
    NOT?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    id?: StringFilter<"ShiftTemplate"> | string
    name?: StringFilter<"ShiftTemplate"> | string
    createdAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    rows?: ShiftTemplateRowListRelationFilter
  }

  export type ShiftTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rows?: ShiftTemplateRowOrderByRelationAggregateInput
  }

  export type ShiftTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    OR?: ShiftTemplateWhereInput[]
    NOT?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    createdAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    rows?: ShiftTemplateRowListRelationFilter
  }, "id" | "name">

  export type ShiftTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftTemplateCountOrderByAggregateInput
    _max?: ShiftTemplateMaxOrderByAggregateInput
    _min?: ShiftTemplateMinOrderByAggregateInput
  }

  export type ShiftTemplateScalarWhereWithAggregatesInput = {
    AND?: ShiftTemplateScalarWhereWithAggregatesInput | ShiftTemplateScalarWhereWithAggregatesInput[]
    OR?: ShiftTemplateScalarWhereWithAggregatesInput[]
    NOT?: ShiftTemplateScalarWhereWithAggregatesInput | ShiftTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    name?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string
  }

  export type ShiftTemplateRowWhereInput = {
    AND?: ShiftTemplateRowWhereInput | ShiftTemplateRowWhereInput[]
    OR?: ShiftTemplateRowWhereInput[]
    NOT?: ShiftTemplateRowWhereInput | ShiftTemplateRowWhereInput[]
    id?: StringFilter<"ShiftTemplateRow"> | string
    templateId?: StringFilter<"ShiftTemplateRow"> | string
    sortOrder?: IntFilter<"ShiftTemplateRow"> | number
    assignmentLabel?: StringFilter<"ShiftTemplateRow"> | string
    defaultStartTime?: StringNullableFilter<"ShiftTemplateRow"> | string | null
    template?: XOR<ShiftTemplateRelationFilter, ShiftTemplateWhereInput>
  }

  export type ShiftTemplateRowOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    defaultStartTime?: SortOrderInput | SortOrder
    template?: ShiftTemplateOrderByWithRelationInput
  }

  export type ShiftTemplateRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftTemplateRowWhereInput | ShiftTemplateRowWhereInput[]
    OR?: ShiftTemplateRowWhereInput[]
    NOT?: ShiftTemplateRowWhereInput | ShiftTemplateRowWhereInput[]
    templateId?: StringFilter<"ShiftTemplateRow"> | string
    sortOrder?: IntFilter<"ShiftTemplateRow"> | number
    assignmentLabel?: StringFilter<"ShiftTemplateRow"> | string
    defaultStartTime?: StringNullableFilter<"ShiftTemplateRow"> | string | null
    template?: XOR<ShiftTemplateRelationFilter, ShiftTemplateWhereInput>
  }, "id">

  export type ShiftTemplateRowOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    defaultStartTime?: SortOrderInput | SortOrder
    _count?: ShiftTemplateRowCountOrderByAggregateInput
    _avg?: ShiftTemplateRowAvgOrderByAggregateInput
    _max?: ShiftTemplateRowMaxOrderByAggregateInput
    _min?: ShiftTemplateRowMinOrderByAggregateInput
    _sum?: ShiftTemplateRowSumOrderByAggregateInput
  }

  export type ShiftTemplateRowScalarWhereWithAggregatesInput = {
    AND?: ShiftTemplateRowScalarWhereWithAggregatesInput | ShiftTemplateRowScalarWhereWithAggregatesInput[]
    OR?: ShiftTemplateRowScalarWhereWithAggregatesInput[]
    NOT?: ShiftTemplateRowScalarWhereWithAggregatesInput | ShiftTemplateRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftTemplateRow"> | string
    templateId?: StringWithAggregatesFilter<"ShiftTemplateRow"> | string
    sortOrder?: IntWithAggregatesFilter<"ShiftTemplateRow"> | number
    assignmentLabel?: StringWithAggregatesFilter<"ShiftTemplateRow"> | string
    defaultStartTime?: StringNullableWithAggregatesFilter<"ShiftTemplateRow"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
  }

  export type PayslipCreateInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
    user: UserCreateNestedOneWithoutPayslipsInput
  }

  export type PayslipUncheckedCreateInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
    userId: string
  }

  export type PayslipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayslipsNestedInput
  }

  export type PayslipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayslipCreateManyInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
    userId: string
  }

  export type PayslipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingStatusCreateInput = {
    id?: string
    status?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOnboardingStatusInput
  }

  export type OnboardingStatusUncheckedCreateInput = {
    id?: string
    userId: string
    status?: string
    updatedAt?: Date | string
  }

  export type OnboardingStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnboardingStatusNestedInput
  }

  export type OnboardingStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingStatusCreateManyInput = {
    id?: string
    userId: string
    status?: string
    updatedAt?: Date | string
  }

  export type OnboardingStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressCreateInput = {
    id?: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStepProgressesInput
  }

  export type StepProgressUncheckedCreateInput = {
    id?: string
    userId: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
  }

  export type StepProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepProgressesNestedInput
  }

  export type StepProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressCreateManyInput = {
    id?: string
    userId: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
  }

  export type StepProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    url: string
    type: string
    uploadedAt?: Date | string
    user?: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    type: string
    userId?: string | null
    uploadedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    name: string
    url: string
    type: string
    userId?: string | null
    uploadedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetCreateInput = {
    id?: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimesheetsInput
  }

  export type TimesheetUncheckedCreateInput = {
    id?: string
    userId: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimesheetsNestedInput
  }

  export type TimesheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetCreateManyInput = {
    id?: string
    userId: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateInput = {
    id?: string
    partnerName: string
    partnerLogo?: string | null
    websiteUrl?: string | null
    title: string
    description: string
    discount?: string | null
    conditions?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUncheckedCreateInput = {
    id?: string
    partnerName: string
    partnerLogo?: string | null
    websiteUrl?: string | null
    title: string
    description: string
    discount?: string | null
    conditions?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    partnerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    partnerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateManyInput = {
    id?: string
    partnerName: string
    partnerLogo?: string | null
    websiteUrl?: string | null
    title: string
    description: string
    discount?: string | null
    conditions?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    partnerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    partnerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableStringFieldUpdateOperationsInput | string | null
    conditions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRequestCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: AvailabilityDayCreateNestedManyWithoutRequestInput
  }

  export type AvailabilityRequestUncheckedCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: AvailabilityDayUncheckedCreateNestedManyWithoutRequestInput
  }

  export type AvailabilityRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: AvailabilityDayUpdateManyWithoutRequestNestedInput
  }

  export type AvailabilityRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: AvailabilityDayUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type AvailabilityRequestCreateManyInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityDayCreateInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    request: AvailabilityRequestCreateNestedOneWithoutDaysInput
    responses?: AvailabilityResponseCreateNestedManyWithoutDayInput
    staffPlan?: StaffPlanDayCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayUncheckedCreateInput = {
    id?: string
    requestId: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    responses?: AvailabilityResponseUncheckedCreateNestedManyWithoutDayInput
    staffPlan?: StaffPlanDayUncheckedCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    request?: AvailabilityRequestUpdateOneRequiredWithoutDaysNestedInput
    responses?: AvailabilityResponseUpdateManyWithoutDayNestedInput
    staffPlan?: StaffPlanDayUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AvailabilityResponseUncheckedUpdateManyWithoutDayNestedInput
    staffPlan?: StaffPlanDayUncheckedUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayCreateManyInput = {
    id?: string
    requestId: string
    date: Date | string
    eventName?: string | null
    note?: string | null
  }

  export type AvailabilityDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityResponseCreateInput = {
    id?: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAvailabilityResponsesInput
    day: AvailabilityDayCreateNestedOneWithoutResponsesInput
  }

  export type AvailabilityResponseUncheckedCreateInput = {
    id?: string
    employeeId: string
    dayId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAvailabilityResponsesNestedInput
    day?: AvailabilityDayUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type AvailabilityResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseCreateManyInput = {
    id?: string
    employeeId: string
    dayId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPlanDayCreateInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    day?: AvailabilityDayCreateNestedOneWithoutStaffPlanInput
    rows?: StaffPlanRowCreateNestedManyWithoutPlanInput
  }

  export type StaffPlanDayUncheckedCreateInput = {
    id?: string
    dayId?: string | null
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: StaffPlanRowUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StaffPlanDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: AvailabilityDayUpdateOneWithoutStaffPlanNestedInput
    rows?: StaffPlanRowUpdateManyWithoutPlanNestedInput
  }

  export type StaffPlanDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: StaffPlanRowUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type StaffPlanDayCreateManyInput = {
    id?: string
    dayId?: string | null
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffPlanDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPlanDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPlanRowCreateInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    startTime?: string | null
    endTime?: string | null
    note?: string | null
    plan: StaffPlanDayCreateNestedOneWithoutRowsInput
    user?: UserCreateNestedOneWithoutStaffPlanRowsInput
  }

  export type StaffPlanRowUncheckedCreateInput = {
    id?: string
    planId: string
    sortOrder?: number
    assignmentLabel: string
    employeeId?: string | null
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type StaffPlanRowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StaffPlanDayUpdateOneRequiredWithoutRowsNestedInput
    user?: UserUpdateOneWithoutStaffPlanRowsNestedInput
  }

  export type StaffPlanRowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPlanRowCreateManyInput = {
    id?: string
    planId: string
    sortOrder?: number
    assignmentLabel: string
    employeeId?: string | null
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type StaffPlanRowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPlanRowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: ShiftTemplateRowCreateNestedManyWithoutTemplateInput
  }

  export type ShiftTemplateUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: ShiftTemplateRowUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ShiftTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: ShiftTemplateRowUpdateManyWithoutTemplateNestedInput
  }

  export type ShiftTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: ShiftTemplateRowUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ShiftTemplateCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateRowCreateInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
    template: ShiftTemplateCreateNestedOneWithoutRowsInput
  }

  export type ShiftTemplateRowUncheckedCreateInput = {
    id?: string
    templateId: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
  }

  export type ShiftTemplateRowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    template?: ShiftTemplateUpdateOneRequiredWithoutRowsNestedInput
  }

  export type ShiftTemplateRowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateRowCreateManyInput = {
    id?: string
    templateId: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
  }

  export type ShiftTemplateRowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateRowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type OnboardingStatusNullableRelationFilter = {
    is?: OnboardingStatusWhereInput | null
    isNot?: OnboardingStatusWhereInput | null
  }

  export type PayslipListRelationFilter = {
    every?: PayslipWhereInput
    some?: PayslipWhereInput
    none?: PayslipWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type StepProgressListRelationFilter = {
    every?: StepProgressWhereInput
    some?: StepProgressWhereInput
    none?: StepProgressWhereInput
  }

  export type TimesheetListRelationFilter = {
    every?: TimesheetWhereInput
    some?: TimesheetWhereInput
    none?: TimesheetWhereInput
  }

  export type AvailabilityResponseListRelationFilter = {
    every?: AvailabilityResponseWhereInput
    some?: AvailabilityResponseWhereInput
    none?: AvailabilityResponseWhereInput
  }

  export type StaffPlanRowListRelationFilter = {
    every?: StaffPlanRowWhereInput
    some?: StaffPlanRowWhereInput
    none?: StaffPlanRowWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayslipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimesheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffPlanRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    jobRole?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDate?: SortOrder
    hourlyWage?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    hourlyWage?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    jobRole?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDate?: SortOrder
    hourlyWage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    jobRole?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDate?: SortOrder
    hourlyWage?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    hourlyWage?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PayslipUserIdMonthYearCompoundUniqueInput = {
    userId: string
    month: number
    year: number
  }

  export type PayslipCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayslipAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type PayslipMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayslipMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayslipSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type OnboardingStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepProgressUserIdStepIdCompoundUniqueInput = {
    userId: string
    stepId: string
  }

  export type StepProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stepId?: SortOrder
    completed?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stepId?: SortOrder
    completed?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stepId?: SortOrder
    completed?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TimesheetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    status?: SortOrder
    note?: SortOrder
    hourlyWage?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetAvgOrderByAggregateInput = {
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    hourlyWage?: SortOrder
  }

  export type TimesheetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    status?: SortOrder
    note?: SortOrder
    hourlyWage?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    status?: SortOrder
    note?: SortOrder
    hourlyWage?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetSumOrderByAggregateInput = {
    breakMinutes?: SortOrder
    totalHours?: SortOrder
    hourlyWage?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    partnerName?: SortOrder
    partnerLogo?: SortOrder
    websiteUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    conditions?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    partnerName?: SortOrder
    partnerLogo?: SortOrder
    websiteUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    conditions?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    partnerName?: SortOrder
    partnerLogo?: SortOrder
    websiteUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    conditions?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type AvailabilityDayListRelationFilter = {
    every?: AvailabilityDayWhereInput
    some?: AvailabilityDayWhereInput
    none?: AvailabilityDayWhereInput
  }

  export type AvailabilityDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRequestRelationFilter = {
    is?: AvailabilityRequestWhereInput
    isNot?: AvailabilityRequestWhereInput
  }

  export type StaffPlanDayNullableRelationFilter = {
    is?: StaffPlanDayWhereInput | null
    isNot?: StaffPlanDayWhereInput | null
  }

  export type AvailabilityDayCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
  }

  export type AvailabilityDayMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
  }

  export type AvailabilityDayMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
  }

  export type AvailabilityDayRelationFilter = {
    is?: AvailabilityDayWhereInput
    isNot?: AvailabilityDayWhereInput
  }

  export type AvailabilityResponseEmployeeIdDayIdCompoundUniqueInput = {
    employeeId: string
    dayId: string
  }

  export type AvailabilityResponseCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    dayId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    dayId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityResponseMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    dayId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityDayNullableRelationFilter = {
    is?: AvailabilityDayWhereInput | null
    isNot?: AvailabilityDayWhereInput | null
  }

  export type StaffPlanDayCountOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffPlanDayMaxOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffPlanDayMinOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffPlanDayRelationFilter = {
    is?: StaffPlanDayWhereInput
    isNot?: StaffPlanDayWhereInput
  }

  export type StaffPlanRowCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    note?: SortOrder
  }

  export type StaffPlanRowAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StaffPlanRowMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    note?: SortOrder
  }

  export type StaffPlanRowMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    note?: SortOrder
  }

  export type StaffPlanRowSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ShiftTemplateRowListRelationFilter = {
    every?: ShiftTemplateRowWhereInput
    some?: ShiftTemplateRowWhereInput
    none?: ShiftTemplateRowWhereInput
  }

  export type ShiftTemplateRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateRelationFilter = {
    is?: ShiftTemplateWhereInput
    isNot?: ShiftTemplateWhereInput
  }

  export type ShiftTemplateRowCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    defaultStartTime?: SortOrder
  }

  export type ShiftTemplateRowAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ShiftTemplateRowMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    defaultStartTime?: SortOrder
  }

  export type ShiftTemplateRowMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    sortOrder?: SortOrder
    assignmentLabel?: SortOrder
    defaultStartTime?: SortOrder
  }

  export type ShiftTemplateRowSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type OnboardingStatusCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingStatusCreateOrConnectWithoutUserInput
    connect?: OnboardingStatusWhereUniqueInput
  }

  export type PayslipCreateNestedManyWithoutUserInput = {
    create?: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput> | PayslipCreateWithoutUserInput[] | PayslipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutUserInput | PayslipCreateOrConnectWithoutUserInput[]
    createMany?: PayslipCreateManyUserInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StepProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput> | StepProgressCreateWithoutUserInput[] | StepProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepProgressCreateOrConnectWithoutUserInput | StepProgressCreateOrConnectWithoutUserInput[]
    createMany?: StepProgressCreateManyUserInputEnvelope
    connect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
  }

  export type TimesheetCreateNestedManyWithoutUserInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
  }

  export type AvailabilityResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput> | AvailabilityResponseCreateWithoutUserInput[] | AvailabilityResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutUserInput | AvailabilityResponseCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityResponseCreateManyUserInputEnvelope
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
  }

  export type StaffPlanRowCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput> | StaffPlanRowCreateWithoutUserInput[] | StaffPlanRowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutUserInput | StaffPlanRowCreateOrConnectWithoutUserInput[]
    createMany?: StaffPlanRowCreateManyUserInputEnvelope
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type OnboardingStatusUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingStatusCreateOrConnectWithoutUserInput
    connect?: OnboardingStatusWhereUniqueInput
  }

  export type PayslipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput> | PayslipCreateWithoutUserInput[] | PayslipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutUserInput | PayslipCreateOrConnectWithoutUserInput[]
    createMany?: PayslipCreateManyUserInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StepProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput> | StepProgressCreateWithoutUserInput[] | StepProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepProgressCreateOrConnectWithoutUserInput | StepProgressCreateOrConnectWithoutUserInput[]
    createMany?: StepProgressCreateManyUserInputEnvelope
    connect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
  }

  export type TimesheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
  }

  export type AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput> | AvailabilityResponseCreateWithoutUserInput[] | AvailabilityResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutUserInput | AvailabilityResponseCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityResponseCreateManyUserInputEnvelope
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
  }

  export type StaffPlanRowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput> | StaffPlanRowCreateWithoutUserInput[] | StaffPlanRowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutUserInput | StaffPlanRowCreateOrConnectWithoutUserInput[]
    createMany?: StaffPlanRowCreateManyUserInputEnvelope
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type OnboardingStatusUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingStatusCreateOrConnectWithoutUserInput
    upsert?: OnboardingStatusUpsertWithoutUserInput
    disconnect?: OnboardingStatusWhereInput | boolean
    delete?: OnboardingStatusWhereInput | boolean
    connect?: OnboardingStatusWhereUniqueInput
    update?: XOR<XOR<OnboardingStatusUpdateToOneWithWhereWithoutUserInput, OnboardingStatusUpdateWithoutUserInput>, OnboardingStatusUncheckedUpdateWithoutUserInput>
  }

  export type PayslipUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput> | PayslipCreateWithoutUserInput[] | PayslipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutUserInput | PayslipCreateOrConnectWithoutUserInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutUserInput | PayslipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayslipCreateManyUserInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutUserInput | PayslipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutUserInput | PayslipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StepProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput> | StepProgressCreateWithoutUserInput[] | StepProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepProgressCreateOrConnectWithoutUserInput | StepProgressCreateOrConnectWithoutUserInput[]
    upsert?: StepProgressUpsertWithWhereUniqueWithoutUserInput | StepProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepProgressCreateManyUserInputEnvelope
    set?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    disconnect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    delete?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    connect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    update?: StepProgressUpdateWithWhereUniqueWithoutUserInput | StepProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepProgressUpdateManyWithWhereWithoutUserInput | StepProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepProgressScalarWhereInput | StepProgressScalarWhereInput[]
  }

  export type TimesheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    upsert?: TimesheetUpsertWithWhereUniqueWithoutUserInput | TimesheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    set?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    disconnect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    delete?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    update?: TimesheetUpdateWithWhereUniqueWithoutUserInput | TimesheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimesheetUpdateManyWithWhereWithoutUserInput | TimesheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
  }

  export type AvailabilityResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput> | AvailabilityResponseCreateWithoutUserInput[] | AvailabilityResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutUserInput | AvailabilityResponseCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityResponseUpsertWithWhereUniqueWithoutUserInput | AvailabilityResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityResponseCreateManyUserInputEnvelope
    set?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    disconnect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    delete?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    update?: AvailabilityResponseUpdateWithWhereUniqueWithoutUserInput | AvailabilityResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityResponseUpdateManyWithWhereWithoutUserInput | AvailabilityResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
  }

  export type StaffPlanRowUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput> | StaffPlanRowCreateWithoutUserInput[] | StaffPlanRowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutUserInput | StaffPlanRowCreateOrConnectWithoutUserInput[]
    upsert?: StaffPlanRowUpsertWithWhereUniqueWithoutUserInput | StaffPlanRowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffPlanRowCreateManyUserInputEnvelope
    set?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    disconnect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    delete?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    update?: StaffPlanRowUpdateWithWhereUniqueWithoutUserInput | StaffPlanRowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffPlanRowUpdateManyWithWhereWithoutUserInput | StaffPlanRowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingStatusCreateOrConnectWithoutUserInput
    upsert?: OnboardingStatusUpsertWithoutUserInput
    disconnect?: OnboardingStatusWhereInput | boolean
    delete?: OnboardingStatusWhereInput | boolean
    connect?: OnboardingStatusWhereUniqueInput
    update?: XOR<XOR<OnboardingStatusUpdateToOneWithWhereWithoutUserInput, OnboardingStatusUpdateWithoutUserInput>, OnboardingStatusUncheckedUpdateWithoutUserInput>
  }

  export type PayslipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput> | PayslipCreateWithoutUserInput[] | PayslipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutUserInput | PayslipCreateOrConnectWithoutUserInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutUserInput | PayslipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayslipCreateManyUserInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutUserInput | PayslipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutUserInput | PayslipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StepProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput> | StepProgressCreateWithoutUserInput[] | StepProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepProgressCreateOrConnectWithoutUserInput | StepProgressCreateOrConnectWithoutUserInput[]
    upsert?: StepProgressUpsertWithWhereUniqueWithoutUserInput | StepProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepProgressCreateManyUserInputEnvelope
    set?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    disconnect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    delete?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    connect?: StepProgressWhereUniqueInput | StepProgressWhereUniqueInput[]
    update?: StepProgressUpdateWithWhereUniqueWithoutUserInput | StepProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepProgressUpdateManyWithWhereWithoutUserInput | StepProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepProgressScalarWhereInput | StepProgressScalarWhereInput[]
  }

  export type TimesheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    upsert?: TimesheetUpsertWithWhereUniqueWithoutUserInput | TimesheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    set?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    disconnect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    delete?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    update?: TimesheetUpdateWithWhereUniqueWithoutUserInput | TimesheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimesheetUpdateManyWithWhereWithoutUserInput | TimesheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
  }

  export type AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput> | AvailabilityResponseCreateWithoutUserInput[] | AvailabilityResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutUserInput | AvailabilityResponseCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityResponseUpsertWithWhereUniqueWithoutUserInput | AvailabilityResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityResponseCreateManyUserInputEnvelope
    set?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    disconnect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    delete?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    update?: AvailabilityResponseUpdateWithWhereUniqueWithoutUserInput | AvailabilityResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityResponseUpdateManyWithWhereWithoutUserInput | AvailabilityResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
  }

  export type StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput> | StaffPlanRowCreateWithoutUserInput[] | StaffPlanRowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutUserInput | StaffPlanRowCreateOrConnectWithoutUserInput[]
    upsert?: StaffPlanRowUpsertWithWhereUniqueWithoutUserInput | StaffPlanRowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffPlanRowCreateManyUserInputEnvelope
    set?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    disconnect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    delete?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    update?: StaffPlanRowUpdateWithWhereUniqueWithoutUserInput | StaffPlanRowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffPlanRowUpdateManyWithWhereWithoutUserInput | StaffPlanRowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPayslipsInput = {
    create?: XOR<UserCreateWithoutPayslipsInput, UserUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayslipsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: XOR<UserCreateWithoutPayslipsInput, UserUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayslipsInput
    upsert?: UserUpsertWithoutPayslipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayslipsInput, UserUpdateWithoutPayslipsInput>, UserUncheckedUpdateWithoutPayslipsInput>
  }

  export type UserCreateNestedOneWithoutOnboardingStatusInput = {
    create?: XOR<UserCreateWithoutOnboardingStatusInput, UserUncheckedCreateWithoutOnboardingStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingStatusInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOnboardingStatusNestedInput = {
    create?: XOR<UserCreateWithoutOnboardingStatusInput, UserUncheckedCreateWithoutOnboardingStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingStatusInput
    upsert?: UserUpsertWithoutOnboardingStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnboardingStatusInput, UserUpdateWithoutOnboardingStatusInput>, UserUncheckedUpdateWithoutOnboardingStatusInput>
  }

  export type UserCreateNestedOneWithoutStepProgressesInput = {
    create?: XOR<UserCreateWithoutStepProgressesInput, UserUncheckedCreateWithoutStepProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepProgressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStepProgressesNestedInput = {
    create?: XOR<UserCreateWithoutStepProgressesInput, UserUncheckedCreateWithoutStepProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepProgressesInput
    upsert?: UserUpsertWithoutStepProgressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepProgressesInput, UserUpdateWithoutStepProgressesInput>, UserUncheckedUpdateWithoutStepProgressesInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutTimesheetsInput = {
    create?: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesheetsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTimesheetsNestedInput = {
    create?: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesheetsInput
    upsert?: UserUpsertWithoutTimesheetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimesheetsInput, UserUpdateWithoutTimesheetsInput>, UserUncheckedUpdateWithoutTimesheetsInput>
  }

  export type AvailabilityDayCreateNestedManyWithoutRequestInput = {
    create?: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput> | AvailabilityDayCreateWithoutRequestInput[] | AvailabilityDayUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutRequestInput | AvailabilityDayCreateOrConnectWithoutRequestInput[]
    createMany?: AvailabilityDayCreateManyRequestInputEnvelope
    connect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
  }

  export type AvailabilityDayUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput> | AvailabilityDayCreateWithoutRequestInput[] | AvailabilityDayUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutRequestInput | AvailabilityDayCreateOrConnectWithoutRequestInput[]
    createMany?: AvailabilityDayCreateManyRequestInputEnvelope
    connect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
  }

  export type AvailabilityDayUpdateManyWithoutRequestNestedInput = {
    create?: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput> | AvailabilityDayCreateWithoutRequestInput[] | AvailabilityDayUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutRequestInput | AvailabilityDayCreateOrConnectWithoutRequestInput[]
    upsert?: AvailabilityDayUpsertWithWhereUniqueWithoutRequestInput | AvailabilityDayUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: AvailabilityDayCreateManyRequestInputEnvelope
    set?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    disconnect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    delete?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    connect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    update?: AvailabilityDayUpdateWithWhereUniqueWithoutRequestInput | AvailabilityDayUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: AvailabilityDayUpdateManyWithWhereWithoutRequestInput | AvailabilityDayUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: AvailabilityDayScalarWhereInput | AvailabilityDayScalarWhereInput[]
  }

  export type AvailabilityDayUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput> | AvailabilityDayCreateWithoutRequestInput[] | AvailabilityDayUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutRequestInput | AvailabilityDayCreateOrConnectWithoutRequestInput[]
    upsert?: AvailabilityDayUpsertWithWhereUniqueWithoutRequestInput | AvailabilityDayUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: AvailabilityDayCreateManyRequestInputEnvelope
    set?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    disconnect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    delete?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    connect?: AvailabilityDayWhereUniqueInput | AvailabilityDayWhereUniqueInput[]
    update?: AvailabilityDayUpdateWithWhereUniqueWithoutRequestInput | AvailabilityDayUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: AvailabilityDayUpdateManyWithWhereWithoutRequestInput | AvailabilityDayUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: AvailabilityDayScalarWhereInput | AvailabilityDayScalarWhereInput[]
  }

  export type AvailabilityRequestCreateNestedOneWithoutDaysInput = {
    create?: XOR<AvailabilityRequestCreateWithoutDaysInput, AvailabilityRequestUncheckedCreateWithoutDaysInput>
    connectOrCreate?: AvailabilityRequestCreateOrConnectWithoutDaysInput
    connect?: AvailabilityRequestWhereUniqueInput
  }

  export type AvailabilityResponseCreateNestedManyWithoutDayInput = {
    create?: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput> | AvailabilityResponseCreateWithoutDayInput[] | AvailabilityResponseUncheckedCreateWithoutDayInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutDayInput | AvailabilityResponseCreateOrConnectWithoutDayInput[]
    createMany?: AvailabilityResponseCreateManyDayInputEnvelope
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
  }

  export type StaffPlanDayCreateNestedOneWithoutDayInput = {
    create?: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutDayInput
    connect?: StaffPlanDayWhereUniqueInput
  }

  export type AvailabilityResponseUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput> | AvailabilityResponseCreateWithoutDayInput[] | AvailabilityResponseUncheckedCreateWithoutDayInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutDayInput | AvailabilityResponseCreateOrConnectWithoutDayInput[]
    createMany?: AvailabilityResponseCreateManyDayInputEnvelope
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
  }

  export type StaffPlanDayUncheckedCreateNestedOneWithoutDayInput = {
    create?: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutDayInput
    connect?: StaffPlanDayWhereUniqueInput
  }

  export type AvailabilityRequestUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<AvailabilityRequestCreateWithoutDaysInput, AvailabilityRequestUncheckedCreateWithoutDaysInput>
    connectOrCreate?: AvailabilityRequestCreateOrConnectWithoutDaysInput
    upsert?: AvailabilityRequestUpsertWithoutDaysInput
    connect?: AvailabilityRequestWhereUniqueInput
    update?: XOR<XOR<AvailabilityRequestUpdateToOneWithWhereWithoutDaysInput, AvailabilityRequestUpdateWithoutDaysInput>, AvailabilityRequestUncheckedUpdateWithoutDaysInput>
  }

  export type AvailabilityResponseUpdateManyWithoutDayNestedInput = {
    create?: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput> | AvailabilityResponseCreateWithoutDayInput[] | AvailabilityResponseUncheckedCreateWithoutDayInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutDayInput | AvailabilityResponseCreateOrConnectWithoutDayInput[]
    upsert?: AvailabilityResponseUpsertWithWhereUniqueWithoutDayInput | AvailabilityResponseUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: AvailabilityResponseCreateManyDayInputEnvelope
    set?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    disconnect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    delete?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    update?: AvailabilityResponseUpdateWithWhereUniqueWithoutDayInput | AvailabilityResponseUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: AvailabilityResponseUpdateManyWithWhereWithoutDayInput | AvailabilityResponseUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
  }

  export type StaffPlanDayUpdateOneWithoutDayNestedInput = {
    create?: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutDayInput
    upsert?: StaffPlanDayUpsertWithoutDayInput
    disconnect?: StaffPlanDayWhereInput | boolean
    delete?: StaffPlanDayWhereInput | boolean
    connect?: StaffPlanDayWhereUniqueInput
    update?: XOR<XOR<StaffPlanDayUpdateToOneWithWhereWithoutDayInput, StaffPlanDayUpdateWithoutDayInput>, StaffPlanDayUncheckedUpdateWithoutDayInput>
  }

  export type AvailabilityResponseUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput> | AvailabilityResponseCreateWithoutDayInput[] | AvailabilityResponseUncheckedCreateWithoutDayInput[]
    connectOrCreate?: AvailabilityResponseCreateOrConnectWithoutDayInput | AvailabilityResponseCreateOrConnectWithoutDayInput[]
    upsert?: AvailabilityResponseUpsertWithWhereUniqueWithoutDayInput | AvailabilityResponseUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: AvailabilityResponseCreateManyDayInputEnvelope
    set?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    disconnect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    delete?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    connect?: AvailabilityResponseWhereUniqueInput | AvailabilityResponseWhereUniqueInput[]
    update?: AvailabilityResponseUpdateWithWhereUniqueWithoutDayInput | AvailabilityResponseUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: AvailabilityResponseUpdateManyWithWhereWithoutDayInput | AvailabilityResponseUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
  }

  export type StaffPlanDayUncheckedUpdateOneWithoutDayNestedInput = {
    create?: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutDayInput
    upsert?: StaffPlanDayUpsertWithoutDayInput
    disconnect?: StaffPlanDayWhereInput | boolean
    delete?: StaffPlanDayWhereInput | boolean
    connect?: StaffPlanDayWhereUniqueInput
    update?: XOR<XOR<StaffPlanDayUpdateToOneWithWhereWithoutDayInput, StaffPlanDayUpdateWithoutDayInput>, StaffPlanDayUncheckedUpdateWithoutDayInput>
  }

  export type UserCreateNestedOneWithoutAvailabilityResponsesInput = {
    create?: XOR<UserCreateWithoutAvailabilityResponsesInput, UserUncheckedCreateWithoutAvailabilityResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type AvailabilityDayCreateNestedOneWithoutResponsesInput = {
    create?: XOR<AvailabilityDayCreateWithoutResponsesInput, AvailabilityDayUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutResponsesInput
    connect?: AvailabilityDayWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilityResponsesNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityResponsesInput, UserUncheckedCreateWithoutAvailabilityResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityResponsesInput
    upsert?: UserUpsertWithoutAvailabilityResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityResponsesInput, UserUpdateWithoutAvailabilityResponsesInput>, UserUncheckedUpdateWithoutAvailabilityResponsesInput>
  }

  export type AvailabilityDayUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<AvailabilityDayCreateWithoutResponsesInput, AvailabilityDayUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutResponsesInput
    upsert?: AvailabilityDayUpsertWithoutResponsesInput
    connect?: AvailabilityDayWhereUniqueInput
    update?: XOR<XOR<AvailabilityDayUpdateToOneWithWhereWithoutResponsesInput, AvailabilityDayUpdateWithoutResponsesInput>, AvailabilityDayUncheckedUpdateWithoutResponsesInput>
  }

  export type AvailabilityDayCreateNestedOneWithoutStaffPlanInput = {
    create?: XOR<AvailabilityDayCreateWithoutStaffPlanInput, AvailabilityDayUncheckedCreateWithoutStaffPlanInput>
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutStaffPlanInput
    connect?: AvailabilityDayWhereUniqueInput
  }

  export type StaffPlanRowCreateNestedManyWithoutPlanInput = {
    create?: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput> | StaffPlanRowCreateWithoutPlanInput[] | StaffPlanRowUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutPlanInput | StaffPlanRowCreateOrConnectWithoutPlanInput[]
    createMany?: StaffPlanRowCreateManyPlanInputEnvelope
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
  }

  export type StaffPlanRowUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput> | StaffPlanRowCreateWithoutPlanInput[] | StaffPlanRowUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutPlanInput | StaffPlanRowCreateOrConnectWithoutPlanInput[]
    createMany?: StaffPlanRowCreateManyPlanInputEnvelope
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
  }

  export type AvailabilityDayUpdateOneWithoutStaffPlanNestedInput = {
    create?: XOR<AvailabilityDayCreateWithoutStaffPlanInput, AvailabilityDayUncheckedCreateWithoutStaffPlanInput>
    connectOrCreate?: AvailabilityDayCreateOrConnectWithoutStaffPlanInput
    upsert?: AvailabilityDayUpsertWithoutStaffPlanInput
    disconnect?: AvailabilityDayWhereInput | boolean
    delete?: AvailabilityDayWhereInput | boolean
    connect?: AvailabilityDayWhereUniqueInput
    update?: XOR<XOR<AvailabilityDayUpdateToOneWithWhereWithoutStaffPlanInput, AvailabilityDayUpdateWithoutStaffPlanInput>, AvailabilityDayUncheckedUpdateWithoutStaffPlanInput>
  }

  export type StaffPlanRowUpdateManyWithoutPlanNestedInput = {
    create?: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput> | StaffPlanRowCreateWithoutPlanInput[] | StaffPlanRowUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutPlanInput | StaffPlanRowCreateOrConnectWithoutPlanInput[]
    upsert?: StaffPlanRowUpsertWithWhereUniqueWithoutPlanInput | StaffPlanRowUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: StaffPlanRowCreateManyPlanInputEnvelope
    set?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    disconnect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    delete?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    update?: StaffPlanRowUpdateWithWhereUniqueWithoutPlanInput | StaffPlanRowUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: StaffPlanRowUpdateManyWithWhereWithoutPlanInput | StaffPlanRowUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
  }

  export type StaffPlanRowUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput> | StaffPlanRowCreateWithoutPlanInput[] | StaffPlanRowUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StaffPlanRowCreateOrConnectWithoutPlanInput | StaffPlanRowCreateOrConnectWithoutPlanInput[]
    upsert?: StaffPlanRowUpsertWithWhereUniqueWithoutPlanInput | StaffPlanRowUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: StaffPlanRowCreateManyPlanInputEnvelope
    set?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    disconnect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    delete?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    connect?: StaffPlanRowWhereUniqueInput | StaffPlanRowWhereUniqueInput[]
    update?: StaffPlanRowUpdateWithWhereUniqueWithoutPlanInput | StaffPlanRowUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: StaffPlanRowUpdateManyWithWhereWithoutPlanInput | StaffPlanRowUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
  }

  export type StaffPlanDayCreateNestedOneWithoutRowsInput = {
    create?: XOR<StaffPlanDayCreateWithoutRowsInput, StaffPlanDayUncheckedCreateWithoutRowsInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutRowsInput
    connect?: StaffPlanDayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStaffPlanRowsInput = {
    create?: XOR<UserCreateWithoutStaffPlanRowsInput, UserUncheckedCreateWithoutStaffPlanRowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffPlanRowsInput
    connect?: UserWhereUniqueInput
  }

  export type StaffPlanDayUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<StaffPlanDayCreateWithoutRowsInput, StaffPlanDayUncheckedCreateWithoutRowsInput>
    connectOrCreate?: StaffPlanDayCreateOrConnectWithoutRowsInput
    upsert?: StaffPlanDayUpsertWithoutRowsInput
    connect?: StaffPlanDayWhereUniqueInput
    update?: XOR<XOR<StaffPlanDayUpdateToOneWithWhereWithoutRowsInput, StaffPlanDayUpdateWithoutRowsInput>, StaffPlanDayUncheckedUpdateWithoutRowsInput>
  }

  export type UserUpdateOneWithoutStaffPlanRowsNestedInput = {
    create?: XOR<UserCreateWithoutStaffPlanRowsInput, UserUncheckedCreateWithoutStaffPlanRowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffPlanRowsInput
    upsert?: UserUpsertWithoutStaffPlanRowsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffPlanRowsInput, UserUpdateWithoutStaffPlanRowsInput>, UserUncheckedUpdateWithoutStaffPlanRowsInput>
  }

  export type ShiftTemplateRowCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput> | ShiftTemplateRowCreateWithoutTemplateInput[] | ShiftTemplateRowUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ShiftTemplateRowCreateOrConnectWithoutTemplateInput | ShiftTemplateRowCreateOrConnectWithoutTemplateInput[]
    createMany?: ShiftTemplateRowCreateManyTemplateInputEnvelope
    connect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
  }

  export type ShiftTemplateRowUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput> | ShiftTemplateRowCreateWithoutTemplateInput[] | ShiftTemplateRowUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ShiftTemplateRowCreateOrConnectWithoutTemplateInput | ShiftTemplateRowCreateOrConnectWithoutTemplateInput[]
    createMany?: ShiftTemplateRowCreateManyTemplateInputEnvelope
    connect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
  }

  export type ShiftTemplateRowUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput> | ShiftTemplateRowCreateWithoutTemplateInput[] | ShiftTemplateRowUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ShiftTemplateRowCreateOrConnectWithoutTemplateInput | ShiftTemplateRowCreateOrConnectWithoutTemplateInput[]
    upsert?: ShiftTemplateRowUpsertWithWhereUniqueWithoutTemplateInput | ShiftTemplateRowUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ShiftTemplateRowCreateManyTemplateInputEnvelope
    set?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    disconnect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    delete?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    connect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    update?: ShiftTemplateRowUpdateWithWhereUniqueWithoutTemplateInput | ShiftTemplateRowUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ShiftTemplateRowUpdateManyWithWhereWithoutTemplateInput | ShiftTemplateRowUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ShiftTemplateRowScalarWhereInput | ShiftTemplateRowScalarWhereInput[]
  }

  export type ShiftTemplateRowUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput> | ShiftTemplateRowCreateWithoutTemplateInput[] | ShiftTemplateRowUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ShiftTemplateRowCreateOrConnectWithoutTemplateInput | ShiftTemplateRowCreateOrConnectWithoutTemplateInput[]
    upsert?: ShiftTemplateRowUpsertWithWhereUniqueWithoutTemplateInput | ShiftTemplateRowUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ShiftTemplateRowCreateManyTemplateInputEnvelope
    set?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    disconnect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    delete?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    connect?: ShiftTemplateRowWhereUniqueInput | ShiftTemplateRowWhereUniqueInput[]
    update?: ShiftTemplateRowUpdateWithWhereUniqueWithoutTemplateInput | ShiftTemplateRowUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ShiftTemplateRowUpdateManyWithWhereWithoutTemplateInput | ShiftTemplateRowUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ShiftTemplateRowScalarWhereInput | ShiftTemplateRowScalarWhereInput[]
  }

  export type ShiftTemplateCreateNestedOneWithoutRowsInput = {
    create?: XOR<ShiftTemplateCreateWithoutRowsInput, ShiftTemplateUncheckedCreateWithoutRowsInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutRowsInput
    connect?: ShiftTemplateWhereUniqueInput
  }

  export type ShiftTemplateUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<ShiftTemplateCreateWithoutRowsInput, ShiftTemplateUncheckedCreateWithoutRowsInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutRowsInput
    upsert?: ShiftTemplateUpsertWithoutRowsInput
    connect?: ShiftTemplateWhereUniqueInput
    update?: XOR<XOR<ShiftTemplateUpdateToOneWithWhereWithoutRowsInput, ShiftTemplateUpdateWithoutRowsInput>, ShiftTemplateUncheckedUpdateWithoutRowsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type DocumentCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    type: string
    uploadedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    type: string
    uploadedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
  }

  export type OnboardingStatusCreateWithoutUserInput = {
    id?: string
    status?: string
    updatedAt?: Date | string
  }

  export type OnboardingStatusUncheckedCreateWithoutUserInput = {
    id?: string
    status?: string
    updatedAt?: Date | string
  }

  export type OnboardingStatusCreateOrConnectWithoutUserInput = {
    where: OnboardingStatusWhereUniqueInput
    create: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
  }

  export type PayslipCreateWithoutUserInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
  }

  export type PayslipUncheckedCreateWithoutUserInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
  }

  export type PayslipCreateOrConnectWithoutUserInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput>
  }

  export type PayslipCreateManyUserInputEnvelope = {
    data: PayslipCreateManyUserInput | PayslipCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type StepProgressCreateWithoutUserInput = {
    id?: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
  }

  export type StepProgressUncheckedCreateWithoutUserInput = {
    id?: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
  }

  export type StepProgressCreateOrConnectWithoutUserInput = {
    where: StepProgressWhereUniqueInput
    create: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput>
  }

  export type StepProgressCreateManyUserInputEnvelope = {
    data: StepProgressCreateManyUserInput | StepProgressCreateManyUserInput[]
  }

  export type TimesheetCreateWithoutUserInput = {
    id?: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUncheckedCreateWithoutUserInput = {
    id?: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetCreateOrConnectWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    create: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput>
  }

  export type TimesheetCreateManyUserInputEnvelope = {
    data: TimesheetCreateManyUserInput | TimesheetCreateManyUserInput[]
  }

  export type AvailabilityResponseCreateWithoutUserInput = {
    id?: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    day: AvailabilityDayCreateNestedOneWithoutResponsesInput
  }

  export type AvailabilityResponseUncheckedCreateWithoutUserInput = {
    id?: string
    dayId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseCreateOrConnectWithoutUserInput = {
    where: AvailabilityResponseWhereUniqueInput
    create: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityResponseCreateManyUserInputEnvelope = {
    data: AvailabilityResponseCreateManyUserInput | AvailabilityResponseCreateManyUserInput[]
  }

  export type StaffPlanRowCreateWithoutUserInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    startTime?: string | null
    endTime?: string | null
    note?: string | null
    plan: StaffPlanDayCreateNestedOneWithoutRowsInput
  }

  export type StaffPlanRowUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    sortOrder?: number
    assignmentLabel: string
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type StaffPlanRowCreateOrConnectWithoutUserInput = {
    where: StaffPlanRowWhereUniqueInput
    create: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput>
  }

  export type StaffPlanRowCreateManyUserInputEnvelope = {
    data: StaffPlanRowCreateManyUserInput | StaffPlanRowCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    userId?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type OnboardingStatusUpsertWithoutUserInput = {
    update: XOR<OnboardingStatusUpdateWithoutUserInput, OnboardingStatusUncheckedUpdateWithoutUserInput>
    create: XOR<OnboardingStatusCreateWithoutUserInput, OnboardingStatusUncheckedCreateWithoutUserInput>
    where?: OnboardingStatusWhereInput
  }

  export type OnboardingStatusUpdateToOneWithWhereWithoutUserInput = {
    where?: OnboardingStatusWhereInput
    data: XOR<OnboardingStatusUpdateWithoutUserInput, OnboardingStatusUncheckedUpdateWithoutUserInput>
  }

  export type OnboardingStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUpsertWithWhereUniqueWithoutUserInput = {
    where: PayslipWhereUniqueInput
    update: XOR<PayslipUpdateWithoutUserInput, PayslipUncheckedUpdateWithoutUserInput>
    create: XOR<PayslipCreateWithoutUserInput, PayslipUncheckedCreateWithoutUserInput>
  }

  export type PayslipUpdateWithWhereUniqueWithoutUserInput = {
    where: PayslipWhereUniqueInput
    data: XOR<PayslipUpdateWithoutUserInput, PayslipUncheckedUpdateWithoutUserInput>
  }

  export type PayslipUpdateManyWithWhereWithoutUserInput = {
    where: PayslipScalarWhereInput
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyWithoutUserInput>
  }

  export type PayslipScalarWhereInput = {
    AND?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    OR?: PayslipScalarWhereInput[]
    NOT?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    id?: StringFilter<"Payslip"> | string
    month?: IntFilter<"Payslip"> | number
    year?: IntFilter<"Payslip"> | number
    url?: StringFilter<"Payslip"> | string
    uploadedAt?: DateTimeFilter<"Payslip"> | Date | string
    userId?: StringFilter<"Payslip"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type StepProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: StepProgressWhereUniqueInput
    update: XOR<StepProgressUpdateWithoutUserInput, StepProgressUncheckedUpdateWithoutUserInput>
    create: XOR<StepProgressCreateWithoutUserInput, StepProgressUncheckedCreateWithoutUserInput>
  }

  export type StepProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: StepProgressWhereUniqueInput
    data: XOR<StepProgressUpdateWithoutUserInput, StepProgressUncheckedUpdateWithoutUserInput>
  }

  export type StepProgressUpdateManyWithWhereWithoutUserInput = {
    where: StepProgressScalarWhereInput
    data: XOR<StepProgressUpdateManyMutationInput, StepProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type StepProgressScalarWhereInput = {
    AND?: StepProgressScalarWhereInput | StepProgressScalarWhereInput[]
    OR?: StepProgressScalarWhereInput[]
    NOT?: StepProgressScalarWhereInput | StepProgressScalarWhereInput[]
    id?: StringFilter<"StepProgress"> | string
    userId?: StringFilter<"StepProgress"> | string
    stepId?: StringFilter<"StepProgress"> | string
    completed?: BoolFilter<"StepProgress"> | boolean
    data?: StringNullableFilter<"StepProgress"> | string | null
    updatedAt?: DateTimeFilter<"StepProgress"> | Date | string
  }

  export type TimesheetUpsertWithWhereUniqueWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    update: XOR<TimesheetUpdateWithoutUserInput, TimesheetUncheckedUpdateWithoutUserInput>
    create: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput>
  }

  export type TimesheetUpdateWithWhereUniqueWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    data: XOR<TimesheetUpdateWithoutUserInput, TimesheetUncheckedUpdateWithoutUserInput>
  }

  export type TimesheetUpdateManyWithWhereWithoutUserInput = {
    where: TimesheetScalarWhereInput
    data: XOR<TimesheetUpdateManyMutationInput, TimesheetUncheckedUpdateManyWithoutUserInput>
  }

  export type TimesheetScalarWhereInput = {
    AND?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
    OR?: TimesheetScalarWhereInput[]
    NOT?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
    id?: StringFilter<"Timesheet"> | string
    userId?: StringFilter<"Timesheet"> | string
    date?: StringFilter<"Timesheet"> | string
    startTime?: StringFilter<"Timesheet"> | string
    endTime?: StringFilter<"Timesheet"> | string
    breakMinutes?: IntFilter<"Timesheet"> | number
    totalHours?: FloatFilter<"Timesheet"> | number
    status?: StringFilter<"Timesheet"> | string
    note?: StringNullableFilter<"Timesheet"> | string | null
    hourlyWage?: FloatNullableFilter<"Timesheet"> | number | null
    approvedBy?: StringNullableFilter<"Timesheet"> | string | null
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
  }

  export type AvailabilityResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityResponseWhereUniqueInput
    update: XOR<AvailabilityResponseUpdateWithoutUserInput, AvailabilityResponseUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityResponseCreateWithoutUserInput, AvailabilityResponseUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityResponseWhereUniqueInput
    data: XOR<AvailabilityResponseUpdateWithoutUserInput, AvailabilityResponseUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityResponseUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityResponseScalarWhereInput
    data: XOR<AvailabilityResponseUpdateManyMutationInput, AvailabilityResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityResponseScalarWhereInput = {
    AND?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
    OR?: AvailabilityResponseScalarWhereInput[]
    NOT?: AvailabilityResponseScalarWhereInput | AvailabilityResponseScalarWhereInput[]
    id?: StringFilter<"AvailabilityResponse"> | string
    employeeId?: StringFilter<"AvailabilityResponse"> | string
    dayId?: StringFilter<"AvailabilityResponse"> | string
    status?: StringFilter<"AvailabilityResponse"> | string
    comment?: StringNullableFilter<"AvailabilityResponse"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityResponse"> | Date | string
  }

  export type StaffPlanRowUpsertWithWhereUniqueWithoutUserInput = {
    where: StaffPlanRowWhereUniqueInput
    update: XOR<StaffPlanRowUpdateWithoutUserInput, StaffPlanRowUncheckedUpdateWithoutUserInput>
    create: XOR<StaffPlanRowCreateWithoutUserInput, StaffPlanRowUncheckedCreateWithoutUserInput>
  }

  export type StaffPlanRowUpdateWithWhereUniqueWithoutUserInput = {
    where: StaffPlanRowWhereUniqueInput
    data: XOR<StaffPlanRowUpdateWithoutUserInput, StaffPlanRowUncheckedUpdateWithoutUserInput>
  }

  export type StaffPlanRowUpdateManyWithWhereWithoutUserInput = {
    where: StaffPlanRowScalarWhereInput
    data: XOR<StaffPlanRowUpdateManyMutationInput, StaffPlanRowUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffPlanRowScalarWhereInput = {
    AND?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
    OR?: StaffPlanRowScalarWhereInput[]
    NOT?: StaffPlanRowScalarWhereInput | StaffPlanRowScalarWhereInput[]
    id?: StringFilter<"StaffPlanRow"> | string
    planId?: StringFilter<"StaffPlanRow"> | string
    sortOrder?: IntFilter<"StaffPlanRow"> | number
    assignmentLabel?: StringFilter<"StaffPlanRow"> | string
    employeeId?: StringNullableFilter<"StaffPlanRow"> | string | null
    startTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    endTime?: StringNullableFilter<"StaffPlanRow"> | string | null
    note?: StringNullableFilter<"StaffPlanRow"> | string | null
  }

  export type UserCreateWithoutPayslipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayslipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayslipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayslipsInput, UserUncheckedCreateWithoutPayslipsInput>
  }

  export type UserUpsertWithoutPayslipsInput = {
    update: XOR<UserUpdateWithoutPayslipsInput, UserUncheckedUpdateWithoutPayslipsInput>
    create: XOR<UserCreateWithoutPayslipsInput, UserUncheckedCreateWithoutPayslipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayslipsInput, UserUncheckedUpdateWithoutPayslipsInput>
  }

  export type UserUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOnboardingStatusInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOnboardingStatusInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOnboardingStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnboardingStatusInput, UserUncheckedCreateWithoutOnboardingStatusInput>
  }

  export type UserUpsertWithoutOnboardingStatusInput = {
    update: XOR<UserUpdateWithoutOnboardingStatusInput, UserUncheckedUpdateWithoutOnboardingStatusInput>
    create: XOR<UserCreateWithoutOnboardingStatusInput, UserUncheckedCreateWithoutOnboardingStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnboardingStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnboardingStatusInput, UserUncheckedUpdateWithoutOnboardingStatusInput>
  }

  export type UserUpdateWithoutOnboardingStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnboardingStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStepProgressesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStepProgressesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStepProgressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepProgressesInput, UserUncheckedCreateWithoutStepProgressesInput>
  }

  export type UserUpsertWithoutStepProgressesInput = {
    update: XOR<UserUpdateWithoutStepProgressesInput, UserUncheckedUpdateWithoutStepProgressesInput>
    create: XOR<UserCreateWithoutStepProgressesInput, UserUncheckedCreateWithoutStepProgressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepProgressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepProgressesInput, UserUncheckedUpdateWithoutStepProgressesInput>
  }

  export type UserUpdateWithoutStepProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStepProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTimesheetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimesheetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimesheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
  }

  export type UserUpsertWithoutTimesheetsInput = {
    update: XOR<UserUpdateWithoutTimesheetsInput, UserUncheckedUpdateWithoutTimesheetsInput>
    create: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimesheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimesheetsInput, UserUncheckedUpdateWithoutTimesheetsInput>
  }

  export type UserUpdateWithoutTimesheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimesheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailabilityDayCreateWithoutRequestInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    responses?: AvailabilityResponseCreateNestedManyWithoutDayInput
    staffPlan?: StaffPlanDayCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayUncheckedCreateWithoutRequestInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    responses?: AvailabilityResponseUncheckedCreateNestedManyWithoutDayInput
    staffPlan?: StaffPlanDayUncheckedCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayCreateOrConnectWithoutRequestInput = {
    where: AvailabilityDayWhereUniqueInput
    create: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput>
  }

  export type AvailabilityDayCreateManyRequestInputEnvelope = {
    data: AvailabilityDayCreateManyRequestInput | AvailabilityDayCreateManyRequestInput[]
  }

  export type AvailabilityDayUpsertWithWhereUniqueWithoutRequestInput = {
    where: AvailabilityDayWhereUniqueInput
    update: XOR<AvailabilityDayUpdateWithoutRequestInput, AvailabilityDayUncheckedUpdateWithoutRequestInput>
    create: XOR<AvailabilityDayCreateWithoutRequestInput, AvailabilityDayUncheckedCreateWithoutRequestInput>
  }

  export type AvailabilityDayUpdateWithWhereUniqueWithoutRequestInput = {
    where: AvailabilityDayWhereUniqueInput
    data: XOR<AvailabilityDayUpdateWithoutRequestInput, AvailabilityDayUncheckedUpdateWithoutRequestInput>
  }

  export type AvailabilityDayUpdateManyWithWhereWithoutRequestInput = {
    where: AvailabilityDayScalarWhereInput
    data: XOR<AvailabilityDayUpdateManyMutationInput, AvailabilityDayUncheckedUpdateManyWithoutRequestInput>
  }

  export type AvailabilityDayScalarWhereInput = {
    AND?: AvailabilityDayScalarWhereInput | AvailabilityDayScalarWhereInput[]
    OR?: AvailabilityDayScalarWhereInput[]
    NOT?: AvailabilityDayScalarWhereInput | AvailabilityDayScalarWhereInput[]
    id?: StringFilter<"AvailabilityDay"> | string
    requestId?: StringFilter<"AvailabilityDay"> | string
    date?: DateTimeFilter<"AvailabilityDay"> | Date | string
    eventName?: StringNullableFilter<"AvailabilityDay"> | string | null
    note?: StringNullableFilter<"AvailabilityDay"> | string | null
  }

  export type AvailabilityRequestCreateWithoutDaysInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRequestUncheckedCreateWithoutDaysInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRequestCreateOrConnectWithoutDaysInput = {
    where: AvailabilityRequestWhereUniqueInput
    create: XOR<AvailabilityRequestCreateWithoutDaysInput, AvailabilityRequestUncheckedCreateWithoutDaysInput>
  }

  export type AvailabilityResponseCreateWithoutDayInput = {
    id?: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAvailabilityResponsesInput
  }

  export type AvailabilityResponseUncheckedCreateWithoutDayInput = {
    id?: string
    employeeId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseCreateOrConnectWithoutDayInput = {
    where: AvailabilityResponseWhereUniqueInput
    create: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput>
  }

  export type AvailabilityResponseCreateManyDayInputEnvelope = {
    data: AvailabilityResponseCreateManyDayInput | AvailabilityResponseCreateManyDayInput[]
  }

  export type StaffPlanDayCreateWithoutDayInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: StaffPlanRowCreateNestedManyWithoutPlanInput
  }

  export type StaffPlanDayUncheckedCreateWithoutDayInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: StaffPlanRowUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StaffPlanDayCreateOrConnectWithoutDayInput = {
    where: StaffPlanDayWhereUniqueInput
    create: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
  }

  export type AvailabilityRequestUpsertWithoutDaysInput = {
    update: XOR<AvailabilityRequestUpdateWithoutDaysInput, AvailabilityRequestUncheckedUpdateWithoutDaysInput>
    create: XOR<AvailabilityRequestCreateWithoutDaysInput, AvailabilityRequestUncheckedCreateWithoutDaysInput>
    where?: AvailabilityRequestWhereInput
  }

  export type AvailabilityRequestUpdateToOneWithWhereWithoutDaysInput = {
    where?: AvailabilityRequestWhereInput
    data: XOR<AvailabilityRequestUpdateWithoutDaysInput, AvailabilityRequestUncheckedUpdateWithoutDaysInput>
  }

  export type AvailabilityRequestUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRequestUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseUpsertWithWhereUniqueWithoutDayInput = {
    where: AvailabilityResponseWhereUniqueInput
    update: XOR<AvailabilityResponseUpdateWithoutDayInput, AvailabilityResponseUncheckedUpdateWithoutDayInput>
    create: XOR<AvailabilityResponseCreateWithoutDayInput, AvailabilityResponseUncheckedCreateWithoutDayInput>
  }

  export type AvailabilityResponseUpdateWithWhereUniqueWithoutDayInput = {
    where: AvailabilityResponseWhereUniqueInput
    data: XOR<AvailabilityResponseUpdateWithoutDayInput, AvailabilityResponseUncheckedUpdateWithoutDayInput>
  }

  export type AvailabilityResponseUpdateManyWithWhereWithoutDayInput = {
    where: AvailabilityResponseScalarWhereInput
    data: XOR<AvailabilityResponseUpdateManyMutationInput, AvailabilityResponseUncheckedUpdateManyWithoutDayInput>
  }

  export type StaffPlanDayUpsertWithoutDayInput = {
    update: XOR<StaffPlanDayUpdateWithoutDayInput, StaffPlanDayUncheckedUpdateWithoutDayInput>
    create: XOR<StaffPlanDayCreateWithoutDayInput, StaffPlanDayUncheckedCreateWithoutDayInput>
    where?: StaffPlanDayWhereInput
  }

  export type StaffPlanDayUpdateToOneWithWhereWithoutDayInput = {
    where?: StaffPlanDayWhereInput
    data: XOR<StaffPlanDayUpdateWithoutDayInput, StaffPlanDayUncheckedUpdateWithoutDayInput>
  }

  export type StaffPlanDayUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: StaffPlanRowUpdateManyWithoutPlanNestedInput
  }

  export type StaffPlanDayUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: StaffPlanRowUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutAvailabilityResponsesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityResponsesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    staffPlanRows?: StaffPlanRowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityResponsesInput, UserUncheckedCreateWithoutAvailabilityResponsesInput>
  }

  export type AvailabilityDayCreateWithoutResponsesInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    request: AvailabilityRequestCreateNestedOneWithoutDaysInput
    staffPlan?: StaffPlanDayCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayUncheckedCreateWithoutResponsesInput = {
    id?: string
    requestId: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    staffPlan?: StaffPlanDayUncheckedCreateNestedOneWithoutDayInput
  }

  export type AvailabilityDayCreateOrConnectWithoutResponsesInput = {
    where: AvailabilityDayWhereUniqueInput
    create: XOR<AvailabilityDayCreateWithoutResponsesInput, AvailabilityDayUncheckedCreateWithoutResponsesInput>
  }

  export type UserUpsertWithoutAvailabilityResponsesInput = {
    update: XOR<UserUpdateWithoutAvailabilityResponsesInput, UserUncheckedUpdateWithoutAvailabilityResponsesInput>
    create: XOR<UserCreateWithoutAvailabilityResponsesInput, UserUncheckedCreateWithoutAvailabilityResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityResponsesInput, UserUncheckedUpdateWithoutAvailabilityResponsesInput>
  }

  export type UserUpdateWithoutAvailabilityResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    staffPlanRows?: StaffPlanRowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailabilityDayUpsertWithoutResponsesInput = {
    update: XOR<AvailabilityDayUpdateWithoutResponsesInput, AvailabilityDayUncheckedUpdateWithoutResponsesInput>
    create: XOR<AvailabilityDayCreateWithoutResponsesInput, AvailabilityDayUncheckedCreateWithoutResponsesInput>
    where?: AvailabilityDayWhereInput
  }

  export type AvailabilityDayUpdateToOneWithWhereWithoutResponsesInput = {
    where?: AvailabilityDayWhereInput
    data: XOR<AvailabilityDayUpdateWithoutResponsesInput, AvailabilityDayUncheckedUpdateWithoutResponsesInput>
  }

  export type AvailabilityDayUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    request?: AvailabilityRequestUpdateOneRequiredWithoutDaysNestedInput
    staffPlan?: StaffPlanDayUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    staffPlan?: StaffPlanDayUncheckedUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayCreateWithoutStaffPlanInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    request: AvailabilityRequestCreateNestedOneWithoutDaysInput
    responses?: AvailabilityResponseCreateNestedManyWithoutDayInput
  }

  export type AvailabilityDayUncheckedCreateWithoutStaffPlanInput = {
    id?: string
    requestId: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    responses?: AvailabilityResponseUncheckedCreateNestedManyWithoutDayInput
  }

  export type AvailabilityDayCreateOrConnectWithoutStaffPlanInput = {
    where: AvailabilityDayWhereUniqueInput
    create: XOR<AvailabilityDayCreateWithoutStaffPlanInput, AvailabilityDayUncheckedCreateWithoutStaffPlanInput>
  }

  export type StaffPlanRowCreateWithoutPlanInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    startTime?: string | null
    endTime?: string | null
    note?: string | null
    user?: UserCreateNestedOneWithoutStaffPlanRowsInput
  }

  export type StaffPlanRowUncheckedCreateWithoutPlanInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    employeeId?: string | null
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type StaffPlanRowCreateOrConnectWithoutPlanInput = {
    where: StaffPlanRowWhereUniqueInput
    create: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput>
  }

  export type StaffPlanRowCreateManyPlanInputEnvelope = {
    data: StaffPlanRowCreateManyPlanInput | StaffPlanRowCreateManyPlanInput[]
  }

  export type AvailabilityDayUpsertWithoutStaffPlanInput = {
    update: XOR<AvailabilityDayUpdateWithoutStaffPlanInput, AvailabilityDayUncheckedUpdateWithoutStaffPlanInput>
    create: XOR<AvailabilityDayCreateWithoutStaffPlanInput, AvailabilityDayUncheckedCreateWithoutStaffPlanInput>
    where?: AvailabilityDayWhereInput
  }

  export type AvailabilityDayUpdateToOneWithWhereWithoutStaffPlanInput = {
    where?: AvailabilityDayWhereInput
    data: XOR<AvailabilityDayUpdateWithoutStaffPlanInput, AvailabilityDayUncheckedUpdateWithoutStaffPlanInput>
  }

  export type AvailabilityDayUpdateWithoutStaffPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    request?: AvailabilityRequestUpdateOneRequiredWithoutDaysNestedInput
    responses?: AvailabilityResponseUpdateManyWithoutDayNestedInput
  }

  export type AvailabilityDayUncheckedUpdateWithoutStaffPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AvailabilityResponseUncheckedUpdateManyWithoutDayNestedInput
  }

  export type StaffPlanRowUpsertWithWhereUniqueWithoutPlanInput = {
    where: StaffPlanRowWhereUniqueInput
    update: XOR<StaffPlanRowUpdateWithoutPlanInput, StaffPlanRowUncheckedUpdateWithoutPlanInput>
    create: XOR<StaffPlanRowCreateWithoutPlanInput, StaffPlanRowUncheckedCreateWithoutPlanInput>
  }

  export type StaffPlanRowUpdateWithWhereUniqueWithoutPlanInput = {
    where: StaffPlanRowWhereUniqueInput
    data: XOR<StaffPlanRowUpdateWithoutPlanInput, StaffPlanRowUncheckedUpdateWithoutPlanInput>
  }

  export type StaffPlanRowUpdateManyWithWhereWithoutPlanInput = {
    where: StaffPlanRowScalarWhereInput
    data: XOR<StaffPlanRowUpdateManyMutationInput, StaffPlanRowUncheckedUpdateManyWithoutPlanInput>
  }

  export type StaffPlanDayCreateWithoutRowsInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    day?: AvailabilityDayCreateNestedOneWithoutStaffPlanInput
  }

  export type StaffPlanDayUncheckedCreateWithoutRowsInput = {
    id?: string
    dayId?: string | null
    date: Date | string
    eventName?: string | null
    note?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffPlanDayCreateOrConnectWithoutRowsInput = {
    where: StaffPlanDayWhereUniqueInput
    create: XOR<StaffPlanDayCreateWithoutRowsInput, StaffPlanDayUncheckedCreateWithoutRowsInput>
  }

  export type UserCreateWithoutStaffPlanRowsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusCreateNestedOneWithoutUserInput
    payslips?: PayslipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressCreateNestedManyWithoutUserInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffPlanRowsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    jobRole?: string | null
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDate?: Date | string | null
    hourlyWage?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    onboardingStatus?: OnboardingStatusUncheckedCreateNestedOneWithoutUserInput
    payslips?: PayslipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stepProgresses?: StepProgressUncheckedCreateNestedManyWithoutUserInput
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    availabilityResponses?: AvailabilityResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffPlanRowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffPlanRowsInput, UserUncheckedCreateWithoutStaffPlanRowsInput>
  }

  export type StaffPlanDayUpsertWithoutRowsInput = {
    update: XOR<StaffPlanDayUpdateWithoutRowsInput, StaffPlanDayUncheckedUpdateWithoutRowsInput>
    create: XOR<StaffPlanDayCreateWithoutRowsInput, StaffPlanDayUncheckedCreateWithoutRowsInput>
    where?: StaffPlanDayWhereInput
  }

  export type StaffPlanDayUpdateToOneWithWhereWithoutRowsInput = {
    where?: StaffPlanDayWhereInput
    data: XOR<StaffPlanDayUpdateWithoutRowsInput, StaffPlanDayUncheckedUpdateWithoutRowsInput>
  }

  export type StaffPlanDayUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: AvailabilityDayUpdateOneWithoutStaffPlanNestedInput
  }

  export type StaffPlanDayUncheckedUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutStaffPlanRowsInput = {
    update: XOR<UserUpdateWithoutStaffPlanRowsInput, UserUncheckedUpdateWithoutStaffPlanRowsInput>
    create: XOR<UserCreateWithoutStaffPlanRowsInput, UserUncheckedCreateWithoutStaffPlanRowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffPlanRowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffPlanRowsInput, UserUncheckedUpdateWithoutStaffPlanRowsInput>
  }

  export type UserUpdateWithoutStaffPlanRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUpdateOneWithoutUserNestedInput
    payslips?: PayslipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffPlanRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hourlyWage?: FloatFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    onboardingStatus?: OnboardingStatusUncheckedUpdateOneWithoutUserNestedInput
    payslips?: PayslipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stepProgresses?: StepProgressUncheckedUpdateManyWithoutUserNestedInput
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    availabilityResponses?: AvailabilityResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShiftTemplateRowCreateWithoutTemplateInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
  }

  export type ShiftTemplateRowUncheckedCreateWithoutTemplateInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
  }

  export type ShiftTemplateRowCreateOrConnectWithoutTemplateInput = {
    where: ShiftTemplateRowWhereUniqueInput
    create: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput>
  }

  export type ShiftTemplateRowCreateManyTemplateInputEnvelope = {
    data: ShiftTemplateRowCreateManyTemplateInput | ShiftTemplateRowCreateManyTemplateInput[]
  }

  export type ShiftTemplateRowUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ShiftTemplateRowWhereUniqueInput
    update: XOR<ShiftTemplateRowUpdateWithoutTemplateInput, ShiftTemplateRowUncheckedUpdateWithoutTemplateInput>
    create: XOR<ShiftTemplateRowCreateWithoutTemplateInput, ShiftTemplateRowUncheckedCreateWithoutTemplateInput>
  }

  export type ShiftTemplateRowUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ShiftTemplateRowWhereUniqueInput
    data: XOR<ShiftTemplateRowUpdateWithoutTemplateInput, ShiftTemplateRowUncheckedUpdateWithoutTemplateInput>
  }

  export type ShiftTemplateRowUpdateManyWithWhereWithoutTemplateInput = {
    where: ShiftTemplateRowScalarWhereInput
    data: XOR<ShiftTemplateRowUpdateManyMutationInput, ShiftTemplateRowUncheckedUpdateManyWithoutTemplateInput>
  }

  export type ShiftTemplateRowScalarWhereInput = {
    AND?: ShiftTemplateRowScalarWhereInput | ShiftTemplateRowScalarWhereInput[]
    OR?: ShiftTemplateRowScalarWhereInput[]
    NOT?: ShiftTemplateRowScalarWhereInput | ShiftTemplateRowScalarWhereInput[]
    id?: StringFilter<"ShiftTemplateRow"> | string
    templateId?: StringFilter<"ShiftTemplateRow"> | string
    sortOrder?: IntFilter<"ShiftTemplateRow"> | number
    assignmentLabel?: StringFilter<"ShiftTemplateRow"> | string
    defaultStartTime?: StringNullableFilter<"ShiftTemplateRow"> | string | null
  }

  export type ShiftTemplateCreateWithoutRowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftTemplateUncheckedCreateWithoutRowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftTemplateCreateOrConnectWithoutRowsInput = {
    where: ShiftTemplateWhereUniqueInput
    create: XOR<ShiftTemplateCreateWithoutRowsInput, ShiftTemplateUncheckedCreateWithoutRowsInput>
  }

  export type ShiftTemplateUpsertWithoutRowsInput = {
    update: XOR<ShiftTemplateUpdateWithoutRowsInput, ShiftTemplateUncheckedUpdateWithoutRowsInput>
    create: XOR<ShiftTemplateCreateWithoutRowsInput, ShiftTemplateUncheckedCreateWithoutRowsInput>
    where?: ShiftTemplateWhereInput
  }

  export type ShiftTemplateUpdateToOneWithWhereWithoutRowsInput = {
    where?: ShiftTemplateWhereInput
    data: XOR<ShiftTemplateUpdateWithoutRowsInput, ShiftTemplateUncheckedUpdateWithoutRowsInput>
  }

  export type ShiftTemplateUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateUncheckedUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    name: string
    url: string
    type: string
    uploadedAt?: Date | string
  }

  export type PayslipCreateManyUserInput = {
    id?: string
    month: number
    year: number
    url: string
    uploadedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type StepProgressCreateManyUserInput = {
    id?: string
    stepId: string
    completed?: boolean
    data?: string | null
    updatedAt?: Date | string
  }

  export type TimesheetCreateManyUserInput = {
    id?: string
    date: string
    startTime: string
    endTime: string
    breakMinutes?: number
    totalHours: number
    status?: string
    note?: string | null
    hourlyWage?: number | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseCreateManyUserInput = {
    id?: string
    dayId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffPlanRowCreateManyUserInput = {
    id?: string
    planId: string
    sortOrder?: number
    assignmentLabel: string
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakMinutes?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: AvailabilityDayUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type AvailabilityResponseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPlanRowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StaffPlanDayUpdateOneRequiredWithoutRowsNestedInput
  }

  export type StaffPlanRowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPlanRowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityDayCreateManyRequestInput = {
    id?: string
    date: Date | string
    eventName?: string | null
    note?: string | null
  }

  export type AvailabilityDayUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AvailabilityResponseUpdateManyWithoutDayNestedInput
    staffPlan?: StaffPlanDayUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AvailabilityResponseUncheckedUpdateManyWithoutDayNestedInput
    staffPlan?: StaffPlanDayUncheckedUpdateOneWithoutDayNestedInput
  }

  export type AvailabilityDayUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityResponseCreateManyDayInput = {
    id?: string
    employeeId: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityResponseUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAvailabilityResponsesNestedInput
  }

  export type AvailabilityResponseUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityResponseUncheckedUpdateManyWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPlanRowCreateManyPlanInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    employeeId?: string | null
    startTime?: string | null
    endTime?: string | null
    note?: string | null
  }

  export type StaffPlanRowUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutStaffPlanRowsNestedInput
  }

  export type StaffPlanRowUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPlanRowUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateRowCreateManyTemplateInput = {
    id?: string
    sortOrder?: number
    assignmentLabel: string
    defaultStartTime?: string | null
  }

  export type ShiftTemplateRowUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateRowUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftTemplateRowUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    assignmentLabel?: StringFieldUpdateOperationsInput | string
    defaultStartTime?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityRequestCountOutputTypeDefaultArgs instead
     */
    export type AvailabilityRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityDayCountOutputTypeDefaultArgs instead
     */
    export type AvailabilityDayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityDayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaffPlanDayCountOutputTypeDefaultArgs instead
     */
    export type StaffPlanDayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaffPlanDayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftTemplateCountOutputTypeDefaultArgs instead
     */
    export type ShiftTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayslipDefaultArgs instead
     */
    export type PayslipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayslipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OnboardingStatusDefaultArgs instead
     */
    export type OnboardingStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OnboardingStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StepProgressDefaultArgs instead
     */
    export type StepProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentDefaultArgs instead
     */
    export type DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesheetDefaultArgs instead
     */
    export type TimesheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesheetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BenefitDefaultArgs instead
     */
    export type BenefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BenefitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityRequestDefaultArgs instead
     */
    export type AvailabilityRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityDayDefaultArgs instead
     */
    export type AvailabilityDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityResponseDefaultArgs instead
     */
    export type AvailabilityResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaffPlanDayDefaultArgs instead
     */
    export type StaffPlanDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaffPlanDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaffPlanRowDefaultArgs instead
     */
    export type StaffPlanRowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaffPlanRowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftTemplateDefaultArgs instead
     */
    export type ShiftTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftTemplateRowDefaultArgs instead
     */
    export type ShiftTemplateRowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftTemplateRowDefaultArgs<ExtArgs>

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