// Ingredient Database with Safety Ratings
const INGREDIENT_DATABASE = {
    // DANGEROUS INGREDIENTS
    'oxybenzone': {
        name: 'Oxybenzone',
        category: 'Chemical UV Filter',
        risk: 'danger',
        info: 'Can cause allergic skin reactions and hormonal disruption. Banned in some countries.',
        concern: 'Endocrine disruptor, persistent in environment',
        recommendation: 'Avoid if possible. Use mineral alternatives instead.'
    },
    'octinoxate': {
        name: 'Octinoxate (Octyl Methoxycinnamate)',
        category: 'Chemical UV Filter',
        risk: 'danger',
        info: 'May disrupt hormone regulation. Causes photoallergy in some people.',
        concern: 'Estrogenic activity, skin sensitization',
        recommendation: 'Avoid, especially for sensitive skin.'
    },
    'avobenzone': {
        name: 'Avobenzone',
        category: 'Chemical UV Filter',
        risk: 'warning',
        info: 'Unstable under UV and breaks down quickly. Less effective over time.',
        concern: 'Requires stabilizers, photodegrades',
        recommendation: 'Use with stabilizers like octocrylene. Effective for UVA protection.'
    },
    
    // WARNING INGREDIENTS
    'homosalate': {
        name: 'Homosalate',
        category: 'Chemical UV Filter',
        risk: 'warning',
        info: 'May disrupt hormones at high concentrations. Generally safe at standard levels.',
        concern: 'Endocrine disruption at high doses',
        recommendation: 'Acceptable in moderate concentrations. Look for products with lower percentages.'
    },
    'octisalate': {
        name: 'Octisalate (Octyl Salicylate)',
        category: 'Chemical UV Filter',
        risk: 'warning',
        info: 'May cause skin irritation. Low absorption rate is beneficial.',
        concern: 'Potential skin sensitization',
        recommendation: 'Test on small area first if you have sensitive skin.'
    },
    'cinoxate': {
        name: 'Cinoxate',
        category: 'Chemical UV Filter',
        risk: 'warning',
        info: 'Low absorption rate. Some concerns about photostability.',
        concern: 'May cause photoallergy',
        recommendation: 'Generally safe; monitor for any skin reactions.'
    },
    'phenoxyethanol': {
        name: 'Phenoxyethanol',
        category: 'Preservative',
        risk: 'warning',
        info: 'Synthetic preservative that can cause skin irritation in sensitive individuals.',
        concern: 'Potential endocrine disruptor at high levels',
        recommendation: 'Acceptable in cosmetics; choose alternatives if irritation occurs.'
    },
    'parabens': {
        name: 'Parabens (Methylparaben, Propylparaben, etc.)',
        category: 'Preservative',
        risk: 'warning',
        info: 'May mimic estrogen but at low concentrations in cosmetics are considered safe by many regulatory bodies.',
        concern: 'Potential endocrine disruption',
        recommendation: 'Use paraben-free alternatives if concerned. Generally recognized as safe by FDA.'
    },
    
    // SAFE INGREDIENTS
    'zinc oxide': {
        name: 'Zinc Oxide',
        category: 'Mineral UV Filter',
        risk: 'safe',
        info: 'Physical blocker that reflects UV rays. Non-irritating and reef-safe.',
        benefit: 'Broad-spectrum UVA/UVB protection, gentle on sensitive skin',
        recommendation: 'Excellent choice. Generally recommended by dermatologists.'
    },
    'titanium dioxide': {
        name: 'Titanium Dioxide',
        category: 'Mineral UV Filter',
        risk: 'safe',
        info: 'Physical UV blocker with minimal absorption. Safe for most skin types.',
        benefit: 'Broad-spectrum protection, photostable, non-irritating',
        recommendation: 'Great choice. Works well for sensitive and reactive skin.'
    },
    'octyl dimethyl paba': {
        name: 'Octyl Dimethyl PABA',
        category: 'Chemical UV Filter',
        risk: 'safe',
        info: 'Provides broad-spectrum UV protection. Well-tolerated by most skin types.',
        benefit: 'Effective UV protection, rarely causes irritation',
        recommendation: 'Safe and effective choice for most users.'
    },
    'glycerin': {
        name: 'Glycerin',
        category: 'Humectant',
        risk: 'safe',
        info: 'Hydrating ingredient that attracts moisture to the skin.',
        benefit: 'Improves skin hydration and barrier function',
        recommendation: 'Beneficial ingredient. Great for all skin types.'
    },
    'aloe vera': {
        name: 'Aloe Vera',
        category: 'Plant Extract',
        risk: 'safe',
        info: 'Soothing and hydrating natural ingredient.',
        benefit: 'Anti-inflammatory, moisturizing, gentle',
        recommendation: 'Excellent for sensitive and irritated skin.'
    },
    'vitamin e': {
        name: 'Vitamin E',
        category: 'Antioxidant',
        risk: 'safe',
        info: 'Protects skin from free radical damage. Improves barrier function.',
        benefit: 'Antioxidant protection, moisture retention',
        recommendation: 'Beneficial for all skin types, especially dry skin.'
    },
    'vitamin c': {
        name: 'Vitamin C',
        category: 'Antioxidant',
        risk: 'safe',
        info: 'Brightens skin and provides antioxidant protection.',
        benefit: 'Brightening, antioxidant protection, boosts collagen',
        recommendation: 'Great addition for anti-aging benefits.'
    },
    'hyaluronic acid': {
        name: 'Hyaluronic Acid',
        category: 'Hydrator',
        risk: 'safe',
        info: 'Holds up to 1000x its weight in water. Deeply hydrating.',
        benefit: 'Superior hydration, plumps skin',
        recommendation: 'Excellent for all skin types, especially dry skin.'
    },
    'cetyl alcohol': {
        name: 'Cetyl Alcohol',
        category: 'Emollient',
        risk: 'safe',
        info: 'Plant-derived emollient that conditions and thickens formulas.',
        benefit: 'Softening, hydrating, safe emollient',
        recommendation: 'Safe ingredient that improves texture.'
    },
    'tocopherol': {
        name: 'Tocopherol (Vitamin E)',
        category: 'Antioxidant',
        risk: 'safe',
        info: 'Form of vitamin E providing antioxidant benefits.',
        benefit: 'Antioxidant protection, preservative',
        recommendation: 'Safe and beneficial for skin health.'
    },
    'niacinamide': {
        name: 'Niacinamide (Vitamin B3)',
        category: 'Skin Strengthener',
        risk: 'safe',
        info: 'Strengthens skin barrier and reduces inflammation.',
        benefit: 'Improves barrier function, reduces irritation, oil control',
        recommendation: 'Excellent for all skin types.'
    },
    'centella asiatica': {
        name: 'Centella Asiatica (Cica)',
        category: 'Plant Extract',
        risk: 'safe',
        info: 'Soothing plant extract with healing properties.',
        benefit: 'Calms irritation, supports barrier repair',
        recommendation: 'Great for sensitive and reactive skin.'
    }
};

