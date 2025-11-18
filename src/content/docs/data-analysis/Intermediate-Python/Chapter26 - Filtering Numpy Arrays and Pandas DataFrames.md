- Review what happens when you use a comparison operator with Numpy Array
- NumPy logical_and(), logical_or(), and logical_not()
- Filtering Pandas DataFrames boils down to three steps, select the column/columns that you'll be using to help
  filter down the results of your DataFrame. Then perform a conditional or logical operations on said column/columns.
  You should now have a Pandas Series of Booleans, AKA a 1D Boolean NumPy array. This Series will then be used to index your Dataframe. The result will now be your filtered Pandas DataFrame.
- Note you can also use conditional and logical operators on Pandas Series as well since they are essentially NumPy Arrays. Pandas is built on top of NumPy
