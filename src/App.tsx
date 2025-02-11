import { BarChart, Download, Layers, Smartphone, Zap } from 'lucide-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ContributorsSection from './contributors'
const queryClient = new QueryClient()

const WidgetifyLandingPage = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen text-gray-900 bg-gray-50">
				<header className="px-4 py-16 text-center text-white bg-gradient-to-br from-blue-500 to-purple-600">
					<h1 className="mb-4 text-4xl font-bold md:text-6xl">ویجتیفای</h1>
					<p className="mb-8 text-xl md:text-2xl">
						ویجت‌های هوشمند و کاربردی برای دسکتاپ و وب شما
					</p>

					<div className="flex flex-col items-center justify-center gap-1 space-x-4 md:flex-row rtl:space-x-reverse">
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
		</QueryClientProvider>
	)
}

export default WidgetifyLandingPage