// State Management
let currentImage = null;
let extractedText = '';
let currentAnalysis = null;
let savedProducts = [];
let favorites = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadFavoritesFromStorage();
    loadProductsFromStorage();
});

function initializeEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', switchTab);
    });

    // Upload area
    const uploadArea = document.getElementById('uploadArea');
    uploadArea.addEventListener('click', () => document.getElementById('imageInput').click());
    uploadArea.addEventListener('dragover', (e) => e.preventDefault());
    uploadArea.addEventListener('drop', handleImageDrop);
    document.getElementById('imageInput').addEventListener('change', handleImageSelect);

    // Camera
    document.getElementById('startCameraBtn').addEventListener('click', startCamera);
    document.getElementById('captureBtn').addEventListener('click', capturePhoto);
    document.getElementById('stopCameraBtn').addEventListener('click', stopCamera);

    // Analysis
    document.getElementById('analyzeBtn').addEventListener('click', analyzeImage);
    document.getElementById('clearImageBtn').addEventListener('click', clearImage);
    document.getElementById('retryOcrBtn').addEventListener('click', retryOCR);

    // Comparison
    document.getElementById('saveProductBtn').addEventListener('click', saveProduct);
    document.getElementById('compareBtn').addEventListener('click', showComparison);
    document.getElementById('clearComparisonBtn').addEventListener('click', clearComparison);

    // Favorites
    document.getElementById('addFavoriteBtn').addEventListener('click', addToFavorites);

    // Results
    document.getElementById('startOverBtn').addEventListener('click', startOver);

    // Modal
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('favoritesModal');
        if (e.target === modal) modal.style.display = 'none';
    });
}

