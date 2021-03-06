import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type NumberObj = {
  __typename?: 'NumberObj';
  fmt?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  getDataByTicker?: Maybe<TickerData>;
};


export type QueryGetDataByTickerArgs = {
  ticker: Scalars['String'];
};

export type TickerData = {
  __typename?: 'TickerData';
  exchange?: Maybe<Scalars['String']>;
  exchangeTimezoneName?: Maybe<Scalars['String']>;
  exchangeTimezoneShortName?: Maybe<Scalars['String']>;
  gmtOffSetMilliseconds?: Maybe<Scalars['String']>;
  isEsgPopulated?: Maybe<Scalars['String']>;
  longName?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  messageBoardId?: Maybe<Scalars['String']>;
  postMarketChangePercent?: Maybe<NumberObj>;
  quoteType?: Maybe<Scalars['String']>;
  regularMarketChangePercent?: Maybe<NumberObj>;
  regularMarketDayHigh?: Maybe<NumberObj>;
  shortName?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type QuoteType = {
  __typename?: 'quoteType';
  exchange?: Maybe<Scalars['String']>;
  exchangeTimezoneName?: Maybe<Scalars['String']>;
  exchangeTimezoneShortName?: Maybe<Scalars['String']>;
  gmtOffSetMilliseconds?: Maybe<Scalars['String']>;
  isEsgPopulated?: Maybe<Scalars['String']>;
  longName?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  messageBoardId?: Maybe<Scalars['String']>;
  quoteType?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  NumberObj: ResolverTypeWrapper<NumberObj>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TickerData: ResolverTypeWrapper<TickerData>;
  quoteType: ResolverTypeWrapper<QuoteType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  NumberObj: NumberObj;
  Query: {};
  String: Scalars['String'];
  TickerData: TickerData;
  quoteType: QuoteType;
};

export type NumberObjResolvers<ContextType = any, ParentType extends ResolversParentTypes['NumberObj'] = ResolversParentTypes['NumberObj']> = {
  fmt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getDataByTicker?: Resolver<Maybe<ResolversTypes['TickerData']>, ParentType, ContextType, RequireFields<QueryGetDataByTickerArgs, 'ticker'>>;
};

export type TickerDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TickerData'] = ResolversParentTypes['TickerData']> = {
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isEsgPopulated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageBoardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postMarketChangePercent?: Resolver<Maybe<ResolversTypes['NumberObj']>, ParentType, ContextType>;
  quoteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regularMarketChangePercent?: Resolver<Maybe<ResolversTypes['NumberObj']>, ParentType, ContextType>;
  regularMarketDayHigh?: Resolver<Maybe<ResolversTypes['NumberObj']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuoteTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['quoteType'] = ResolversParentTypes['quoteType']> = {
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeTimezoneShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmtOffSetMilliseconds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isEsgPopulated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageBoardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  NumberObj?: NumberObjResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TickerData?: TickerDataResolvers<ContextType>;
  quoteType?: QuoteTypeResolvers<ContextType>;
};

