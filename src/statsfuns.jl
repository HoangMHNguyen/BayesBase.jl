export mirrorlog,
    xtlog,
    logmvbeta,
    clamplog,
    mvtrigamma,
    vague,
    probvec,
    weightedmean,
    mean_cov,
    mean_var,
    mean_std,
    mean_invcov,
    weightedmean_cov,
    weightedmean_var,
    weightedmean_std,
    weightedmean_invcov,
    weightedmean_precision,
    logpdf_sampling_optimized,
    logpdf_optimized,
    sampling_optimized,
    components,
    component,
    distribution_typewrapper

"""
    mirrorlog(x)

Returns `log(1 - x)`.
"""
mirrorlog(x) = log(one(x) - x)

"""
    xtlog(x)

Returns `x * log(x)`.
"""
xtlog(x) = x * log(x)

"""
    clamplog(x)

Same as `log` but clamps the input argument `x` to be in the range `tiny <= x <= typemax(x)` such that `log(0)` does not explode.
"""
clamplog(x) = log(clamp(x, tiny, typemax(x)))

"""
    logmvbeta(x)

Uses the numerically stable algorithm to compute the logarithm of the multivariate beta distribution over with the parameter vector x.
"""
logmvbeta(x) = sum(loggamma, x) - loggamma(sum(x))

"""
    mvtrigamma(p, x)

Computes multivariate trigamma function .
"""
mvtrigamma(p, x) = sum(trigamma(x + (one(x) - i) / 2) for i in 1:p)

"""
    vague(distribution_type, [ dims... ])

Returns uninformative probability distribution of the given type.
"""
function vague end

function compute_logscale end

"""
    probvec(d)

Returns the probability vector of the given distribution.
"""
function probvec end

"""
    weightedmean(d)

Returns the weighted mean of the given distribution. 
Alias to `invcov(d) * mean(d)`, but can be specialized
"""
weightedmean(d) = invcov(d) * mean(d)

"""
Alias for `(mean(d), cov(d))`, but can be specialized.
"""
mean_cov(something) = (mean(something), cov(something))

"""
Alias for `(mean(d), var(d))`, but can be specialized.
"""
mean_var(something) = (mean(something), var(something))

"""
Alias for `(mean(d), std(d))`, but can be specialized.
"""
mean_std(something) = (mean(something), std(something))

"""
Alias for `(mean(d), invcov(d))`, but can be specialized.
"""
mean_invcov(something) = (mean(something), invcov(something))

"""
Alias for `mean_invcov(d)`, but can be specialized.
"""
mean_precision(something) = mean_invcov(something)

"""
Alias for `(weightedmean(d), cov(d))`, but can be specialized.
"""
weightedmean_cov(something) = (weightedmean(something), cov(something))

"""
Alias for `(weightedmean(d), var(d))`, but can be specialized.
"""
weightedmean_var(something) = (weightedmean(something), var(something))

"""
Alias for `(weightedmean(d), std(d))`, but can be specialized.
"""
weightedmean_std(something) = (weightedmean(something), std(something))

"""
Alias for `(weightedmean(d), invcov(d))`, but can be specialized.
"""

"""
Alias for `weightedmean_invcov(d)`, but can be specialized.
"""
weightedmean_invcov(something) = (weightedmean(something), invcov(something))
weightedmean_precision(something) = weightedmean_invcov(something)

"""
    logpdf_sampling_optimized(d) 
    
`logpdf_sample_optimized` function takes as an input a distribution `d` and returns corresponding optimized two versions 
for taking `logpdf()` and sampling with `rand!` respectively. Alias for `(logpdf_optimized(d), sampling_optimized(d))`, but can be specialized.
"""
function logpdf_sampling_optimized(something)
    return (logpdf_optimized(something), sampling_optimized(something))
end

"""
    logpdf_optimized(d)

Returns a version of `d` specifically optimized to call `logpdf(d, x)`. By default returns the same `d`, but can be specialized.
"""
logpdf_optimized(something) = something

"""
    sampling_optimized(d)

Returns a version of `d` specifically optimized to call `rand` and `rand!`. By default returns the same `d`, but can be specialized.
"""
sampling_optimized(something) = something

"""
    components(d)

Returns components of a distribution `d` (joint or a mixture).
"""
function components end

"""
    component(d, k)

Returns `k`-th component of a distribution `d` (joint or a mixture).
"""
function component end

"""
Strips type parameters from the type of the `distribution`.
"""
distribution_typewrapper(distribution) = generated_distribution_typewrapper(distribution)

# Returns a wrapper distribution for a `<:Distribution` type, this function uses internals of Julia 
# It is not ideal, but is fine for now, if Julia changes it internals such that does not work 
# We will need to write the `distribution_typewrapper` method for each support member of exponential family
# e.g. `distribution_typewrapper(::Bernoulli) = Bernoulli`
@generated function generated_distribution_typewrapper(distribution)
    return Base.typename(distribution).wrapper
end