function switchTab(e) {
    const tabName = e.target.dataset.tab;
    
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

function handleImageDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        displayImage(files[0]);
    }
}

function handleImageSelect(e) {
    if (e.target.files.length > 0) {
        displayImage(e.target.files[0]);
    }
}

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        currentImage = e.target.result;
        document.getElementById('previewImg').src = currentImage;
        document.getElementById('imagePreview').style.display = 'block';
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('analyzeBtn').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearImage() {
    currentImage = null;
    extractedText = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('analyzeBtn').style.display = 'none';
    document.getElementById('imageInput').value = '';
}

// Camera Functions
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        document.getElementById('video').srcObject = stream;
        document.getElementById('startCameraBtn').style.display = 'none';
        document.getElementById('captureBtn').style.display = 'inline-block';
        document.getElementById('stopCameraBtn').style.display = 'inline-block';
    } catch (err) {
        alert('Error accessing camera: ' + err.message);
    }
}

function capturePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    currentImage = canvas.toDataURL('image/jpeg');
    
    document.getElementById('imagePreview').style.display = 'block';
    document.getElementById('previewImg').src = currentImage;
    document.getElementById('analyzeBtn').style.display = 'block';
    stopCamera();
}

function stopCamera() {
    const stream = document.getElementById('video').srcObject;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    document.getElementById('startCameraBtn').style.display = 'inline-block';
    document.getElementById('captureBtn').style.display = 'none';
    document.getElementById('stopCameraBtn').style.display = 'none';
}

// OCR Analysis
async function analyzeImage() {
    if (!currentImage) {
        alert('Please select an image first');
        return;
    }

    const statusEl = document.getElementById('ocrStatus');
    statusEl.style.display = 'block';
    statusEl.textContent = 'Extracting text from image... This may take a moment.';

    try {
        const result = await Tesseract.recognize(currentImage, 'eng');
        extractedText = result.data.text;
        
        statusEl.textContent = 'Text extracted! Analyzing ingredients...';
        
        // Parse ingredients and analyze
        analyzeIngredients(extractedText);
        
        statusEl.style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        document.querySelector('#analyzeBtn').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        statusEl.textContent = 'Error during OCR: ' + error.message + '. Please try again or manually enter ingredients.';
        console.error('OCR Error:', error);
    }
}

function analyzeIngredients(text) {
    // Extract likely ingredients
    const ingredients = extractIngredientsFromText(text);
    currentAnalysis = {
        ingredients: ingredients,
        analysed: analyzeIngredientsForSafety(ingredients)
    };

    displayResults();
}

