import { Download, Smartphone, CheckCircle2 } from 'lucide-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContributorsSection from './contributors'

const queryClient = new QueryClient()

const features = [
	'اجرا در ویندوز، لینوکس، مک و مرورگرهای مختلف',
	'ویجت‌های متنوع از ارز و هواشناسی تا تقویم و ساعت جهانی',
	'تنظیم و شخصی‌سازی آسان ویجت‌ها',
]

const WidgetifyLandingPage = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen text-gray-900 bg-gray-50">
				<header className="px-4 py-16 text-center text-white bg-gradient-to-br from-blue-500 to-purple-600">
					<h1 className="mb-4 text-4xl font-bold md:text-6xl">ویجتیفای</h1>
					<p className="mb-8 text-xl md:text-2xl">
						ویجت‌های هوشمند و کاربردی برای دسکتاپ و وب شما
					</p>

					<div className="flex flex-col items-center justify-center gap-2 md:flex-row space-x-4 space-x-reverse">
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
							className="flex items-center gap-2 px-6 py-3 text-white transition border-2 border-white rounded-lg hover:bg-white hover:text-blue-600"
							rel="noreferrer"
						>
							<Smartphone /> نسخه وب
						</a>
					</div>
				</header>

				{/* Why Choose Us */}
				<section className="py-12 sm:py-20 bg-white text-right">
					<div className="container mx-auto px-4 sm:px-6">
						<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
							چرا ویجتیفای را انتخاب کنیم؟
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex flex-row-reverse items-center gap-4 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
								>
									<CheckCircle2 className="text-purple-600 flex-shrink-0" />
									<span className="text-base sm:text-lg">{feature}</span>
								</div>
							))}
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