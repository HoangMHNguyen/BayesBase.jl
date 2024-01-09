var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = BayesBase","category":"page"},{"location":"#BayesBase.jl","page":"Home","title":"BayesBase.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BayesBase is a package that serves as an umbrella, defining, exporting, and re-exporting methods essential for Bayesian statistics specifically for the RxInfer ecosystem. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Related projects:","category":"page"},{"location":"","page":"Home","title":"Home","text":"RxInfer\nExponentialFamily","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#library","page":"Home","title":"Library API","text":"","category":"section"},{"location":"#library-densities","page":"Home","title":"Generic densities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BayesBase.PointMass\nBayesBase.ContinuousUnivariateLogPdf\nBayesBase.ContinuousMultivariateLogPdf\nBayesBase.SampleList\nBayesBase.FactorizedJoint\nBayesBase.MixtureDistribution\nBayesBase.Contingency","category":"page"},{"location":"#BayesBase.PointMass","page":"Home","title":"BayesBase.PointMass","text":"PointMass(point)\n\nA PointMass structure represents a delta distribution, a discrete probability distribution  where all probability mass is concentrated at a single point. This point is specified by  the provided point.\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.ContinuousUnivariateLogPdf","page":"Home","title":"BayesBase.ContinuousUnivariateLogPdf","text":"ContinuousUnivariateLogPdf{ D <: DomainSets.Domain, F } <: AbstractContinuousGenericLogPdf\n\nGeneric continuous univariate distribution in a form of domain specification and logpdf function. Can be used in cases where no  known analytical distribution available. \n\nArguments\n\ndomain: domain specificatiom from DomainSets.jl package, by default the domain is set to DomainSets.FullSpace(). Use BayesBase.UnspecifiedDomain() to bypass domain checks.\nlogpdf: callable object that represents the logdensity. Can be un-normalised.\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.ContinuousMultivariateLogPdf","page":"Home","title":"BayesBase.ContinuousMultivariateLogPdf","text":"ContinuousMultivariateLogPdf{ D <: DomainSets.Domain, F } <: AbstractContinuousGenericLogPdf\n\nGeneric continuous multivariate distribution in a form of domain specification and logpdf function. Can be used in cases where no  known analytical distribution available. \n\nArguments\n\ndomain: multidimensional domain specification from DomainSets.jl package. Use BayesBase.UnspecifiedDomain() to bypass domain checks.\nlogpdf: callable object that accepts an AbstractVector as an input and represents the logdensity. Can be un-normalised.\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.SampleList","page":"Home","title":"BayesBase.SampleList","text":"SampleList\n\nGeneric distribution represented as a list of weighted samples.\n\nArguments\n\nsamples::S\nweights::W: optional, equivalent to fill(1 / N, N) by default, where N is the length of samples container\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.FactorizedJoint","page":"Home","title":"BayesBase.FactorizedJoint","text":"FactorizedJoint(components)\n\nFactorizedJoint represents a joint distribution of independent random variables.  Use component() function or square-brackets indexing to access the marginal distribution for individual variables. Use components() function to get a tuple of multipliers.\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.MixtureDistribution","page":"Home","title":"BayesBase.MixtureDistribution","text":"MixtureDistribution(components, weights)\n\nA custom mixture distribution implementation, parameterized by:\n\nC type family of the mixture\nCT the type for the weights\n\nThis implementation solves:\n\nDistributions.jl Issue 1669\nReactiveMP.jl Issue 253\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.Contingency","page":"Home","title":"BayesBase.Contingency","text":"Contingency(P, renormalize = Val(true))\n\nThe contingency distribution is a multivariate generalization of the categorical distribution. As a bivariate distribution, the  contingency distribution defines the joint probability over two unit vectors v1 and v2. The parameter P encodes a contingency matrix that specifies the probability of co-occurrence.\n\nv1 ∈ {0, 1}^d1 where Σ_j v1_j = 1\nv2 ∈ {0, 1}^d2 where Σ_k v2_k = 1\n\nP ∈ [0, 1]^{d1 × d2}, where Σ_jk P_jk = 1\n\nf(v1, v2, P) = Contingency(out1, out2 | P) = Π_jk P_jk^{v1_j * v2_k}\n\nA Contingency distribution over more than two variables requires higher-order tensors as parameters; these are not implemented in ReactiveMP.\n\nArguments:\n\nP, required, contingency matrix\nrenormalize, optional, supports either Val(true) or Val(false), specifies whether matrix P must be automatically renormalized. Does not modify the original P and allocates a new one for the renormalized version. If set to false the contingency matrix P must be normalized by hand, otherwise the result of related calculations might be wrong\n\n\n\n\n\n","category":"type"},{"location":"#library-prod","page":"Home","title":"Product API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The prod function defines an interface to compute a product between two probability distributions over the same variable. It accepts a strategy as its first argument, which defines how the prod function should behave and what results you can expect.","category":"page"},{"location":"","page":"Home","title":"Home","text":"prod(::UnspecifiedProd, left, right)\nBayesBase.default_prod_rule","category":"page"},{"location":"#Base.prod-Tuple{BayesBase.UnspecifiedProd, Any, Any}","page":"Home","title":"Base.prod","text":"prod(strategy, left, right)\n\nprod function is used to find a product of two probability distributions (or any other objects) over same variable (e.g. 𝓝(x|μ1, σ1) × 𝓝(x|μ2, σ2)). There are multiple strategies for prod function, e.g. ClosedProd, GenericProd or PreserveTypeProd.\n\nSee also: default_prod_rule, ClosedProd, PreserveTypeProd, GenericProd\n\n\n\n\n\n","category":"method"},{"location":"#BayesBase.default_prod_rule","page":"Home","title":"BayesBase.default_prod_rule","text":"default_prod_rule(::Type, ::Type)\n\nReturns the most suitable prod rule for two given distribution types. Returns UnspecifiedProd by default.\n\nSee also: prod, ClosedProd, GenericProd\n\n\n\n\n\n","category":"function"},{"location":"#library-prod-strategies","page":"Home","title":"Product strategies","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For certain distributions, it's possible to compute the product using a straightforward mathematical equation, yielding a closed-form solution.  However, for some distributions, finding a closed-form solution might not be feasible.  Various strategies ensure consistent behavior in these situations.  These strategies can either guarantee a fast and closed-form solution or, when necessary, fall back to a slower but more generic method.","category":"page"},{"location":"","page":"Home","title":"Home","text":"BayesBase.UnspecifiedProd\nBayesBase.ClosedProd\nBayesBase.PreserveTypeProd\nBayesBase.PreserveTypeLeftProd\nBayesBase.PreserveTypeRightProd\nBayesBase.GenericProd\nBayesBase.ProductOf\nBayesBase.LinearizedProductOf\nBayesBase.TerminalProdArgument\nBayesBase.resolve_prod_strategy","category":"page"},{"location":"#BayesBase.UnspecifiedProd","page":"Home","title":"BayesBase.UnspecifiedProd","text":"UnspecifiedProd\n\nA strategy for the prod function, which does not compute the prod, but instead fails in run-time and prints a descriptive error message.\n\nSee also: prod, ClosedProd, GenericProd\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.ClosedProd","page":"Home","title":"BayesBase.ClosedProd","text":"ClosedProd\n\nClosedProd is one of the strategies for prod function. For example, if both inputs are of type Distribution, then ClosedProd would fallback to PreserveTypeProd(Distribution).\n\nSee also: prod, PreserveTypeProd, GenericProd\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.PreserveTypeProd","page":"Home","title":"BayesBase.PreserveTypeProd","text":"PreserveTypeProd{T}\n\nPreserveTypeProd is one of the strategies for prod function. This strategy constraint an output of a prod to be in some specific form. By default it uses the strategy from default_prod_rule and converts the output to the prespecified type but can be overwritten  for some distributions for better performance.\n\nSee also: prod, ClosedProd, PreserveTypeLeftProd, PreserveTypeRightProd, GenericProd\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.PreserveTypeLeftProd","page":"Home","title":"BayesBase.PreserveTypeLeftProd","text":"PreserveTypeLeftProd\n\nAn alias for the PreserveTypeProd(L) where L is the type of the left argument of the prod function.\n\nSee also: prod, PreserveTypeProd, PreserveTypeRightProd, GenericProd\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.PreserveTypeRightProd","page":"Home","title":"BayesBase.PreserveTypeRightProd","text":"PreserveTypeRightProd\n\nAn alias for the PreserveTypeProd(R) where R is the type of the right argument of the prod function.    \n\nSee also: prod, PreserveTypeProd, PreserveTypeLeftProd, GenericProd\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.GenericProd","page":"Home","title":"BayesBase.GenericProd","text":"GenericProd\n\nGenericProd is one of the strategies for prod function. This strategy does always produces a result,  even if the closed form product is not availble, in which case simply returns the ProductOf object. GenericProd sometimes  fallbacks to the default_prod_rule which it may or may not use under some circumstances.  For example if the default_prod_rule is ClosedProd - GenericProd will try to optimize the tree with  analytical closed solutions (if possible).\n\nSee also: prod, ProductOf, ClosedProd, PreserveTypeProd, default_prod_rule\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.ProductOf","page":"Home","title":"BayesBase.ProductOf","text":"ProductOf\n\nA generic structure representing a product of two distributions.  Can be viewed as a tuple of (left, right).  Does not check nor supports neither variate forms during the creation stage. Uses the fuse_support function to fuse supports of two different distributions.\n\nThis object does not define any statistical properties (such as mean or var etc) and cannot be used as a distribution explicitly. Instead, it must be further approximated as a member of some other distribution. \n\nSee also: prod, GenericProd, fuse_supports\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.LinearizedProductOf","page":"Home","title":"BayesBase.LinearizedProductOf","text":"LinearizedProductOf\n\nAn efficient linearized implementation of product of multiple distributions. This structure prevents ProductOf tree from growing too much in case of identical objects.  This trick significantly reduces Julia compilation times when closed product rules are not available but distributions are of the same type. Essentially this structure linearizes leaves of the ProductOf tree in case if it sees objects of the same type (via dispatch).\n\nSee also: ProductOf, [GenericProd]\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.TerminalProdArgument","page":"Home","title":"BayesBase.TerminalProdArgument","text":"TerminalProdArgument(argument)\n\nTerminalProdArgument is a specialized wrapper structure. When used as an argument to the prod function, it returns itself without considering any product strategy  and does not perform any safety checks (e.g. variate_form or support). Attempting to calculate the product of two instances of TerminalProdArgument will raise an error.  Use .argument field to get the underlying wrapped argument.\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.resolve_prod_strategy","page":"Home","title":"BayesBase.resolve_prod_strategy","text":"resolve_prod_strategy(left, right)\n\nGiven two strategies, this function returns the one with higher priority, if possible.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"These strategies offer flexibility and reliability when working with different types of distributions, ensuring that the package can handle a wide range of cases effectively.","category":"page"},{"location":"#library-promotion-utilities","page":"Home","title":"Promotion type utilities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BayesBase.deep_eltype\nBayesBase.isequal_typeof\nBayesBase.paramfloattype\nBayesBase.sampletype\nBayesBase.samplefloattype\nBayesBase.promote_variate_type\nBayesBase.promote_paramfloattype\nBayesBase.promote_sampletype\nBayesBase.promote_samplefloattype\nBayesBase.convert_paramfloattype","category":"page"},{"location":"#BayesBase.deep_eltype","page":"Home","title":"BayesBase.deep_eltype","text":"deep_eltype(T)\n\nReturns:\n\ndeep_eltype of T if T is an AbstractArray container\nT otherwise\n\njulia> deep_eltype(Float64)\nFloat64\n\njulia> deep_eltype(Vector{Float64})\nFloat64\n\njulia> deep_eltype(Vector{Matrix{Vector{Float64}}})\nFloat64\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.isequal_typeof","page":"Home","title":"BayesBase.isequal_typeof","text":"isequal_typeof(left, right)\n\nAlias for typeof(left) === typeof(right), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.paramfloattype","page":"Home","title":"BayesBase.paramfloattype","text":"paramfloattype(distribution)\n\nReturns the underlying float type of distribution's parameters.\n\nSee also: promote_paramfloattype, convert_paramfloattype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.sampletype","page":"Home","title":"BayesBase.sampletype","text":"sampletype(distribution)\n\nReturns a type of the distribution. By default fallbacks to the eltype.\n\nSee also: samplefloattype, promote_sampletype, promote_samplefloattype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.samplefloattype","page":"Home","title":"BayesBase.samplefloattype","text":"samplefloattype(distribution)\n\nReturns a type of the distribution or the underlying float type in case if sample is Multivariate or Matrixvariate.  By default fallbacks to the deep_eltype(sampletype(distribution)).\n\nSee also: sampletype, promote_sampletype, promote_samplefloattype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.promote_variate_type","page":"Home","title":"BayesBase.promote_variate_type","text":"promote_variate_type(::Type{ <: VariateForm }, distribution_type)\n\nPromotes (if possible) a distribution_type to be of the specified variate form.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.promote_paramfloattype","page":"Home","title":"BayesBase.promote_paramfloattype","text":"promote_paramfloattype(distributions...)\n\nPromotes paramfloattype of the distributions to a single type. See also promote_type.\n\nSee also: paramfloattype, convert_paramfloattype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.promote_sampletype","page":"Home","title":"BayesBase.promote_sampletype","text":"promote_sampletype(distributions...)\n\nPromotes sampletype of the distributions to a single type. See also promote_type.\n\nSee also: sampletype, samplefloattype, promote_samplefloattype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.promote_samplefloattype","page":"Home","title":"BayesBase.promote_samplefloattype","text":"promote_samplefloattype(distributions...)\n\nPromotes samplefloattype of the distributions to a single type. See also promote_type.\n\nSee also: sampletype, samplefloattype, promote_sampletype\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.convert_paramfloattype","page":"Home","title":"BayesBase.convert_paramfloattype","text":"convert_paramfloattype(::Type{T}, distribution)\n\nConverts (if possible) the params float type of the distribution to be of type T.\n\nSee also: paramfloattype, promote_paramfloattype\n\n\n\n\n\nconvert_paramfloattype(::Type{T}, container)\n\nConverts (if possible) the elements of the container to be of type T.\n\n\n\n\n\n","category":"function"},{"location":"#library-statsfuns","page":"Home","title":"Extra stats functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BayesBase.mirrorlog\nBayesBase.xtlog\nBayesBase.logmvbeta\nBayesBase.clamplog\nBayesBase.mvtrigamma\nBayesBase.dtanh\nBayesBase.probvec\nBayesBase.mean_std\nBayesBase.mean_var\nBayesBase.mean_cov\nBayesBase.mean_invcov\nBayesBase.mean_precision\nBayesBase.weightedmean\nBayesBase.weightedmean_std\nBayesBase.weightedmean_var\nBayesBase.weightedmean_cov\nBayesBase.weightedmean_invcov","category":"page"},{"location":"#BayesBase.mirrorlog","page":"Home","title":"BayesBase.mirrorlog","text":"mirrorlog(x)\n\nReturns log(1 - x).\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.xtlog","page":"Home","title":"BayesBase.xtlog","text":"xtlog(x)\n\nReturns x * log(x).\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.logmvbeta","page":"Home","title":"BayesBase.logmvbeta","text":"logmvbeta(x)\n\nUses the numerically stable algorithm to compute the logarithm of the multivariate beta distribution over with the parameter vector x.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.clamplog","page":"Home","title":"BayesBase.clamplog","text":"clamplog(x)\n\nSame as log but clamps the input argument x to be in the range tiny <= x <= typemax(x) such that log(0) does not explode.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mvtrigamma","page":"Home","title":"BayesBase.mvtrigamma","text":"mvtrigamma(p, x)\n\nComputes multivariate trigamma function .\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.dtanh","page":"Home","title":"BayesBase.dtanh","text":"dtanh(x)\n\nAlias for 1 - tanh(x) ^ 2\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.probvec","page":"Home","title":"BayesBase.probvec","text":"probvec(d)\n\nReturns the probability vector of the given distribution.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mean_std","page":"Home","title":"BayesBase.mean_std","text":"Alias for (mean(d), std(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mean_var","page":"Home","title":"BayesBase.mean_var","text":"Alias for (mean(d), var(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mean_cov","page":"Home","title":"BayesBase.mean_cov","text":"Alias for (mean(d), cov(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mean_invcov","page":"Home","title":"BayesBase.mean_invcov","text":"Alias for (mean(d), invcov(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.mean_precision","page":"Home","title":"BayesBase.mean_precision","text":"Alias for mean_invcov(d), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.weightedmean","page":"Home","title":"BayesBase.weightedmean","text":"weightedmean(d)\n\nReturns the weighted mean of the given distribution.  Alias to invcov(d) * mean(d), but can be specialized\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.weightedmean_std","page":"Home","title":"BayesBase.weightedmean_std","text":"Alias for (weightedmean(d), std(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.weightedmean_var","page":"Home","title":"BayesBase.weightedmean_var","text":"Alias for (weightedmean(d), var(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.weightedmean_cov","page":"Home","title":"BayesBase.weightedmean_cov","text":"Alias for (weightedmean(d), cov(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.weightedmean_invcov","page":"Home","title":"BayesBase.weightedmean_invcov","text":"Alias for weightedmean_invcov(d), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#library-helpers","page":"Home","title":"Helper utilities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BayesBase.vague\nBayesBase.logpdf_sampling_optimized\nBayesBase.logpdf_optimized\nBayesBase.sampling_optimized\nBayesBase.fuse_supports\nBayesBase.UnspecifiedDomain\nBayesBase.UnspecifiedDimension\nBayesBase.distribution_typewrapper\nBayesBase.CountingReal\nBayesBase.Infinity\nBayesBase.MinusInfinity","category":"page"},{"location":"#BayesBase.vague","page":"Home","title":"BayesBase.vague","text":"vague(distribution_type, [ dims... ])\n\nReturns uninformative probability distribution of the given type.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.logpdf_sampling_optimized","page":"Home","title":"BayesBase.logpdf_sampling_optimized","text":"logpdf_sampling_optimized(d)\n\nlogpdf_sample_optimized function takes as an input a distribution d and returns corresponding optimized two versions  for taking logpdf() and sampling with rand! respectively. Alias for (logpdf_optimized(d), sampling_optimized(d)), but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.logpdf_optimized","page":"Home","title":"BayesBase.logpdf_optimized","text":"logpdf_optimized(d)\n\nReturns a version of d specifically optimized to call logpdf(d, x). By default returns the same d, but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.sampling_optimized","page":"Home","title":"BayesBase.sampling_optimized","text":"sampling_optimized(d)\n\nReturns a version of d specifically optimized to call rand and rand!. By default returns the same d, but can be specialized.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.fuse_supports","page":"Home","title":"BayesBase.fuse_supports","text":"fuse_supports(left, right)\n\nFuses supports left and right. By default, checks that the inputs are identical and throws an error otherwise. Can implement specific fusions for specific supports.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.UnspecifiedDomain","page":"Home","title":"BayesBase.UnspecifiedDomain","text":"Unknown domain that is used as a placeholder when exact domain knowledge is unavailable\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.UnspecifiedDimension","page":"Home","title":"BayesBase.UnspecifiedDimension","text":"Unknown dimension is equal and not equal to any number\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.distribution_typewrapper","page":"Home","title":"BayesBase.distribution_typewrapper","text":"Strips type parameters from the type of the distribution.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.CountingReal","page":"Home","title":"BayesBase.CountingReal","text":"CountingReal\n\nCountingReal implements a real \"number\" that counts 'infinities' in a separate field. See also BayesBase.Infinity and BayesBase.MinusInfinity.\n\nArguments\n\nvalue::T: value of type <: Real\ninfinities::Int: number of added/subtracted infinities\n\njulia> r = BayesBase.CountingReal(0.0, 0)\nCountingReal{Float64}(0.0, 0)\n\njulia> float(r)\n0.0\n\njulia> r = r + BayesBase.Infinity(Float64)\nCountingReal{Float64}(0.0, 1)\n\njulia> float(r)\nInf\n\njulia> r = r + BayesBase.MinusInfinity(Float64)\nCountingReal{Float64}(0.0, 0)\n\njulia> float(r)\n0.0\n\n\n\n\n\n","category":"type"},{"location":"#BayesBase.Infinity","page":"Home","title":"BayesBase.Infinity","text":"An object representing infinity.\n\n\n\n\n\n","category":"function"},{"location":"#BayesBase.MinusInfinity","page":"Home","title":"BayesBase.MinusInfinity","text":"An object representing minus infinity.\n\n\n\n\n\n","category":"function"}]
}
