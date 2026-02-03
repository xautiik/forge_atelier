import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Career = () => {
	return (
		<section className='agency bg-top'>
			<div className='container'>
				<div className='heading-title'>
					<TitleSm title='CAREERS' />
					<br />
					<br />
					<Title title='Join the Forge Atelier team' />
					<p>
						We are always looking for builders, designers, and problem-solvers who enjoy collaborating on
						ambitious products. Share your portfolio and a short note about what you want to create next.
					</p>
				</div>
				<div className='card'>
					<p>
						Email careers@forgeatelier.com with your CV, links to recent work, and the kind of problems you want to
						tackle. We review every application and will reach out if there is a fit.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Career
