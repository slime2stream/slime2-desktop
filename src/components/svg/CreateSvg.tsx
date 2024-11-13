import { memo } from 'react';

export default memo(function CreateSvg({ className }: Props.WithClassName) {
	return (
		<div className={className}>
			<svg viewBox='0 0 122.88 122.88' fill='currentColor'>
				<path
					fillRule='evenodd'
					d='M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM93.79,55.21V67.66a4.63,4.63,0,0,1-4.62,4.62H72.28V89.17a4.63,4.63,0,0,1-4.62,4.62H55.21a4.63,4.63,0,0,1-4.61-4.62V72.28H33.7a4.63,4.63,0,0,1-4.61-4.62V55.21A4.63,4.63,0,0,1,33.7,50.6H50.6V33.7a4.63,4.63,0,0,1,4.61-4.61H67.66a4.63,4.63,0,0,1,4.62,4.61V50.6H89.17a4.63,4.63,0,0,1,4.62,4.61Z'
				/>
			</svg>
		</div>
	);
});