function extractIngredientsFromText(text) {
    // Split text and clean up
    const lines = text.toLowerCase().split(/[\n,;]/);
    const ingredients = [];
    const seen = new Set();

    lines.forEach(line => {
        const cleaned = line.trim().replace(/[^\w\s]/g, '').toLowerCase();
        
        // Check against known ingredients
        Object.keys(INGREDIENT_DATABASE).forEach(key => {
            if (cleaned.includes(key.replace(/\s/g, ''))) {
                if (!seen.has(key)) {
                    ingredients.push(key);
                    seen.add(key);
                }
            }
        });

        // Also keep generic ingredient-like terms
        if (cleaned.length > 3 && cleaned.length < 50 && !cleaned.includes('active') && !cleaned.includes('inactive')) {
            // Extract potential ingredient names (words of reasonable length)
            const words = cleaned.split(/\s+/);
            words.forEach(word => {
                if (word.length > 3 && word.length < 30 && !seen.has(word) && 
                    !['active', 'inactive', 'ingredients', 'contains', 'water', 'and', 'other', 'apply'].includes(word)) {
                    ingredients.push(word);
                    seen.add(word);
                }
            });
        }
    });

    return [...new Set(ingredients)].filter(ing => ing.length > 2);
}

function analyzeIngredientsForSafety(ingredients) {
    const analysis = {
        safe: [],
        warning: [],
        danger: [],
        unknown: []
    };

    ingredients.forEach(ingredient => {
        const key = ingredient.toLowerCase();
        if (INGREDIENT_DATABASE[key]) {
            const data = INGREDIENT_DATABASE[key];
            analysis[data.risk].push({
                ...data,
                originalName: ingredient
            });
        } else {
            analysis.unknown.push(ingredient);
        }
    });

    return analysis;
}

function displayResults() {
    // Display extracted ingredients
    const ingredientsList = document.getElementById('extractedIngredients');
    ingredientsList.innerHTML = '';
    currentAnalysis.ingredients.forEach(ing => {
        const tag = document.createElement('div');
        tag.className = 'ingredient-tag';
        tag.textContent = ing;
        ingredientsList.appendChild(tag);
    });

    // Display safety analysis
    displaySafetyAnalysis();

    // Display risk summary
    displayRiskSummary();

    // Display usage info
    displayUsageInfo();

    // Display saved products section
    displaySavedProducts();
}

function displaySafetyAnalysis() {
    const container = document.getElementById('safetyAnalysis');
    container.innerHTML = '';

    const analysed = currentAnalysis.analysed;

    // Danger ingredients
    analysed.danger.forEach(ing => {
        container.appendChild(createIngredientAnalysisElement(ing, 'danger'));
    });

    // Warning ingredients
    analysed.warning.forEach(ing => {
        container.appendChild(createIngredientAnalysisElement(ing, 'warning'));
    });

    // Safe ingredients
    analysed.safe.forEach(ing => {
        container.appendChild(createIngredientAnalysisElement(ing, 'safe'));
    });

    // Unknown ingredients
    if (analysed.unknown.length > 0) {
        const unknownDiv = document.createElement('div');
        unknownDiv.className = 'ingredient-analysis';
        unknownDiv.innerHTML = `
            <div class="ingredient-name">ⓘ Unknown Ingredients (${analysed.unknown.length})</div>
            <div class="ingredient-info">These ingredients were found but are not in our database: ${analysed.unknown.join(', ')}</div>
        `;
        container.appendChild(unknownDiv);
    }
}

function createIngredientAnalysisElement(ingredient, riskLevel) {
    const div = document.createElement('div');
    div.className = `ingredient-analysis ${riskLevel}`;

    const riskText = riskLevel === 'safe' ? '✓ SAFE' : riskLevel === 'warning' ? '⚠ WARNING' : '✗ DANGER';
    const concern = ingredient.concern || ingredient.info;
    const recommendation = ingredient.recommendation || 'Use with caution.';

    div.innerHTML = `
        <div class="ingredient-name">${ingredient.name || ingredient}</div>
        <div class="ingredient-info"><strong>Category:</strong> ${ingredient.category || 'Unknown'}</div>
        <div class="ingredient-info"><strong>Concern:</strong> ${concern}</div>
        <div class="ingredient-info"><strong>Info:</strong> ${ingredient.info || 'No information available.'}</div>
        <div class="ingredient-info"><strong>Recommendation:</strong> ${recommendation}</div>
        <span class="risk-level ${riskLevel}">${riskText}</span>
    `;

    return div;
}

