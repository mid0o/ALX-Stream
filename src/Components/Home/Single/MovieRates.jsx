import React, { useState } from "react";
import Titles from "../../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../../UsedInputs";
import Rating from "../../Rating";
import { UserData } from "../../../Data/MovieData";

const MovieRates = ({ movie }) => {
  const Ratings = [
    { title: "0 - poor", value: 0 },
    { title: "1 - fair", value: 1 },
    { title: "2 - Good", value: 2 },
    { title: "3 - very Good", value: 3 },
    { title: "4 - Excellent", value: 4 },
    { title: "5 - Masterpiece", value: 5 },
  ];

  const [rating, setRating] = useState(0);

  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-text font-semibold">
            Review "{movie.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be posted on this page. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
          <div className="text-sm w-full">
            <Select
              label="Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
            <Message
              label="Message"
              placeholder="Make it short and sweet ..."
            />
            <button className="bg-subMain mt-6 text-white py-3 w-full flex-colo rounded">
              Submit
            </button>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-text font-semibold">Reviews (56)</h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            {UserData.map((user, i) => (
              <div
                key={i}
                className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-gradient-to-r p-4 border border-gray-800 rounded-lg"
              >
                <div className="col-span-2 hidden md:block">
                  <img
                    src={`../${user.image}`}
                    alt={user.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{user.name}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis ad laborum hic ex unde. Quia distinctio enim
                    explicabo itaque, labore quam dolore assumenda recusandae
                    sequi fugit quidem temporibus placeat dicta.
                  </p>
                </div>
                <div className="col-span-3 flex-rows border-l text-xs border-border gap-1 text-star">
                  <Rating value={3} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRates;
