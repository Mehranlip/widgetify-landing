import { FaCheckCircle, FaDiscord, FaDownload, FaTelegram } from 'react-icons/fa'
import { LuSmartphone } from 'react-icons/lu'
import ContributorsSection from './contributors'

const features = [
	'اجرا در ویندوز، لینوکس، مک و مرورگرهای مختلف',
	'متن باز برای توسعه و امکانات نامحدود',
	'ویجت‌های متنوع از ارز و هواشناسی تا تقویم و ساعت جهانی',
	'تنظیم و شخصی‌سازی آسان ویجت‌ها',
]

const WidgetifyLandingPage = () => {
	return (
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
						<FaDownload /> نصب نسخه دسکتاپ
					</a>

					<a
						href="https://app.widgetify.ir"
						target="_blank"
						className="flex items-center gap-2 px-6 py-3 text-white transition bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600"
						rel="noreferrer"
					>
						<LuSmartphone /> نسخه وب
					</a>
				</div>
			</header>

			{/* Why Choose Us */}
			<section className="py-12 text-right bg-white sm:py-20">
				<div className="container px-4 mx-auto sm:px-6">
					<h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl sm:mb-12">
						چرا ویجتیفای را انتخاب کنیم؟
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex flex-row-reverse items-center gap-4 p-4 transition-all border border-gray-200 rounded-lg sm:p-6 hover:shadow-lg"
							>
								<FaCheckCircle className="flex-shrink-0 text-purple-600" />
								<span className="text-base sm:text-lg">{feature}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<ContributorsSection />

			{/* Footer */}
			<footer className="py-8 text-right text-white bg-gray-900 sm:py-12">
				<div className="container px-4 mx-auto sm:px-6">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div>
							<h3 className="mb-4 text-lg font-bold sm:text-xl">ویجتیفای</h3>
							<p className="text-gray-400">راهکار هوشمند مدیریت ویجت‌ها</p>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-bold sm:text-xl">تماس با ما</h3>
							<div className="flex gap-1">
								<a
									href="https://discord.gg/p9TZzEV39e"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-full hover:bg-gray-700"
								>
									<FaDiscord size={25} />
								</a>
								<a
									href="http://t.me/widgetify"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-full hover:bg-gray-700"
								>
									<FaTelegram size={25} />
								</a>
							</div>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-bold sm:text-xl">لینک‌های مفید</h3>
							<ul className="space-y-4 text-gray-400 rtl:space-y-reverse">
								<li className="hover:text-blue-200">
									<a
										href="http://app.widgetify.ir"
										target="_blank"
										rel="noopener noreferrer"
									>
										نسخه وب (PWA)
									</a>
								</li>
								<li className="hover:text-blue-200">
									<a
										href="http://app.widgetify.ir"
										target="_blank"
										rel="noopener noreferrer"
									>
										نسخه دسکتاپ (ویندوز، لینوکس، مک)
									</a>
								</li>
								<li>اندروید (به زودی)</li>
							</ul>
						</div>
					</div>
					<div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
						<p>© تمامی حقوق برای ویجتیفای محفوظ است</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default WidgetifyLandingPage
