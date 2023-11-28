import React from "react";
import "./Reviews.css";
import SectionHeading from "../Common/SectionHeading";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsStar, BsStarFill } from "react-icons/bs";

const Reviews = () => {
	return (
		<section className="reviews-section">
			<SectionHeading
				title="We Love Compliments!"
				subtitle="Trusted By over a million happy customers. Here's the proof."
			/>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide>
					<div className="review-card">
						<div className=" review-img">
							<img
								src="https://as2.ftcdn.net/v2/jpg/04/31/53/49/1000_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg"
								alt=""
							/>
						</div>
						<div className="review-user">
							<span className="name">Nikhil Tiwari</span>
							<span className="city">Noida</span>
						</div>
						<div className="rating">
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStar />
							<BsStar />
						</div>
						<div className="review-desc">
							<p>
								I recently travelled with with know your bus and
								the ecperience was quite good. The timimgs were
								perfect and i would like to travel with them
								again.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="review-card">
						<div className=" review-img">
							<img
								src="https://as2.ftcdn.net/v2/jpg/04/31/53/49/1000_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg"
								alt=""
							/>
						</div>
						<div className="review-user">
							<span className="name">Kashish Kumar Singh</span>
							<span className="city">Jaipur</span>
						</div>
						<div className="rating">
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
						</div>
						<div className="review-desc">
							<p>
								There is a good driver intraveller name Mr.
								Neeraj Kumar. He is speaking in polightly
								way.this place is very beautiful.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="review-card">
						<div className=" review-img">
							<img
								src="https://as2.ftcdn.net/v2/jpg/04/31/53/49/1000_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg"
								alt=""
							/>
						</div>
						<div className="review-user">
							<span className="name">Ananya Tomar</span>
							<span className="city">Noida</span>
						</div>
						<div className="rating">
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStar />
							<BsStar />
						</div>
						<div className="review-desc">
							<p>
								The trip was awesome and much better part in
								this trip is played by my tempo travelers. The
								trip can not be enjoyed if you can't travel
								comfortably. The seats were much comfortable,
								the bus was clean and the driver was well
								versed.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="review-card">
						<div className=" review-img">
							<img
								src="https://as2.ftcdn.net/v2/jpg/04/31/53/49/1000_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg"
								alt=""
							/>
						</div>
						<div className="review-user">
							<span className="name">Himanshu Chauhan</span>
							<span className="city">Noida</span>
						</div>
						<div className="rating">
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStar />
						</div>
						<div className="review-desc">
							<p>
								I recently travelled with with know your bus and
								the ecperience was quite good. The trip was
								awesome and much better part in this trip is
								played by my tempo travelers. The trip can not
								be enjoyed if you can't travel comfortably. The
								seats were much comfortable, the bus was clean
								and the driver was well versed.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
export default Reviews;
