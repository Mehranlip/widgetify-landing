import { useQuery } from 'react-query'

interface Contributor {
	login: string
	avatar_url: string
	html_url: string
	contributions: number
}

const fetchContributors = async () => {
	const repositories = [
		'https://api.github.com/repos/widgetify-app/widgetify-pwa/contributors',
		'https://api.github.com/repos/sajjadmrx/btime-desktop/contributors',
	]

	const contributorsData = await Promise.all(
		repositories.map(async (url) => {
			const response = await fetch(url)
			const json = await response.json()
			if (!response.ok) {
				if (
					response.status === 403 &&
					response.headers.get('X-RateLimit-Remaining') === '0'
				) {
					throw new Error('Rate limit exceeded')
				}
				throw new Error(json.message || 'خطایی رخ داد')
			}
			return json
		}),
	)

	const uniqueContributors = Array.from(
		new Map(contributorsData.flat().map((c) => [c.login, c])).values(),
	).sort((a, b) => b.contributions - a.contributions)

	return uniqueContributors
}

const ContributorsSection = () => {
	const {
		data: contributors,
		isLoading,
		error,
	} = useQuery('contributors', fetchContributors)
	console.log(contributors)

	if (isLoading) {
		return <div className="py-8 text-center">در حال بارگذاری مشارکت‌کنندگان...</div>
	}

	return (
		<section className="container px-4 py-16 mx-auto">
			<div className="flex flex-col items-center justify-center pb-1 mb-12 border-b border-gray-300">
				<h2 className="text-3xl font-bold text-center">مشارکت‌کنندگان</h2>
				<p className="text-sm text-gray-500">شما هم میتونید به بهبود ویجتیفای کمک کنید</p>
			</div>

			{contributors?.length ? (
				<div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
					{contributors.map((contributor: Contributor) => (
						<a
							key={contributor.login}
							href={contributor.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center transition-transform hover:scale-105"
						>
							<img
								src={contributor.avatar_url}
								alt={contributor.login}
								className="object-cover w-24 h-24 mb-2 rounded-full shadow-md"
							/>
							<p className="font-medium text-center">{contributor.login}</p>
						</a>
					))}
				</div>
			) : (
				<div className="w-full py-8 text-center">
					<p>😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.</p>
					<p>لطفاً بعداً دوباره تلاش کنید.</p>
				</div>
			)}
		</section>
	)
}

export default ContributorsSection