function displayRiskSummary() {
    const container = document.getElementById('riskSummary');
    container.innerHTML = '';

    const analysed = currentAnalysis.analysed;
    const dangerCount = analysed.danger.length;
    const warningCount = analysed.warning.length;
    const safeCount = analysed.safe.length;

    // Danger items
    const dangerDiv = document.createElement('div');
    dangerDiv.className = `risk-item ${dangerCount > 0 ? 'high' : 'low'}`;
    dangerDiv.innerHTML = `
        <div class="risk-number">${dangerCount}</div>
        <div class="risk-label">Dangerous Ingredients</div>
    `;
    container.appendChild(dangerDiv);

    // Warning items
    const warningDiv = document.createElement('div');
    warningDiv.className = `risk-item ${warningCount > 0 ? 'medium' : 'low'}`;
    warningDiv.innerHTML = `
        <div class="risk-number">${warningCount}</div>
        <div class="risk-label">Warning Ingredients</div>
    `;
    container.appendChild(warningDiv);

    // Safe items
    const safeDiv = document.createElement('div');
    safeDiv.className = 'risk-item low';
    safeDiv.innerHTML = `
        <div class="risk-number">${safeCount}</div>
        <div class="risk-label">Safe Ingredients</div>
    `;
    container.appendChild(safeDiv);

    // Overall rating
    const overallDiv = document.createElement('div');
    let riskRating = 'EXCELLENT';
    let riskClass = 'low';
    
    if (dangerCount > 0) {
        riskRating = 'HIGH RISK - NOT RECOMMENDED';
        riskClass = 'high';
    } else if (warningCount > 0) {
        riskRating = 'MODERATE RISK - USE CAUTION';
        riskClass = 'medium';
    } else {
        riskRating = 'LOW RISK - SAFE CHOICE';
        riskClass = 'low';
    }

    overallDiv.className = `risk-item ${riskClass}`;
    overallDiv.innerHTML = `
        <div class="risk-number">Overall</div>
        <div class="risk-label">${riskRating}</div>
    `;
    container.appendChild(overallDiv);
}

function displayUsageInfo() {
    const container = document.getElementById('usageInfo');
    container.innerHTML = `
        <h3>How to Use Sunscreen Properly</h3>
        <ul>
            <li><strong>Amount:</strong> Use 1 ounce (about 6 teaspoons) for your entire body</li>
            <li><strong>Application:</strong> Apply generously and evenly to all exposed areas</li>
            <li><strong>Timing:</strong> Apply 15 minutes before sun exposure</li>
            <li><strong>Reapplication:</strong> Reapply every 2 hours, or after swimming/sweating</li>
            <li><strong>Coverage:</strong> Don't forget ears, neck, tops of feet, and part line on scalp</li>
        </ul>

        <h3>Understanding SPF</h3>
        <ul>
            <li><strong>SPF:</strong> Sun Protection Factor blocks UVB rays</li>
            <li><strong>SPF 30:</strong> Blocks about 97% of UVB rays</li>
            <li><strong>SPF 50+:</strong> Blocks about 98% of UVB rays</li>
            <li><strong>Broad Spectrum:</strong> Look for this term to ensure UVA protection too</li>
        </ul>

        <h3>Types of Sunscreen</h3>
        <ul>
            <li><strong>Physical/Mineral:</strong> Zinc oxide & titanium dioxide - gentler, reef-safe</li>
            <li><strong>Chemical:</strong> Absorbs UV rays - lighter texture but may irritate sensitive skin</li>
            <li><strong>Hybrid:</strong> Combination of physical and chemical filters</li>
        </ul>

        <h3>For Different Skin Types</h3>
        <ul>
            <li><strong>Sensitive Skin:</strong> Choose mineral sunscreens (zinc oxide, titanium dioxide)</li>
            <li><strong>Oily Skin:</strong> Look for lightweight, oil-free formulations</li>
            <li><strong>Dry Skin:</strong> Choose creamy formulas with hydrating ingredients like glycerin</li>
            <li><strong>Acne-Prone:</strong> Avoid heavy oils; choose non-comedogenic formulas</li>
        </ul>
    `;
}

