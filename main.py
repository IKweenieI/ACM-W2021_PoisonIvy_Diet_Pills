array=[['Categories', 'Food Name', 'Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B1 (thiamine)', 'Vitamin B2 (riboflavin)', 'Vitamin B3 (niacin)', 'Vitamin B6 (pyridoxine)', 'Vitamin B12 (cyanocobalamin)', 'Pantothenic acid (B5)', 'Biotin (B7)', 'Folate (folic acid or B9)', 'Vitamin E', 'Vitamin K'], ['Bakery and Bread', 'wheat bread', '0', '0.2', '0', '0.411', '0.252', '5.59', '0.111', '0', '0.82', '0', '0', '0.19', '0.0049'], ['Bakery and Bread', 'white bread', '0', '0', '0', '0.507', '0.24', '4.76', '0.092', '0', '0', '0', '0.171', '0.22', '0.0002'], ['Bakery and Bread', 'chocolate cake', '0', '0', '0.0003', '0.619', '0.399', '5.989', '0.135', '0.4', '0', '0', '0.221', '1.66', '0.0108'], ['Meat and Seafood', 'chicken', '0', '0', '0', '0.109', '0.241', '5.575', '0.512', '0.00056', '1.092', '0', '0.001', '0.27', '0.0008'], ['Meat and Seafood', 'fish', '', '', '0.0109', '0.08', '0.105', '7.995', '0.611', '0.00415', '1.03', '0', '0.004', '0.4', '0.0004'], ['Meat and Seafood', 'mutton', '0.33', '0.5', '0.0005', '0.07', '0.197', '3.18', '0.092', '0.0013', '', '0', '0.019', '', '0.0114'], ['Pasta and Rice', 'white rice', '0', '0', '0', '0.578', '0.048', '5.093', '0.145', '0', '1.342', '0', '0.386', '0.11', '0'], ['Pasta and Rice', 'brown rice', '0', '0', '0', '0.541', '0.095', '6.494', '0.477', '0', '1.065', '0', '0.023', '0.6', '0.0006'], ['Pasta and Rice', 'pasta', '0', '0', '0', '0.272', '0.135', '1.679', '0.049', '0', '0', '0', '0.118', '0.06', '0'], ['Oils Sauces Salad Dressings and Condiments', 'ketchup', '0.026', '4.1', '', '0.011', '0.166', '1.434', '0.158', '0', '0', '0', '0.009', '1.46', '0.003'], ['Oils Sauces Salad Dressings and Condiments', 'olive oil', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '14.35', '0.0602'], ['Oils Sauces Salad Dressings and Condiments', 'mayonnaise', '0.016', '0', '0.0002', '0.01', '0.019', '0', '0.008', '0.00012', '0', '0', '0.005', '3.28', '0.163']]

# Categories= set([i[0] for i in array])
# print(Categories)

Categories=['Oils Sauces Salad Dressings and Condiments', 'Categories', 'Bakery and Bread', 'Meat and Seafood', 'Pasta and Rice']


#  <div>
#         <h3>heading</h3>
#         <div class="checkbox-divs">
#             <input type="checkbox" id="1" name="1">
#             <label for="1">Label Name</label>
#             <input type="number" name="intake" id="input-num-1" class="display-none" min="1" max="10" step="2">
#         </div>
#     </div>

s2="""<div class="checkbox-divs">
             <input type="checkbox" id="1" name="1">
             <label for="1">Label Name</label>
            <input type="number" name="intake" id="input-num-1" class="display-none" min="1" max="10" step="2">
         </div>"""


s1="""<div class="all-section">
         <h3>heading</h3>"""
unique=1
for cat in Categories:
    print(s1.replace("heading",cat))
    for i in range(len(array)):
        if cat in array[i]:
            print(s2.replace("1", str(unique)).replace("Label Name", array[i][1].capitalize()))
            unique+=1
    print('</div>')


