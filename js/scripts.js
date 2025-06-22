function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}



function showRecipe(recipeId) {
    const modal = document.getElementById('recipe-modal');
    const title = document.getElementById('recipe-title');
    const description = document.getElementById('recipe-description');
    const ingredients = document.getElementById('recipe-ingredients');
    const instructions = document.getElementById('recipe-instructions');

    // Example recipe data
    const recipes = {
        'choco-strawberry': {
            title: 'Choco-Strawberry Delight',
            description: 'A delicious blend of chocolate and strawberry flavors.',
            ingredients: ['1 cup strawberries', '1/2 cup chocolate syrup', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'choco-vanilla': {
            title: 'Choco-Vanilla Twist',
            description: 'A delightful mix of chocolate and vanilla flavors.',
            ingredients: ['1/2 cup chocolate syrup', '1/2 cup vanilla ice cream', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'choco-mint': {
            title: 'Choco-Mint Breeze',
            description: 'A refreshing blend of chocolate and mint flavors.',
            ingredients: ['1/2 cup chocolate syrup', '1/4 cup mint leaves', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'straw-choco': {
            title: 'Straw-Choco Bliss',
            description: 'A blissful combination of strawberry and chocolate flavors.',
            ingredients: ['1 cup strawberries', '1/2 cup chocolate syrup', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'straw-banana': {
            title: 'Straw-Banana Smoothie',
            description: 'A tasty blend of strawberry and banana flavors.',
            ingredients: ['1 cup strawberries', '1 banana', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'straw-vanilla': {
            title: 'Straw-Vanilla Swirl',
            description: 'A delightful mix of strawberry and vanilla flavors.',
            ingredients: ['1 cup strawberries', '1/2 cup vanilla ice cream', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'vanilla-choco': {
            title: 'Vanilla-Choco Delight',
            description: 'A delightful mix of vanilla and chocolate flavors.',
            ingredients: ['1/2 cup vanilla ice cream', '1/2 cup chocolate syrup', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'vanilla-berry': {
            title: 'Vanilla Berry Bliss',
            description: 'A blissful combination of vanilla and berry flavors.',
            ingredients: ['1/2 cup vanilla ice cream', '1 cup mixed berries', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        },
        'vanilla-caramel': {
            title: 'Vanilla Caramel Dream',
            description: 'A dreamy blend of vanilla and caramel flavors.',
            ingredients: ['1/2 cup vanilla ice cream', '1/4 cup caramel syrup', '1 cup milk', '1 cup ice'],
            instructions: 'Blend all ingredients until smooth. Serve immediately.'
        }
    };

    const recipe = recipes[recipeId];
    title.textContent = recipe.title;
    description.textContent = recipe.description;
    ingredients.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    instructions.textContent = recipe.instructions;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRecipe() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


function showArticle(articleId) {
    const modal = document.getElementById('article-modal');
    const title = document.getElementById('article-title');
    const content = document.getElementById('article-content');

const articles = {
    'article-1': {
        title: 'Healthy Eating Tips',
        content: 'Eating healthy provides numerous benefits including better physical health, mental clarity, and more energy. It also reduces the risk of chronic diseases such as heart disease, diabetes, and obesity. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins supports overall well-being. For instance, incorporating more leafy greens like spinach and kale into your meals can boost your vitamin intake and improve immune function. Whole grains such as quinoa and brown rice provide essential nutrients and keep you full longer. Additionally, lean proteins like chicken, fish, and legumes help build and repair tissues. Moreover, maintaining a healthy diet can positively impact your mental health. Omega-3 fatty acids found in fish and flaxseeds are known to reduce symptoms of depression and anxiety. Staying hydrated by drinking plenty of water throughout the day also plays a crucial role in overall health. In conclusion, making mindful choices about what you eat can lead to a healthier, happier life.'
    },
    'article-2': {
        title: 'Best Smoothie Recipes',
        content: "Discover delicious smoothie recipes to try at home: 1. Strawberry Banana Smoothie: Blend 1 cup strawberries, 1 banana, 1 cup milk, and ice. 2. Green Detox Smoothie: Blend 1 cup spinach, 1 apple, 1 banana, 1 cup water, and ice. 3. Tropical Mango Smoothie: Blend 1 cup mango, 1/2 cup pineapple, 1 cup coconut water, and ice. 4. Blueberry Almond Smoothie: Blend 1 cup blueberries, 1/4 cup almonds, 1 cup almond milk, and ice. These smoothies are not only refreshing but also packed with essential nutrients and antioxidants. They make for a perfect breakfast or post-workout snack, providing you with the energy and nourishment your body needs. Feel free to experiment with different combinations of fruits, vegetables, and liquids to create your own personalized smoothie recipes. For instance, adding a handful of spinach or kale to your fruit smoothies can boost their nutrient content without significantly altering the taste. You can also incorporate superfoods like chia seeds, flaxseeds, or protein powder to enhance the nutritional value of your smoothies. In addition to traditional fruit-based smoothies, you can create savory vegetable smoothies by blending ingredients like cucumber, celery, and avocado. Adding fresh herbs like mint, basil, or cilantro can provide a burst of flavor and additional health benefits. For a creamy texture, consider using Greek yogurt, coconut milk, or almond butter in your smoothies. Smoothies are a versatile and convenient way to increase your intake of fruits and vegetables. They can be easily customized to suit your taste preferences and dietary needs. Whether you're looking for a quick breakfast option, a nutritious snack, or a post-workout recovery drink, smoothies offer endless possibilities for delicious and healthy creations."
    },
    'article-3': {
        title: 'Benefits of Regular Exercise',
        content: 'Regular exercise is crucial for maintaining good health. It helps improve cardiovascular health, boosts immune function, and increases energy levels. Exercise also has mental health benefits, including reducing stress, anxiety, and depression. Activities like jogging, swimming, cycling, and yoga are great ways to stay active. Aim for at least 30 minutes of moderate exercise most days of the week for optimal health benefits.'
    },
    'article-4': {
        title: 'Tasty and Healthy Snacks',
        content: 'Try these healthy snacks that are both delicious and nutritious: 1. Greek Yogurt with Honey and Berries: Mix Greek yogurt with a drizzle of honey and fresh berries. 2. Hummus and Veggies: Dip sliced veggies like carrots, celery, and bell peppers in hummus. 3. Apple Slices with Peanut Butter: Spread peanut butter on apple slices for a tasty treat. 4. Mixed Nuts: A handful of mixed nuts is a quick and healthy snack option.'
    }

    };

    const article = articles[articleId];
    if (article) {
        title.textContent = article.title;
        content.textContent = article.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        alert('Article not found');
    }
}

function closeArticle() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


function createArticleCard(article, articleId) {
    const card = document.createElement('div');
    card.className = 'article-card';

    const img = document.createElement('img');
    img.src = article.image;
    img.alt = article.title;

    const title = document.createElement('h3');
    title.innerText = article.title;

    const description = document.createElement('p');
    description.innerText = article.description;

    const button = document.createElement('button');
    button.className = 'full-article-button';
    button.innerText = 'Read More';
    button.onclick = function() {
        showArticle(articleId);
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            id: 'article-1',
            title: 'Healthy Eating Tips',
            description: 'Learn how to maintain a healthy diet with these tips.',
            image: 'images/healthy-eating.jpg',
            category: 'health'
        },
        {
            id: 'article-2',
            title: 'Best Smoothie Recipes',
            description: 'Discover delicious smoothie recipes to try at home.',
            image: 'images/smoothie-recipes.jpg',
            category: 'latest'
        },
        {
            id: 'article-3',
            title: 'Benefits of Regular Exercise',
            description: 'Find out why regular exercise is crucial for your health.',
            image: 'images/regular-exercise.jpg',
            category: 'health'
        },
        {
            id: 'article-4',
            title: 'Tasty and Healthy Snacks',
            description: 'Try out these snacks that are both delicious and good for you.',
            image: 'images/healthy-snacks.jpg',
            category: 'latest'
        },
    ];

    const latestArticlesContainer = document.getElementById('latest-articles');
    const healthArticlesContainer = document.getElementById('health-articles');

    articles.forEach(article => {
        const card = createArticleCard(article, article.id);
        if (article.category === 'latest') {
            latestArticlesContainer.appendChild(card);
        } else if (article.category === 'health') {
            healthArticlesContainer.appendChild(card);
        }
    });
});
