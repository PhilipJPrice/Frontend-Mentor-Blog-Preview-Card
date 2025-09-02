import React from 'react'
import './index.css'
import illustration from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

export function App() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<a href="#" className="w-84 bg-white rounded-xl p-5 border border-r-8 border-b-8 group">
				<img className="rounded-lg mb-5" src={illustration} alt="SVG Graphic of Notebook with HTML Tag" />
				<div className="banner w-fit rounded-sm px-2 py-1 mb-3">
					<p className="font-bold text-sm">Learning</p>
				</div>
				<p className="font-medium text-xs figtree mb-3">Published 21 Dec 2023</p>
				<h1 className="figtree font-bold text-xl mb-3 group-hover:text-yellow-300">HTML & CSS foundations</h1>
				<p className="figtree font-extralight text-sm mb-4">These languages are the backbone of every website, defining structure, content, and presentation.</p>
				<div className="flex flex-row items-center">
					<img src={avatar} alt="Image of Greg Hooper Profile Avatar" width="30" />
					<span className="figtree font-extrabold text-xs ml-3">Greg Hooper</span>
				</div>
			</a>
		</div>
	)
}
