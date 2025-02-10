import { BarChart, Download, Layers, Smartphone, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Contributor {
	login: string
	avatar_url: string
	html_url: string
	contributions: number
}
const ContributorsSection = () => {
	const [contributors, setContributors] = useState<Contributor[]>([])
	const [isLoading, setIsLoading] = useState(true)

	const repositories = [
		'https://api.github.com/repos/widgetify-app/widgetify-pwa/contributors',
		'https://api.github.com/repos/sajjadmrx/btime-desktop/contributors',
	]

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				const contributorsData = await Promise.all(
					repositories.map(async (url) => {
						const response = await fetch(url)
						return response.json()
					}),
				)

				const uniqueContributors = Array.from(
					new Map(contributorsData.flat().map((c) => [c.login, c])).values(),
				).sort((a, b) => b.contributions - a.contributions)

				setContributors(uniqueContributors)
				setIsLoading(false)
			} catch (error) {
				console.error('Error fetching contributors:', error)
				setIsLoading(false)
			}
		}

		fetchContributors()
	}, [])

	if (isLoading) {
		return <div className="py-8 text-center">در حال بارگذاری مشارکت‌کنندگان...</div>
	}

	return (
		<section className="container px-4 py-16 mx-auto">
			<div
				className="flex flex-col items-center justify-center pb-1 mb-12 border-b border-gray-300"
				dir="rtl"
			>
				<h2 className="text-3xl font-bold text-center">مشارکت‌کنندگان</h2>
				<p className="text-sm text-gray-500">شما هم میتونید به بهبود ویجتیفای کمک کنید</p>
			</div>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
				{contributors.map((contributor) => (
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
		</section>
	)
}

const WidgetifyLandingPage = () => {
	return (
		<div className="min-h-screen text-gray-900 bg-gray-50">
			<header className="px-4 py-16 text-center text-white bg-gradient-to-br from-blue-500 to-purple-600">
				<h1 className="mb-4 text-4xl font-bold md:text-6xl">ویجتیفای</h1>
				<p className="mb-8 text-xl md:text-2xl">
					ویجت‌های هوشمند و کاربردی برای دسکتاپ و وب شما
				</p>

				<div className="flex justify-center space-x-4 rtl:space-x-reverse">
					<a
						href="https://github.com/sajjadmrx/btime-desktop"
						target="_blank"
						className="flex items-center gap-2 px-6 py-3 text-blue-600 transition bg-white rounded-lg hover:bg-blue-100"
						rel="noreferrer"
					>
						<Download /> نصب نسخه دسکتاپ
					</a>

					<a
						href="https://app.widgetify.ir"
						target="_blank"
						className="flex items-center gap-2 px-6 py-3 text-white transition bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600"
						rel="noreferrer"
					>
						<Smartphone /> نسخه وب
					</a>
				</div>
			</header>

			<section className="container px-4 py-16 mx-auto">
				<h2 className="mb-12 text-3xl font-bold text-center">چرا ویجتیفای؟</h2>

				<div className="grid gap-8 md:grid-cols-3">
					<div className="p-6 text-center bg-white rounded-lg shadow-md">
						<Layers className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="mb-2 text-xl font-semibold">چندین پلتفرم</h3>
						<p>اجرا در ویندوز، لینوکس، مک و مرورگرهای مختلف</p>
					</div>

					<div className="p-6 text-center bg-white rounded-lg shadow-md">
						<BarChart className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="mb-2 text-xl font-semibold">ویجت‌های متنوع</h3>
						<p>از ارز و هواشناسی تا تقویم و ساعت جهانی</p>
					</div>

					<div className="p-6 text-center bg-white rounded-lg shadow-md">
						<Zap className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="mb-2 text-xl font-semibold">سفارشی‌سازی</h3>
						<p>تنظیم و شخصی‌سازی آسان ویجت‌ها</p>
					</div>
				</div>
			</section>

			<ContributorsSection />

			<footer className="py-8 text-center text-white bg-gray-800">
				<p>© {new Date().getFullYear()} ویجتیفای. تمامی حقوق محفوظ است.</p>
			</footer>
		</div>
	)
}

export default WidgetifyLandingPage
