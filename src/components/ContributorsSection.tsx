import { useQuery } from '@tanstack/react-query'

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
		'https://api.github.com/repos/widgetify-app/widgetify-landing/contributors',
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

	const contributorMap = new Map()
	// biome-ignore lint/complexity/noForEach: <explanation>
	contributorsData.flat().forEach((contributor) => {
		if (contributorMap.has(contributor.login)) {
			const existing = contributorMap.get(contributor.login)
			existing.contributions += contributor.contributions
		} else {
			contributorMap.set(contributor.login, { ...contributor })
		}
	})

	const uniqueContributors = Array.from(contributorMap.values()).sort(
		(a, b) => b.contributions - a.contributions,
	)

	return uniqueContributors
}

export default function ContributorsSection() {
	const { data: contributors, isLoading } = useQuery({
		queryKey: ['contributors'],
		queryFn: fetchContributors,
	})

	return (
		<section className="space-y-6">
			<header>
				<h2 className="text-2xl font-medium">لیست مشارکت‌کنندگان</h2>
				<p className="font-light">شما هم میتونید به بهبود ویجتیفای کمک کنید</p>
			</header>

			{isLoading ? (
				<div className="text-center opacity-50">در حال بارگذاری مشارکت‌کنندگان...</div>
			) : contributors?.length ? (
				<div className="grid grid-cols-4 gap-1 md:grid-cols-6 lg:grid-cols-7">
					{contributors.map((contributor: Contributor) => (
						<a
							key={contributor.login}
							href={contributor.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center transition hover:opacity-85"
						>
							<img
								src={contributor.avatar_url}
								alt={contributor.login}
								className="object-cover w-10 h-10 mb-2 rounded-full shadow-md"
							/>
							<p className="w-24 text-sm text-center truncate">{contributor.login}</p>
						</a>
					))}
				</div>
			) : (
				<div className="w-full text-center opacity-50">
					<p>😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.</p>
					<p>لطفاً بعداً دوباره تلاش کنید.</p>
				</div>
			)}
		</section>
	)
}
