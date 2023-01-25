import clsx from 'clsx';
import React from 'react';

type FeatureListProps = {
	list: Array<{
		icon: string;
		text: string;
	}>;
};

export default function FeatureList({ list }: FeatureListProps) {
	const styles =
		'flex gap-5 text-[17px] leading-6 text-black/[.87] mb-[8.98px]';

	return (
		<ul>
			{list.map(({ icon, text }, idx) => (
				<li
					className={clsx(styles, `before:content-[url('${icon}')]`)}
					key={idx}
				>
					{text}
				</li>
			))}
		</ul>
	);
}
