<?php

namespace App\Http\Controllers;

use App\Order;
use App\Order_Details;
use App\Product;
use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();

        DB::transaction(function () use ($request) {
            $order = new Order;
            $order->order_name = $request->customer_name;
            // $order->phone = $request->customer_phone;
            $order->save();
            $order_id = $order->id;

            //     protected $fillable = ['order_id', 'product_id', 'quantity', 'unit_price', 'amount', 'discount'];

            for ($product_id = 0; $product_id < count($request->product_id); $product_id++) {
                $order_detail = new Order_Details;
                $order_detail->order_id = $order_id;
                $order_detail->product_id = $request->product_id[$product_id];
                $order_detail->quantity = $request->quantity[$product_id];
                $order_detail->unit_price = $request->unit_price[$product_id];
                $order_detail->amount = $request->amount[$product_id];
                $order_detail->discount = $request->discount[$product_id];

                $order_detail->save();
            }

            // $transaction = new Transaction;
            // $transaction->order_id = $order_id;
            // $transaction->user_id = $request->customer_id;
            // $transaction->balance = $request->balance;
            // $transaction->paid_amount = $request->paid_amount;
            // $transaction->payment_method = $request->payment_method;
            // $transaction->transaction_amount = $order_detail->amount;
            // $transaction->transaction_date = date('Y-m-d');
            // $transaction->save();

            $products = Product::all();
            $order_details = Order_Details::where('order_id', $order_id)->get();
            $orderBy = Order::where('id', $order_id)->get();
            return response()->json([
                'products' => $products,
                'order_details' => $order_details,
                'customer_orders' => $orderBy,
            ]);
        });

        return response()->json(['message' => 'Order was not created.'], 500);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
