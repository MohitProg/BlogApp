import React from "react";
import Heads from "./Heads";
import Item from "./Item";
import MiniItem from "./MiniItem";

const Section5 = () => {
    return (
        <>
            <section className="  mx-auto  w-3/4 mt-4 grid grid-cols-3 gap-2">

                {/* section 1 */}

                <Heads title="TECNOLOGY" size="col-span-3" />


                <div className="grid grid-cols-3 col-span-3 gap-10 ">
                    {/* <div className="bg-red-400">
                       
                    </div>
                    <div className="bg-red-400">2</div>

                    <div className="bg-red-400">3</div>
                    <div className="bg-red-400">4</div>

                    <div className="bg-red-400">5</div>
                    <div className="bg-red-400">6</div> */}



                    <Item img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                    <Item img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
                    <Item img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
                    <Item img="https://plus.unsplash.com/premium_photo-1687119905839-8b6f9ae2ca4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
                    <Item img="https://images.unsplash.com/photo-1530508943348-b8f606ea2bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" />
                    <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>

                {/* sectiuon 2 */}

                <div className="col-span-3  grid  gap-2 mt-3 grid-cols-2">
                    <Heads title="VIDEOS" size="col-span-3" />
                    <Item img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
                    <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>

                {/* section 3 */}

                <div className="  grid  gap-2 mt-3 grid-cols-4 col-span-3">
                    {/* <div className="bg-yellow-400">1</div>
                    <div className="bg-yellow-400">2</div>
                    <div className="bg-yellow-400">2</div> */}

                    <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                    <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                    <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>


                {/* section 4 */}



                <div className="  grid  gap-2 mt-3 grid-cols-3 col-span-3">

                    {/* internal section4 part 1 */}
                    <div className=" col-span-2 grid grid-cols-2 gap-2 p-1">
                        <Heads title="CODING" size="col-span-2" />
                   
                            <Item img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />

                  
                        <div className=" grid grid-cols-1 gap-2">
                            <MiniItem img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
                            <MiniItem  img="https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"/>
                            <MiniItem img="https://plus.unsplash.com/premium_photo-1680623400141-7e129b7c56d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8fDA%3D" />
                            <MiniItem img="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob25lfGVufDB8fDB8fHww" />
                            <MiniItem img="https://plus.unsplash.com/premium_photo-1678722935741-8e224ffea472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fHww" />

                        </div>
                    </div>

                    {/* internal section4 part 2 */}
                    <div className="bg-yellow-400 row-span-8 grid grid-col-1 gap-1 p-2">
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                        <div className="bg-white">
                            1
                        </div>
                    </div>

                    {/* internal section4 part 3 */}
                    <div className="bg-green-400 col-span-2 grid grid-cols-2 gap-2 p-1">
                        <div className="bg-gray-400">1</div>
                        <div className="bg-gray-400">2</div>
                        <div className="bg-gray-400">3</div>
                        <div className="bg-gray-400">4</div>
                    </div>

                    {/* internal section4 part 4 */}
                    <div className="bg-green-400 col-span-2 grid grid-cols-2 gap-2 p-1">
                        <div className="bg-gray-400">1</div>
                        <div className="bg-gray-400">2</div>
                    </div>
                    {/* internal section4 part 5 */}
                    <div className="bg-green-400 col-span-2 grid grid-cols-1 gap-1 p-1">
                        <div className="bg-gray-400">1</div>
                        <div className="bg-gray-400">2</div>
                    </div>
                    {/* internal section4 part 6 */}
                    <div className="bg-green-400 col-span-2 grid grid-cols-3 gap-2 p-1">
                        <div className="bg-gray-400">1</div>
                        <div className="bg-gray-400">2</div>
                        <div className="bg-gray-400">3</div>
                        <div className="bg-gray-400">4</div>
                    </div>

                </div>


                {/* section 5 */}

                <div className="col-span-3  grid grid-cols-4 gap-2">
                    <div className="bg-blue-300">
                        1
                    </div>
                    <div className="bg-blue-300">
                        2
                    </div>
                    <div className="bg-blue-300">
                        3
                    </div>
                    <div className="bg-blue-300">
                        4
                    </div>

                </div>
            </section>
        </>
    );
};

export default Section5;
