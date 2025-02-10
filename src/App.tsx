// import React from 'react';
import { Github, Download, Globe, CheckCircle2 } from 'lucide-react';

function App() {
	const features = [
		"رابط کاربری زیبا و مدرن",
		"سرعت بالا در اجرا",
		"امنیت بالا",
		"پشتیبانی ۲۴/۷",
		"قابلیت شخصی‌سازی",
		"به‌روزرسانی‌های منظم"
	];

	const contributors = [
		{
		name: "کاربر",
		role: "توسعه‌دهنده ارشد",
		github: "",
		avatar: ""
		},
		{
		name: "کاربر",
		role: "توضیح",
		github: "",
		avatar: ""
		},
		{
		name: "کاربر",
		role: "توضیح",
		github: "",
		avatar: ""
		}
	];

	return (
		<div className="min-h-screen bg-gray-50 text-right" dir="rtl">
		{/* Header */}
		<header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
			<div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
			<nav className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-16 gap-4">
				<h1 className="text-2xl sm:text-3xl font-bold">ویجتیفای</h1>
				<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
				<button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
					<Download className="w-5 h-5" />
					<a href="#"><span>دانلود نسخه دسکتاپ</span></a>
				</button>
				<button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
					<Globe className="w-5 h-5" />
					<a href="#"><span>نسخه وب</span></a>
				</button>
				</div>
			</nav>
			
			<div className="text-center max-w-3xl mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">ویجتیفای : راهکار هوشمند مدیریت ویجت‌ها</h2>
				<p className="text-lg sm:text-xl text-gray-100">
				با ویجتیفای، مدیریت ویجت‌های خود را به سطح جدیدی ببرید
				</p>
			</div>
			</div>
		</header>

		{/* Why Choose Us */}
		<section className="py-12 sm:py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6">
			<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">چرا ویجتیفای را انتخاب کنیم؟</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{features.map((feature, index) => (
				<div key={index} className="flex items-center gap-4 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
					<CheckCircle2 className="text-purple-600 flex-shrink-0" />
					<span className="text-base sm:text-lg">{feature}</span>
				</div>
				))}
			</div>
			</div>
		</section>

		{/* Contributors */}
		<section className="py-12 sm:py-20 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6">
			<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">تیم ویجتیفای</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{contributors.map((contributor, index) => (
				<div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
					<img
					src={contributor.avatar}
					alt={contributor.name}
					className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover"
					/>
					<h3 className="text-lg sm:text-xl font-semibold mb-2">{contributor.name}</h3>
					<p className="text-gray-600 mb-4">{contributor.role}</p>
					<a
					href={contributor.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
					>
					<Github className="w-5 h-5" />
					پروفایل گیت‌هاب
					</a>
				</div>
				))}
			</div>
			</div>
		</section>

		{/* Footer */}
		<footer className="bg-gray-900 text-white py-8 sm:py-12">
			<div className="container mx-auto px-4 sm:px-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<div>
				<h3 className="text-lg sm:text-xl font-bold mb-4">ویجتیفای</h3>
				<p className="text-gray-400">راهکار هوشمند مدیریت ویجت‌ها</p>
				</div>
				<div>
				<h3 className="text-lg sm:text-xl font-bold mb-4">تماس با ما</h3>
				<p className="text-gray-400">توضیحات</p>
				</div>
				<div>
				<h3 className="text-lg sm:text-xl font-bold mb-4">لینک‌های مفید</h3>
				<ul className="space-y-2 text-gray-400">
					<li>توضیحات</li>
					<li>توضیحات</li>
					<li>توضیحات</li>
				</ul>
				</div>
			</div>
			<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
				<p>1403</p>
			</div>
			</div>
		</footer>
		</div>
	);
}

export default App;