function displaySavedProducts() {
    const container = document.getElementById('savedProducts');
    container.innerHTML = '';

    if (savedProducts.length === 0) {
        container.innerHTML = '<p style="color: #999;">No products saved yet. Save this product to compare later!</p>';
        document.getElementById('compareBtn').style.display = 'none';
    } else {
        document.getElementById('compareBtn').style.display = 'inline-block';
        savedProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div>
                    <strong>${product.name || 'Product ' + (index + 1)}</strong>
                    <div style="font-size: 0.9em; color: #666;">
                        ${product.analysis.analysed.danger.length} danger, 
                        ${product.analysis.analysed.warning.length} warnings
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="removeProduct(${index})">Remove</button>
            `;
            container.appendChild(card);
        });
    }
}

function saveProduct() {
    const productName = document.getElementById('productName').value || 'Product ' + (savedProducts.length + 1);
    
    savedProducts.push({
        name: productName,
        analysis: currentAnalysis,
        timestamp: new Date().toISOString()
    });

    saveProductsToStorage();
    document.getElementById('productName').value = '';
    displaySavedProducts();
    alert('Product saved for comparison!');
}

function removeProduct(index) {
    savedProducts.splice(index, 1);
    saveProductsToStorage();
    displaySavedProducts();
}

function showComparison() {
    if (savedProducts.length < 2) {
        alert('Need at least 2 products to compare');
        return;
    }

    const comparisonView = document.getElementById('comparisonView');
    comparisonView.style.display = 'block';

    let tableHTML = '<div class="comparison-table"><table><tr><th>Ingredient</th>';
    
    savedProducts.forEach(product => {
        tableHTML += `<th>${product.name}</th>`;
    });

    tableHTML += '</tr>';

    // Collect all ingredients
    const allIngredients = new Set();
    savedProducts.forEach(product => {
        product.analysis.ingredients.forEach(ing => allIngredients.add(ing));
    });

    // Create rows for each ingredient
    allIngredients.forEach(ingredient => {
        tableHTML += `<tr><td><strong>${ingredient}</strong></td>`;
        
        savedProducts.forEach(product => {
            const analysis = product.analysis.analysed;
            let status = '✓ Safe';
            let className = 'safe';

            const found = analysis.safe.find(ing => ing.originalName === ingredient || ing.name.toLowerCase() === ingredient.toLowerCase());
            if (found) {
                status = '✓ Safe';
                className = 'safe';
            }

            const warning = analysis.warning.find(ing => ing.originalName === ingredient || ing.name.toLowerCase() === ingredient.toLowerCase());
            if (warning) {
                status = '⚠ Warning';
                className = 'warning';
            }

            const danger = analysis.danger.find(ing => ing.originalName === ingredient || ing.name.toLowerCase() === ingredient.toLowerCase());
            if (danger) {
                status = '✗ Danger';
                className = 'danger';
            }

            const notFound = !product.analysis.ingredients.includes(ingredient);
            if (notFound) {
                status = '—';
                className = 'unknown';
            }

            tableHTML += `<td style="background: ${className === 'safe' ? '#f1f8f4' : className === 'warning' ? '#fff8f0' : className === 'danger' ? '#ffebee' : '#f8f9fa'}; font-weight: 600;">${status}</td>`;
        });

        tableHTML += '</tr>';
    });

    tableHTML += '</table></div>';
    document.getElementById('comparisonTable').innerHTML = tableHTML;
    comparisonView.scrollIntoView({ behavior: 'smooth' });
}

function clearComparison() {
    document.getElementById('comparisonView').style.display = 'none';
    savedProducts = [];
    saveProductsToStorage();
    displaySavedProducts();
}

function addToFavorites() {
    const productName = document.getElementById('productName').value || 'Product - ' + new Date().toLocaleDateString();
    
    favorites.push({
        name: productName,
        analysis: currentAnalysis,
        timestamp: new Date().toISOString()
    });

    saveFavoritesToStorage();
    alert('Added to favorites!');
    displayFavorites();
}

function displayFavorites() {
    const container = document.getElementById('favoritesList');
    container.innerHTML = '';

    if (favorites.length === 0) {
        container.innerHTML = '<p style="color: #999;">No favorites yet. Click "Add to Favorites" to save your preferred products!</p>';
    } else {
        favorites.forEach((favorite, index) => {
            const item = document.createElement('div');
            item.className = 'favorite-item';
            item.innerHTML = `
                <h4>${favorite.name}</h4>
                <div><span class="danger-count">${favorite.analysis.analysed.danger.length}</span> Dangerous</div>
                <div><span class="warning-count">${favorite.analysis.analysed.warning.length}</span> Warnings</div>
                <div>${favorite.analysis.analysed.safe.length} Safe Ingredients</div>
                <button class="btn btn-secondary" onclick="removeFavorite(${index})">Remove</button>
            `;
            container.appendChild(item);
        });

        // Show view all button
        const viewAllBtn = document.createElement('button');
        viewAllBtn.className = 'btn btn-primary';
        viewAllBtn.textContent = 'View All Favorites';
        viewAllBtn.style.width = '100%';
        viewAllBtn.onclick = showFavoritesModal;
        const controlsDiv = document.querySelector('.favorite-controls');
        if (controlsDiv.parentElement.querySelector('button[onclick="showFavoritesModal"]')) {
            controlsDiv.parentElement.removeChild(controlsDiv.parentElement.querySelector('button[onclick="showFavoritesModal"]'));
        }
        controlsDiv.parentElement.insertBefore(viewAllBtn, controlsDiv.nextSibling);
    }
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    saveFavoritesToStorage();
    displayFavorites();
}

function showFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesModalContent');
    content.innerHTML = '';

    favorites.forEach((favorite, index) => {
        const card = document.createElement('div');
        card.className = 'favorite-item';
        card.innerHTML = `
            <h4>${favorite.name}</h4>
            <p><strong>Saved:</strong> ${new Date(favorite.timestamp).toLocaleDateString()}</p>
            <div><span class="danger-count">${favorite.analysis.analysed.danger.length}</span> Dangerous Ingredients</div>
            <div><span class="warning-count">${favorite.analysis.analysed.warning.length}</span> Warning Ingredients</div>
            <div>${favorite.analysis.analysed.safe.length} Safe Ingredients</div>
            <button class="btn btn-secondary" onclick="removeFavorite(${index})">Remove</button>
        `;
        content.appendChild(card);
    });

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('favoritesModal').style.display = 'none';
}

function retryOCR() {
    analyzeImage();
}

function startOver() {
    clearImage();
    document.getElementById('resultsSection').style.display = 'none';
    document.querySelector('.input-section').scrollIntoView({ behavior: 'smooth' });
}

// Storage Functions
function saveFavoritesToStorage() {
    localStorage.setItem('sunscreenFavorites', JSON.stringify(favorites));
}

function loadFavoritesFromStorage() {
    const stored = localStorage.getItem('sunscreenFavorites');
    if (stored) {
        favorites = JSON.parse(stored);
        displayFavorites();
    }
}

function saveProductsToStorage() {
    localStorage.setItem('sunscreenProducts', JSON.stringify(savedProducts));
}

function loadProductsFromStorage() {
    const stored = localStorage.getItem('sunscreenProducts');
    if (stored) {
        savedProducts = JSON.parse(stored);
    }
}
